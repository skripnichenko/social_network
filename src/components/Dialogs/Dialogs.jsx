import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validator';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = props.messagesPage.messagesData.map(m => <Message message={m.message} key={m.id} />);

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={c.messages}>
                <div>{messagesElements} </div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='newMessageBody'
                placeholder='Enter your message' validate={[required, maxLength50]} />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;