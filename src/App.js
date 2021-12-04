import React, { Component } from "react";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Game from "./components/Game";
import "./styles/App.css";

config.autoAddCss = false;

class App extends Component 
{
	render() 
	{
		return (
			<div className='App'>
				<Game />
			</div>
		);
	}
}

export default App;
