import React from 'react';
import s from './Settings.module.css';
type InputPropsType={
    name:string
    callback:(value:string)=>void
    max?:number
    error:string|null
    min?:number

}
export const Input = (props:InputPropsType) => {

    return (
        <div className={s.inputsContainer}>
            <span className={s.span}>{props.name}</span>
            <input className={s.input+' '+(props.error?s.redInput:'') }
                   value={props.max||props.min}
                   onChange={(e)=>props.callback(e.currentTarget.value)}
                   type="number"
            />
        </div>
    );
};

