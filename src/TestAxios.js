import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TestAxios = props => {
  const [state, setState] = useState()

  useEffect(() => {
    const load = async () => {
      const res = await axios.get(props.url)
      setState(res.data)
    }
  }, [])

  return (
    <div>
      <h1> Axios Test </h1>
      {state ? <p data-testid="title">{state.title}</p> : <p>...Loading</p>}
    </div>
  )
}

export default TestAxios
