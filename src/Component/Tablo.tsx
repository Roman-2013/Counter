import React from 'react';
import s from '../App.module.css';
type TabloPropsType={
    state:number
    class:string
}
export const Tablo = (props:TabloPropsType) => {
    return (
        <div className={s.number+' '+ props.class}>{props.state}</div>
    );
};

