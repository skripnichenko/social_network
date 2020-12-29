import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from './../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('./login')
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshProfile();
        }
            
    }

    render() {
        return (
            <Profile {...this.props} saveProfile={this.props.saveProfile} isOwner={!this.props.match.params.userID} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto} />

        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)