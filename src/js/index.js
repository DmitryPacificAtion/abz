import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import App from './app.js';

const options = [
	'h1': 'Hello world'
];

class MusicForm extends React.Component {
	render() {
		return (
			<div><App /></div>
		);
	}
}

ReactDOM.render(<App />, document.getElementBtId('root'));