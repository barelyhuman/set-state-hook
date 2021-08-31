<h1 align="center">set-state-hook</h1>
<p align="center">Simple SetState Equivalent Using Immer</p>

<p>If you like any of my work, you can support me on: <a href="https://barelyhuman.dev/donate">https://barelyhuman.dev/donate</a></p>
 <p align="center">
 <img alt="GitHub" src="https://img.shields.io/github/license/barelyhuman/use-set-state?logoColor=000&colorA=000000&colorB=000000">
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?colorA=000000&colorB=000000" alt="JavaScript Style Guide"></a>
<a href="https://bundlephobia.com/result?p=@barelyhuman/set-state-hook"><img src="https://img.shields.io/bundlephobia/min/@barelyhuman/set-state-hook?label=bundle%20size&amp;style=flat&amp;colorA=000000&amp;colorB=000000" alt="Build Size"></a>
 <a href="https://www.npmjs.com/package/@barelyhuman/set-state-hook"><img src="https://img.shields.io/npm/v/@barelyhuman/set-state-hook?style=flat&amp;colorA=000000&amp;colorB=000000" alt="Version"></a>
 <a href="https://www.npmjs.com/package/@barelyhuman/set-state-hook"><img src="https://img.shields.io/npm/dt/@barelyhuman/set-state-hook.svg?style=flat&amp;colorA=000000&amp;colorB=000000" alt="Downloads"></a>
 <a href="https://github.com/barelyhuman/set-state-hook/actions/workflows/test.yml"><img src="https://img.shields.io/github/workflow/status/barelyhuman/set-state-hook/test?colorA=000&colorB=000&label=test" alt=""></a>
 </p>

## Install

```sh
$ npm install @barelyhuman/set-state-hook
# or
$ yarn add @barelyhuman/set-state-hook
```

## Usage

```jsx
import { useSetState } from "@barelyhuman/set-state-hook";

function Component() {
  const [state, setState] = useSetState({
    name: "Reaper",
    age: 16,
  });

  React.useEffect(() => {
    setState({
      name: "Hello World",
    });
  }, [setState]);

  // or

  React.useEffect(() => {
    setState((prevState, draftState) => {
      draftState.name = "Hello World";
      return draftState;
    });
  }, [setState]);

  return (
    <>
      <p>name: {state.name}</p>
      <p>age: {state.age}</p>
    </>
  );
}
```

## Features

- Easier state management for dependent state fields
- Immutable and rock-solid and easy to handle (thanks to [immerjs](https://github.com/immerjs/immer))

## License

[MIT](LICENSE) &copy; Reaper
