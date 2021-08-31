import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { useSetState } from '../dist'
import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
require('./setup/env')

test.before.each(() => {
  cleanup()
})

test('check if state is readable', async () => {
  function Component () {
    const [state] = useSetState({
      name: 'Reaper',
      age: 16
    })

    return (
      <>
        <p>name: {state.name}</p>
        <p>age: {state.age}</p>
      </>
    )
  }

  const { findByText } = render(<Component />)
  assert.ok(await findByText('name: Reaper'))
})

test('check if a single state changed', async () => {
  function Component () {
    const [state, setState] = useSetState({
      name: 'Reaper',
      age: 16
    })

    React.useEffect(() => {
      setState({
        name: 'Hello World'
      })
    }, [setState])

    return (
      <>
        <p>name: {state.name}</p>
        <p>age: {state.age}</p>
      </>
    )
  }

  const { findByText } = render(<Component />)
  assert.ok(await findByText('name: Hello World'))
})

test('check if a single state changed with function update', async () => {
  function Component () {
    const [state, setState] = useSetState({
      name: 'Reaper',
      age: 16
    })

    React.useEffect(() => {
      setState((prevState, draftState) => {
        draftState.name = 'Hello World'
        return draftState
      })
    }, [setState])

    return (
      <>
        <p>name: {state.name}</p>
        <p>age: {state.age}</p>
      </>
    )
  }

  const { findByText } = render(<Component />)
  assert.ok(await findByText('name: Hello World'))
})

// Not related to the project, just added to see if the
// tests fail as expected
test('fail case check', async () => {
  function Component () {
    const [state] = useSetState({
      name: 'Reaper',
      age: 16
    })

    return (
      <>
        <p>name: {state.name}</p>
        <p>age: {state.age}</p>
      </>
    )
  }

  const { findByText } = render(<Component />)
  const failed = await findByText('name: hello').catch((_) => true)
  assert.is(failed, true)
})

test.run()
