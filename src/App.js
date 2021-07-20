import React, { useState } from 'react'
import Context from './store/context'
import TestHook from './TestHook'
import TestHookReducer from './TestHookReducer'
import TestHookContext from './TestHookContext'
import './App.css'
import TestForm from './TestForm'
import TestAxios from './TestAxios'

function App() {
  const [name, setName] = useState('Moe')
  const [state, setState] = useState('Some Text')

  const changeName = () => {
    setName('Steve')
  }

  const changeText = () => {
    setState('Some Other Text')
  }

  return (
    <div className="app">
      <TestHook name={name} changeName={changeName} />
      <TestHookReducer />
      <Context.Provider value={{ changeTextProp: changeText, stateProp: state }}>
        <TestHookContext />
      </Context.Provider>
      <TestForm />
      <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" />
    </div>
  )
}

export default App
