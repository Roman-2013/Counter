import React, {useState} from 'react';
import s from './Settings.module.css';
import {Button} from '../Component/Button';
import {Input} from './Input';


type SettingsPropsType = {
    setMax: (value: number) => void
    setMin: (value: number) => void
    disable: (value: boolean) => void
    disableValue: boolean
    max: number
    error: string | null
    min:number

}

export const Settings = (props: SettingsPropsType) => {


    const setMaxHandler = (value: string) => {
        props.setMax(+value)
        props.disable(false)
    }
    const setMinHandler = (value: string) => {
        props.setMin(+value)
        props.disable(false)
    }
    const disableHandler = () => {
        props.disable(true)
    }

    return (
        <div className={s.center}>
            <div className={s.inputs}>
                <Input error={props.error}
                       max={props.max}
                       callback={(value) => setMaxHandler(value)}
                       name={'max value:'}
                />
                <Input error={props.error}
                       min={props.min}
                       callback={(value) => setMinHandler(value)}
                       name={'start value:'}
                />
            </div>
            <div className={s.buttons}>
                <Button callback={disableHandler}
                        disabled={props.error ? true : props.disableValue}
                        name={'set'}
                />
            </div>
        </div>
    )
};

