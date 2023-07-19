import React from 'react';
import s from '../App.module.css';
type ButtonPropsType={
    name:string
    setState:()=>void
    state:number
    disabled?:boolean
}
export const Button = (props:ButtonPropsType) => {
    return (
        <button disabled={props.disabled}   className={s.button + ' '+{}} onClick={()=>props.setState()}>{props.name}</button>
    );
};

