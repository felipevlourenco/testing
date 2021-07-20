import React from 'react'
import ReactDOM from 'react-dom'
import TestAxios from '../TestAxios'
import {
  act,
  render,
  fireEvent,
  cleanup,
  waitForElement,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import mockAxios from './../__mocks__/axios'

// jest.mock('axios')

afterEach(cleanup)

it('Async axios request works', async () => {
  console.log(`- mockAxios`, mockAxios)
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { title: 'some title' } }))

  // axios.get.mockResolvedValue({ data: { title: 'some title' } })
  // axios.get.mockImplementation(() => Promise.resolve({ data: { title: 'some title' } }))

  const url = 'https://jsonplaceholder.typicode.com/posts/1'
  const { getByText, getByTestId, rerender } = render(<TestAxios url={url} />)

  // expect(getByText(/...Loading/i).textContent).toBe('...Loading')

  await waitForElementToBeRemoved(() => getByText('Loading...'))

  const resolvedEl = getByTestId('title')

  expect(resolvedEl.textContent).toBe('some title')

  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(url)
})
