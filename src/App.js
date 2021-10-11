import userEvent from '@testing-library/user-event';
import React, { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react';
import { Component } from 'react';
import Calendar from './components/Calendar';



export const AlertContext = React.createContext()

const App = () => {

  console.log(alert)
  return (
    <>
   <Calendar/>
    </>
  );
}

export default App;