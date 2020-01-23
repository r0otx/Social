import React from "react";
import s from './Music.module.css';

const Music = () => {
    return (
<div className={s.tracklist}>
    <li>Track1</li>
    <li>Track2</li>
    <li>Track3</li>
    <li>Track4</li>
    <li>Track5</li>
    <li>Track6</li>
</div>
    );
}

export default Music;