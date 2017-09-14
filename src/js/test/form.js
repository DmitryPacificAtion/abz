import React from 'react';
import ReactDOM from 'react-dom';

export class MusicForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {switch: true};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState (prevState => ({
			switch: !prevState.switch
		}));
	}
	render() {
		return (
			<div>
				<input type="text"/>
				<button type="submit" className="success" onClick={this.handleClick}>{this.state.switch ? 'ON' : 'OFF'}</button>
			</div>
		);
	}
}