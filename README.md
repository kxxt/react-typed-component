# react-typed-component

[![GitHub issues](https://img.shields.io/github/issues/kxxt/react-typed-component)](https://github.com/kxxt/react-typed-component/issues)
[![GitHub forks](https://img.shields.io/github/forks/kxxt/react-typed-component)](https://github.com/kxxt/react-typed-component/network)
[![GitHub stars](https://img.shields.io/github/stars/kxxt/react-typed-component)](https://github.com/kxxt/react-typed-component/stargazers)
[![GitHub license](https://img.shields.io/github/license/kxxt/react-typed-component)](https://github.com/kxxt/react-typed-component/blob/master/LICENSE)

A react wrapper for [typed.js](https://github.com/mattboldt/typed.js)

This is a maintained fork of [react-typed](https://github.com/ssbeefeater/react-typed). 

I'm quite new to maintain a npm package. If there are bugs, please open an issue in this repo.

Live demo (Storybook): https://kxxt.github.io/react-typed-component

## Installation

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/)

```sh
yarn add react-typed-component
        #or
npm i react-typed-component
```

## Examples

### A basic example

```jsx
import ReactTyped from "react-typed-component";

const MyComponent = () => (
  <div>
    <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
    <br />

    <ReactTyped
      strings={[
          "Search for products",
          "Search for categories",
          "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
      >
        <input type="text" />
      </ReactTyped>
  </div>
);
```

### Using typed start, stop, toggle, destroy, reset functions

```jsx
import ReactTyped from "react-typed-component";

const MyComponent = () => (
  <div>
    <Button onClick={this.typed.start()}>Start</Button>
    <Button onClick={this.typed.stop()}>Stop</Button>
    <Button onClick={this.typed.toggle()}>Toggle</Button>
    <Button onClick={this.typed.destroy()}>Destroy</Button>
    <Button onClick={this.typed.reset()}>Reset</Button>
    <ReactTyped
      typedRef={(typed) => {
        this.typed = typed;
      }}
      strings={["Here you can find anything"]}
      typeSpeed={40}
    />
  </div>
);
```

for blinking cursor `import 'react-typed-component/dist/animatedCursor.css';`

## Documentation

`react-typed-component` supports all official options that you can find [here](http://www.mattboldt.com/typed.js/docs/).
But also supports some extra props:

| propType          | required | default | description                                      |
| ----------------- | -------- | ------- | ------------------------------------------------ |
| style(object)     | no       | -       | styles for the outer element                     |
| className(string) | no       | -       | class name for the outer element                 |
| children(object)  | no       | -       | the element to wrap                              |
| typedRef(func)    | no       | -       | typedRef(self: Typed) returns the Typed instance |
| stopped(bool)     | no       | -       | initialize in stopped state                      |

## Credits

Thanks to @ssbeefeater for creating the original [react-typed](https://github.com/ssbeefeater/react-typed).

Thanks to all contributers of [typed.js](https://github.com/mattboldt/typed.js).
