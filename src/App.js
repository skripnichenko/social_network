import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './HOC/withSuspense'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <div className='app-wrapper' >
        <HeaderContainer />

        <Navbar />

        <div className='app-wrapper-content' >
          <Switch>
            <Route exact path='/'
              render={() => <Redirect to={'/profile'} />} />
            <Route path='/dialogs'
              render={withSuspense(DialogsContainer)} />

            <Route path='/profile/:userID?'
              render={withSuspense(ProfileContainer)} />

            <Route path='/users'
              render={
                () => < UsersContainer />} />

            <Route path='/login'
              render={
                () => < LoginPage />} />

            <Route path='*'
              render={
                () => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);