# React ext state

## A simple package for using external states

![Example](https://github.com/SergoMorello/react.ext.state/blob/dev/doc/chrome-capture-2023-5-1.gif?raw=true)

### Install
```
npm i react-ext-state
```

### Examples:

#### useState
```js
// App.js
import "./App.css";

import Info from "./Info";
import Button from "./Button";

const App = () => {	
	return(<div className="app">
		<Info nameState="test"/>
		<Button title="Hello world!" nameState="test"/>
		<Button title="Easy ext state!" nameState="test"/>
	</div>)
};

export default App;

// Button.js
import Ext from "react-ext-state";

const Button = ({title, nameState}) => {
	const handle = () => {
		Ext.setState(nameState, title);
	};

	return(<button onClick={handle}>{title}</button>);
};

export default Button;


// Info.js
import Ext from "react-ext-state";

const Info = ({nameState}) => {
	const info = Ext.useState(nameState, 'Any inital value');
	return(<div className="info">{info}</div>);
};

export default Info;
```

#### useEvent
```js
// Info.js
import React from "react";
import Ext from "react-ext-state";

const Info = ({nameState}) => {
	const [info, setInfo] = React.useState('Any inital value');
	Ext.useEvent(nameState, setInfo);
	return(<div className="info">{info}</div>);
};

export default Info;
```