import React from 'react';
import { Field, reduxForm } from 'redux-form';
import c from './MyPosts.module.css';
import Posts from './Posts/Posts';
import { maxLengthCreator, required } from './../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControls';

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='newPostText'
                 placeholder='Post message' />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const MyPosts = React.memo(props => {

    let postsElements = props.postsData.map(p => <Posts key={p.id} message={p.message} likesCount={p.likesCount} />);

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div className={c.posts}>
                {postsElements}
            </div>

        </div>
    )
})


const AddNewPostReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts;