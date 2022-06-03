import React, {useEffect, useState} from 'react';

const ProfileStatusWidthHooks = (props) => {


    let [editMode, setEditMode ] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {

        setStatus(props.status)
    }, [props.status]);

  const  ActivateEditMode = () => {
      setEditMode(true);
    }

    const  deActivateEditMode = () => {
         props.updateStatus(status);
        setEditMode(false);
    }


    const  onStatusChenge = (e) => {
       setStatus(e.currentTarget.value)

    }

    return (<div>
            { !editMode &&
                 <div>
                     <span onDoubleClick={ActivateEditMode}>{props.status || "----"}</span>
                </div>
            }
            {editMode && <div>
                    <input onChange={onStatusChenge} autoFocus={true} type="text" onBlur={deActivateEditMode}
                    value={status}/>

            </div>
            }

        </div>
    );


};

export default ProfileStatusWidthHooks;