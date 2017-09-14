import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import { MusicForm } from './form.jsx';
import { MusicList } from './musicList.jsx';

function playlist(state = [], action) {
	if(action.type === 'ADD_TRACK') {
		return[
			...state,
			action.payload
		];
	}
	return state;
}
const store = createStore(playlist);

store.subscribe( () => {

	});
export class App extends React.Component {
	render() {
		return (
			<header className="container">
				<MusicForm />
				<MusicList />
			</header>
			);
		}
	}

ReactDOM.render(<App />, document.getElementById('root'));