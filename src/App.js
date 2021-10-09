import userEvent from '@testing-library/user-event';
import React, { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react';
import { Component } from 'react';
import ItemsList from './components/ItemsList';

const App = () => {

  const [ value, setValue ] = useState(1)
  const [ text, setText ] = useState("TEXT")
  const [ hide, setHide] = useState("hide text")
  
  const textHandler = () => {
    if(text !== null) {
      setText(null)
      setHide("show text")
    }
    else {
      setText("TEXT")
      setHide("hide text")
    }
  }
  
  if (value < 0) {
    setValue(value + 1)
  }

  const generateItems = useCallback(() => {
    return new Array(value).fill("").map((_, i) => `Element ${i + 1}`)
  },[value]) 
  
  
  return (
    <>
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>increase</button>
      <button onClick={() => setValue(value - 1)}>decrease</button>
      <div>{text}</div>
      <button onClick={textHandler}>{hide}</button>
      <ItemsList getItems={generateItems}/>
    </div>
    </>
  );
}

export default App;