import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import {AlertContext} from "./../../App"

const Main = ({changer}) => {
    const  setAlert  = useContext(AlertContext)
    const [ textBtn, setTextBtn ] = useState("Show alert")

    const textHandler = () => setTextBtn("Hide alert")
    return (
        <>
        <h1>Hello</h1>
        <button onClick={changer}>{textBtn}</button>
        </>
    );
}

export default Main;
