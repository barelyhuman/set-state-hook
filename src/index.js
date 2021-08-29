import { useCallback, useState } from 'react'

export function useSetState (
  initState,
  options = { log: false, logger: console.log }
) {
  const [internalState, setInternalState] = useState(initState || {})

  const setState = useCallback(
    (_setterState) => {
      setInternalState((prevState) => {
        if (typeof _setterState === 'function') {
          return _setterState(cloneDeep(prevState))
        }

        const clone = cloneDeep(prevState)

        Object.keys(_setterState).forEach((key) => {
          clone[key] = _setterState[key]
        })

        if (options.log) {
          options.logger({ prevState: prevState, state: clone })
        }

        return clone
      })
    },
    [setInternalState]
  )

  return [internalState, setState]
}

function cloneDeep (toClone) {
  if (toClone === null || typeof toClone !== 'object') return toClone

  switch (toClone.constructor) {
    case Boolean:
      return Boolean(toClone)
    case Number:
      return Number(toClone)
    case String:
      return String(toClone)
    case Date:
      return new Date(new Date().setTime(toClone.getTime()))
    case Array:
      return toClone.map((o) => cloneDeep(o))
    case RegExp:
      return RegExp(toClone)
    case BigInt:
      return BigInt(toClone)
    case Object: {
      const copy = {}
      Object.keys(toClone).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(toClone, key)) {
          copy[key] = cloneDeep(toClone[key])
        }
      })
      return copy
    }
  }
  return toClone
}
