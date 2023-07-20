import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from './Component/Counter';
import {Settings} from './Settings/Settings';

function App() {
    let [max, setMax] = useState(5)
    let [min, setMin] = useState(0)
    let [disable, setDisable] = useState(true)
    let [state, setState] = useState(0)
    let [error, setError] = useState<string | null>(null)

    useEffect(()=>{
        let newMax=localStorage.getItem('maximal')
        let newMin=localStorage.getItem('minimal')
        let newState=localStorage.getItem('state')
        if(newMax && newMin && newState){
            setMax(+newMax)
            setMin(+newMin)
            setState(+newState)
        }
    },[])



    useEffect(()=>{
        localStorage.setItem('maximal',max.toString())
        localStorage.setItem('minimal',min.toString())
        localStorage.setItem('state',state.toString())

    },[max,min,state])




    useEffect(() => {
        if (min < 0 || min === max || min > max) {
            setError('Incorrect value!')
            console.log(error)
        } else {
            setError(null)
            console.log(error)
        }
    }, [min, max])

    const setMinHandler = (value: number) => {
        setMin(value)
        setState(value)
    }

    return (
        <div className={s.center}>
            <Settings error={error}
                      min={min}
                      max={max}
                      disableValue={disable}
                      disable={setDisable}
                      setMin={(value) => setMinHandler(value)}
                      setMax={(value) => setMax(value)}/>
            <Counter error={error}
                     setState={setState}
                     state={state}
                     disableValue={disable}
                     min={min} max={max}/>
        </div>


    )
}

export default App;


//-------------------------------------------------------------------------
// function App() {
//     let [state, setState] = useState(0)
//
//     const incHandler = () => {
//         if (state < 5) {
//             setState(state + 1)
//         }
//     }
//
//     const resetHandler = () => {
//         setState(0)
//     }
//
//
//     return (
//
//         <div className={s.center}>
//             <Tablo class={state >= 5 ? s.disabled : ''} state={state}/>
//             <div className={s.buttons}>
//                 <Button disabled={state >= 5} name={'inc'} setState={incHandler} state={state}/>
//                 <Button disabled={state === 0} name={'reset'} setState={resetHandler} state={state}/>
//             </div>
//
//         </div>
//     )
// }
//
// export default App;