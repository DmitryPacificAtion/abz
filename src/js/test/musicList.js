import React from 'react';
import ReactDOM from 'react-dom';

export class MusicList extends React.Component {
	render() {
		return (
			<ul>
				<ListItem list="abc"/>
				<ListItem list="def"/>
				<ListItem list="ghi"/>
			</ul>
		);
	}
}

class ListItem extends React.Component {
	render() {
		return (
			<li>{this.props.list}</li>
		);
	}
}

