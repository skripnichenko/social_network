import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from "redux-form";
import { CreateField, Input } from '../common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validator';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import c from './../common/FormsControls/FormsControls.module.css'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) return <Redirect to={'/profile'} />
    return <div>
        <h1>Login</h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </div>
}

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>

            {CreateField('Login', 'login', [required], Input)}
            {CreateField('Password', 'password', [required], Input, { type: 'password' })}
            {CreateField(null, 'rememberMe', [], Input, { type: 'checkbox' }, )}

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && CreateField('Symbols from image', 'captcha', [required], Input)}

            {error && <div className={c.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Loggin</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => {
    return ({ 
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth 
    })
}

export default connect(mapStateToProps, { login })(Login);