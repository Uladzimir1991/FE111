import React, { useContext } from "react";
import { AppContext } from "./App.js";

function Controls() {
	const {count, setCount, volume, goal, setVolume, setGoal} = useContext(AppContext)

	const add = function(event) {
        let c = count;
        c += volume;

        if (c <= goal) setCount(c);

        if(event.target) {
            let water = document.querySelector('.water__grad')

            water.style.top = 65 - (count / (goal / 60)) + '%';
            
            if((count + volume) === goal) {
                event.target.disabled = true;
            }
        }
    }

    const updateVolume = function(event) {

        const value = +event.target.value;

        let btn = document.querySelector('.btnDrop')
        btn.addEventListener('click', event => {
            if(event.target) {
                setVolume(value)
            }
        })
    }

    const updateGoal = function(event) {
        
        const value = +event.target.value;

        let btn = document.querySelector('.btnDrop')
        btn.addEventListener('click', event => {
            if(event.target) {
                setGoal(value)
            }
        })
    }

    return (
        <div className="control">
			<input onChange={updateVolume} type="text" name="control_ml" defaultValue={volume} />
			<button className='btnDrop' onClick={add} disabled={false}></button>
			<input onChange={updateGoal} type="text" name="control__goal" defaultValue={goal}/> 
		</div>
    )
}

export default Controls;