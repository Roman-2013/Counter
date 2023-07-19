import React, {useState} from 'react';
import s from './App.module.css';
import {Tablo} from './Component/Tablo';
import {Button} from './Component/Button';

function App() {
    let [state, setState] = useState(0)

    const incHandler = () => {
        if (state < 5) {
            setState(state + 1)
        }
    }

    const resetHandler = () => {
        setState(0)
    }


    return (
        <div className={s.center}>
            <Tablo class={state >= 5 ? s.disabled : ''} state={state}/>
            <div className={s.buttons}>
                <Button disabled={state >= 5} name={'inc'} setState={incHandler} state={state}/>
                <Button disabled={state === 0} name={'reset'} setState={resetHandler} state={state}/>
            </div>

        </div>
    )
}

export default App;
