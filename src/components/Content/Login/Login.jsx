import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css";

let maxLength = maxLengthCreator(32);

const LoginForm = (props) => {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Email"}
                            name={"email"}
                            component={Input}
                            validate={[required, maxLength]}/></div>
                <div><Field placeholder={"Password"}
                            name={"password"}
                            component={Input}
                            type={"password"}
                            validate={[required, maxLength]}/></div>
                {props.captcha &&
                <div><Field placeholder={"Captcha"}
                            name={"captcha"}
                            component={Input}/>
                    <img src={props.captcha} alt={"captcha"}/>
                </div>}
                <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember me</div>
                {props.error && <div className={s.formControlSummaryError}>
                    {props.error}
                </div> }
                <div>
                    <button>Enter</button>
                </div>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    return <LoginReduxForm onSubmit={onSubmit} captcha={props.getCaptcha}/>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    getCaptcha: state.auth.getCaptcha
});

export default connect(mapStateToProps, {login})(Login);