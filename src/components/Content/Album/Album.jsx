import React from "react";
import s from './Album.module.css';

const Album = () => {
    return (
<div className={s.gridPhoto}>
    <div className={s.photo1}>1</div>
    <div className={s.photo2}>2</div>
    <div className={s.photo3}>3</div>
    <div className={s.photo4}>4</div>
    <div className={s.photo5}>5</div>
    <div className={s.photo6}>6</div>
    <div className={s.photo7}>7</div>
    <div className={s.photo8}>8</div>
    <div className={s.photo9}>9</div>
</div>
    );
}

export default Album;