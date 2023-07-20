import React from 'react';
import s from '../Counter.module.css';

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button disabled={props.disabled}
                className={s.button}
                onClick={() => props.callback ? props.callback() : ''}
        >
            {props.name}
        </button>
    );
};

