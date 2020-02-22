import React from "react";
import s from "./FormsControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div><textarea {...input} {...props} /></div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div><input {...input} {...props}/></div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    );
};

export const InputFile = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div><input type="file" {...input} {...props}/></div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    );
};