import React, {useState} from 'react';
import s from '../Counter.module.css';
import {Tablo} from './Tablo';
import {Button} from './Button';

type CounterPropsType = {
    max: number
    min: number
    disableValue: boolean
    state: number
    setState: (state: number) => void
    error: string | null
}
export const Counter = (props: CounterPropsType) => {
    const incHandler = () => {
        if (props.state < props.max) {
            props.setState(props.state + 1)
        }
    }
    const resetHandler = () => {
        props.setState(props.min)
    }


    return (
        <div className={s.center}>
            <Tablo disableValue={props.disableValue}
                   class={props.state >= props.max || props.error ? s.disabled : ''}
                   error={props.error}
                   state={props.state}
            />
            <div className={s.buttons}>
                <Button disabled={!props.disableValue || props.state >= props.max}
                        name={'inc'}
                        callback={() => incHandler()}
                />
                <Button disabled={!props.disableValue}
                        name={'reset'}
                        callback={resetHandler}
                />
            </div>

        </div>
    )
};

