import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Login"} name={"login"} component={"input"}/></div>
                <div><Field placeholder={"Password"} name={"password"} component={"input"}/></div>
                <div><Field type={"checkbox"} name={"remember"} component={"input"}/>Remember me</div>
                <div><button>Enter</button></div>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <LoginReduxForm onSubmit={onSubmit} />
};

export default Login;