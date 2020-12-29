import React from 'react';
import c from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={c.posts}>
            <div className={c.item}>
                <img src='https://st2.depositphotos.com/1006472/5665/i/600/depositphotos_56658541-stock-photo-faceless-hooded-anonymous-computer-hacker.jpg' alt=''></img>
                {props.message}
                <div>
                    <span>likes {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Posts;