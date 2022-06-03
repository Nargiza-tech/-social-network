import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../coman/FormsControl/FormsControl";
import {requiredFiled} from "../../utils/validators/Validators";
import {connect} from "react-redux";
import {login} from "../../redax/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "../coman/FormsControl/formControls.module.css"




const LoginForm = (props) => {
    console.log(props)
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} name={"email"} placeholder={"email"}
                    validate={[requiredFiled]}/>
                </div>
                <div>
                    <Field component={Input} type={"password"} name={"password"} placeholder={"Password"}
                         validate={[requiredFiled]}/>
                </div>
                <div>
                    <Field component={Input}   name={"rememberMe"} type="checkbox"
                           validate={[requiredFiled]}/> remember me
            </div>

                {
                    props.error && <div className={classes.formSummeryError}>
                        {props.error}
                    </div>
                }
                <div>
                    <button>Login</button>
                    </div>

            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>
                Login
            </h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
}
)

export default connect(mapStateToProps, {login}) (Login);