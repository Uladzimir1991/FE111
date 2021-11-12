import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./App.js";

function Counter() {
    const {count} = useContext(AppContext)

	const [glass] = useState([])

	useEffect(() => {

		glass.push(<img src="/glass.png" alt="cup" />)
		
	}, [count])

    return (
        <div className="counter">
			<div className="counter__value">{count}ml</div>
			<div className="counter__cups">
				{glass}
			</div>
		</div>
    )
}

export default Counter;