import React, { useState } from "react";
import Counter from './Counter.jsx'
import Water from "./Water.js";
import Controls from "./Controls.jsx";


export const AppContext = React.createContext()

function App() {

	const [goal, setGoal] = useState(2000);
	const [volume, setVolume] = useState(200);
	const [count, setCount] = useState(0);

	let changeStyle = () => {
		let btn = document.querySelectorAll('button')
			btn.forEach(element => {		
				if(element.className === 'btn off') {
					element.classList.toggle('off')
					element.classList.add('on')
					document.querySelector('.App').style.backgroundColor = 'rgb(0, 0, 0, 0.4)'
				} 

				else if(element.className === 'btn on') {
					element.classList.remove('on')
					element.classList.add('off')
					document.querySelector('.App').style.backgroundColor = 'inherit'
				}	
			})
	}

	return (
		<div className="App">
		<AppContext.Provider value={{count, setCount, volume, setVolume, goal, setGoal}}>
			<button onClick={changeStyle} className="btn on">Dark</button>
			<button onClick={changeStyle} className="btn off">Light</button>
			
			<Counter />
			<Water />
			<Controls />
			
		</AppContext.Provider>
		</div>
	);
}

export default App;
