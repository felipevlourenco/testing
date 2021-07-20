import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent, cleanup } from '@testing-library/react'
import TestHook from '../TestHook'
import App from '../App'

afterEach(cleanup)

describe('TestHook', () => {
  it('Text in state change when button click', () => {
    const { getByText } = render(<TestHook />)
    expect(getByText(/initial/i).textContent).toBe('Initial State')

    fireEvent.click(getByText(/State Change Button/i))
    expect(getByText(/initial/i).textContent).toBe('Initial State Changed')
  })
})

describe('App', () => {
  it('button click changes props', () => {
    const { getByText } = render(<App />)
    expect(getByText(/Moe/i).textContent).toBe('Moe')

    fireEvent.click(getByText('Change Name'))
    expect(getByText(/Steve/i).textContent).toBe('Steve')
  })
})
