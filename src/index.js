import { produce } from 'immer'
import { useState } from 'react'

export function useSetState (
  initState,
  options = { log: false, logger: console.log }
) {
  const [internalState, setInternalState] = useState(initState || {})

  const setState = (_setterState) => {
    setInternalState((prevState) => {
      if (typeof _setterState === 'function') {
        return produce(prevState, _setterState)
      }

      const modifiedState = produce(prevState, (draftState) => {
        Object.keys(_setterState).forEach((key) => {
          draftState[key] = _setterState[key]
        })

        if (options.log) {
          options.logger({ prevState: internalState, state: draftState })
        }

        return draftState
      })

      return modifiedState
    })
  }

  return [internalState, setState]
}
