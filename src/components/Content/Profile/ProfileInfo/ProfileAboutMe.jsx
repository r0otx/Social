import React, {useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import s from "../../common/FormsControls/FormsControls.module.css";
import style from "./ProfileInfo.module.css";
import {connect} from "react-redux";
import {getUserProfile, setUserAboutMe} from "../../../../redux/profile-reducer";
import {required} from "../../../../utils/validators/validators";
import {getAuthUserData} from "../../../../redux/auth-reducer";
import {withRouter} from "react-router-dom";

const ProfileAboutMeForm = (props) => {
    return (
        <>
            <div className={style.main}>
                <div className={style.mainText}>Основное</div>
            </div>
            <form onSubmit={props.handleSubmit}>
                <div className={style.inputLabel}>
                    <div className={style.formStyle}><label>Name:</label>
                        <Field placeholder={"Edit name"}
                               name={"fullName"} validate={[required]}
                               component={Input}/></div>
                    <div className={style.formStyle}><label>About Me:</label>
                        <Field placeholder={"About Me"}
                               name={"aboutMe"}
                               validate={[required]}
                               component={Input}/></div>
                    <div className={style.formStyle}><label>Search Job?</label>
                        <Field type={"checkbox"}
                               name={"lookingForAJob"}
                               component={"input"}/></div>
                    <div className={style.formStyle}><label>Description Job:</label>
                        <Field placeholder={"Description Job"}
                               name={"lookingForAJobDescription"}
                               validate={[required]}
                               component={Input}/></div>
                    <div className={style.hover}/>
                    <div>Links to Social Network</div>
                    <div className={style.formStyle}><label>Facebook:</label>
                        <Field placeholder={"Social Facebook"}
                               name={"facebook"}
                               component={Input}/></div>
                    <div className={style.formStyle}><label>Site:</label>
                        <Field placeholder={"Social WebSite"}
                               name={"website"}
                               component={Input}/>
                    </div>
                    <div className={style.formStyle}><label>Vkontakte:</label>
                        <Field placeholder={"Social Vkontakte"}
                               name={"vk"}
                               component={Input}/>
                    </div>
                    <div className={style.formStyle}><label>Twitter:</label>
                        <Field placeholder={"Social Twitter"}
                               name={"twitter"}
                               component={Input}/>
                    </div>
                    <div className={style.formStyle}><label>Instagram:</label>
                        <Field placeholder={"Social Instagram"}
                               name={"instagram"}
                               component={Input}/></div>
                    <div className={style.formStyle}><label>Youtube:</label>
                        <Field placeholder={"Social Youtube"}
                               name={"youtube"}
                               component={Input}/>
                    </div>
                    <div className={style.formStyle}><label>Github:</label>
                        <Field placeholder={"Social Github"}
                               name={"github"}
                               component={Input}/>
                    </div>
                    <div className={style.formStyle}><label>MainLink:</label>
                        <Field placeholder={"Social Mainlink"}
                               name={"mainlink"}
                               component={Input}/></div>
                    {props.error && <div className={s.formControlSummaryError}>
                        {props.error}
                    </div>}
                    <div>
                        <button>Save</button>
                    </div>
                </div>
            </form>
        </>
    );
};

const ProfileAboutMeReduxForm = reduxForm({form: 'aboutMeForm'})(ProfileAboutMeForm);

const ProfileAboutMe = (props) => {

    useEffect(() => {
        props.getAuthUserData();
        props.getUserProfile(props.authorizedUserId);
    }, []);

    const onSubmit = (formData) => {
        props.setUserAboutMe(formData);
    };
    return (
        <div className={style.gridContainerSetting}>
            <div className={style.content}><ProfileAboutMeReduxForm onSubmit={onSubmit} initialValues={props.profile}/>
            </div>
            <div className={style.nav}></div>
        </div>
    )
};

let mapDispatchToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId
});

export default connect(mapDispatchToProps, {setUserAboutMe, getUserProfile, getAuthUserData})(ProfileAboutMe);