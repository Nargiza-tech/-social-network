import React from 'react';


class ProfileStatus  extends React.Component {
    // statusInputRef = React.createRef();

    state = ({
        editMode: false,
        status: this.props.status
    });


//если мы создадим стрелочный метод то метод bind(this) нам не понадобитсья


    ActivateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        // this.props.updateStatus(this.statusInputRef.current.value)
        this.props.updateStatus(this.state.status)
    }
    onStatusChenge = (e) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    componentDidUpdate(prevProps,prevState) {
          if(prevProps.status !==  this.props.status){
              this.setState({
          status: this.props.status
      })
    }
    }

    render() {


        return (<div>
                {
                    !this.state.editMode &&

                    <div>
           <span onDoubleClick={this.ActivateEditMode}>
               {this.props.status || "----"}
           </span>
                    </div>
                }
                {
                    this.state.editMode &&

                    <div>
                <span>
                    <input onChange={this.onStatusChenge} autoFocus={true} onBlur={this.deActivateEditMode} type="text"
                           value={this.state.status}/>
                </span>
                    </div>
                }

            </div>
        );
    }

}

export default ProfileStatus;