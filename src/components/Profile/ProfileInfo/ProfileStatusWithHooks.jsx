import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editeMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return <div>
        {!editeMode &&
            <div>
                <b>Status</b>: <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
            </div>
        }
        {editeMode &&
            <div>
                <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />
            </div>
        }
    </div>
}


export default ProfileStatusWithHooks;