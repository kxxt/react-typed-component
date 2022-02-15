import React from "react";
import ReactTyped from "../ReactTyped";

const description = `

* typedInstance.toggle() :Toggle start() and stop() of the Typed instance.
* typedInstance.Stop: typing / backspacing and enable cursor blinking.
* typedInstance.start(): Start typing / backspacing after being stopped.
* destroy(): Destroy this instance of Typed.
* reset(restart?): Reset Typed and optionally restarts.

 You can get typed instance like this\n
<ReactTyped typedRef={ (typedInstance)=>{ this.typed = typedInstance; } } />
`;

let typedInstance; // only for demo
const defaults = {
  strings: [
    "welcome to react-typed",
    'This is a react component that wraps up the <a href="https://github.com/mattboldt/typed.js/">typed.js</a>',
    'If you like the project add a star in <a href="https://github.com/mattboldt/typed.js/">typed.js</a> and <a href="https://github.com/mattboldt/typed.js/">react-typed</a>',
  ],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true,
  startDelay: 0,
  smartBackspace: true,
  shuffle: false,
  backDelay: 1,
  fadeOut: false,
  fadeOutDelay: 100,
  loopCount: 0,
  showCursor: true,
  cursorChar: "|",
  bindInputFocusEvents: false,
};

export default {
  title: "ReactTyped",
  parameters: {
    info: {
      text: description,
    },
  },
};

const Controls = () => (
  <div>
    <br />
    <button onClick={() => typedInstance.start()}>Start</button>
    <button onClick={() => typedInstance.stop()}>Stop</button>
    <button onClick={() => typedInstance.reset()}>Reset</button>
    <button onClick={() => typedInstance.toggle()}>Toggle</button>
    <button onClick={() => typedInstance.destroy()}>Destroy</button>
  </div>
);

const Template = ({ children, ...args }) => (
  <div>
    <ReactTyped {...args}>{children}</ReactTyped>
    <Controls />
  </div>
);

export const BasicExample = (args) => (
  <Template
    typedRef={(typed) => {
      typedInstance = typed;
    }}
    {...args}
  />
);

BasicExample.args = defaults;

export const WithInput = (args) => (
  <Template
    typedRef={(typed) => {
      typedInstance = typed;
    }}
    {...args}
  >
    <input type="text" />
  </Template>
);
WithInput.args = {
  ...defaults,
  loop: false,
  attr: "placeholder",
};

export const SmartBackspace = Template.bind({});

SmartBackspace.args = {
  ...defaults,
  backSpeed: 50,
  strings: [
    "Here you can find hardware",
    "Here you can find software",
    "Here you can find net tools",
  ],
};

export const Stopped = (args) => (
  <div>
    Press start <br />
    <br />
    <ReactTyped
      typedRef={(typed) => {
        typedInstance = typed;
      }}
      {...args}
    />
    <Controls/>
  </div>
);

Stopped.args = {
  ...defaults,
  backSpeed: 50,
  stopped: true,
  strings: [
    "Here you can find hardware",
    "Here you can find software",
    "Here you can find net tools",
  ],
};
