import React from 'react';
import s from '../Counter.module.css';

type TabloPropsType = {
    state: number
    class: string
    disableValue?: boolean
    error:string|null
}
export const Tablo = (props: TabloPropsType) => {
    return (
        <div
            className={s.number + ' ' + props.class}>{props.error?props.error:props.disableValue?props.state:'enter values and press "set"'}</div>
    );
};


//--------------------------------------------------------------------
// export const Tablo = (props: TabloPropsType) => {
//     return (
//         <div
//             className={s.number + ' ' + props.class}>{props.disableValue ? props.state : 'enter values and press "set"'}</div>
//     );
// };