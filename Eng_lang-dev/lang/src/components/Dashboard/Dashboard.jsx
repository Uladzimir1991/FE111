import React, {useState, useContext, useEffect} from "react";
import * as dashboardStyles from "./Dashboard.module.css"
import Store from "../../context.js"

const Dashboard = ({points}) => {
    const {count, setCount, time, setTime} = useContext(Store);
    const [result, setResult] = useState({visible: false})
    console.log(result.visible)

    const randomLetter = () => {
        const rand = Math.random() * (122 - 97) + 97;
        const letter = String.fromCharCode(rand);

        return letter;
    }

    const [letter, setLetter] = useState(randomLetter());

    let nTime = time;
    let sTI = null;

    const check = (event) => {
        event.stopPropagation();

        if (event.key === letter) {
            setLetter(randomLetter());

            let newCount = count;
            setCount(++newCount);
        }
        
        if (sTI == null) sTI = setInterval(() => {
            nTime--;
            setTime(nTime);

            if (nTime === 0) clearInterval(sTI);

        }, 1000);
    }

    useEffect(() => {
        if (time === 0 && sTI === null) {
            setResult({visible: true})
            setTime(20)
            // setCount(0)
        }
    }, [time]);

    if(result.visible === false) {
        return (
            <section className={dashboardStyles.dashboardContainer}>
                <div className={dashboardStyles.gameBlock}>
                    <div className={dashboardStyles.game__info}>
                        <span className={dashboardStyles.game__count}>Count: {count}</span> <span className={dashboardStyles.game__time}>Time: {time}</span>
                    </div>

                    <div className={dashboardStyles.game__letter}>
                        <input type="text" value={letter} readOnly />
                        <button className={dashboardStyles.btnStart} onKeyUp={check}>Start</button>
                    </div>

                    <p className={dashboardStyles.title}>Press the &laquo;START&raquo; button and the correct letter to start the game!=)</p>
                </div>

                <div className={dashboardStyles.pointsBlock}>
                    <span> Common experience </span>
                    <h3> {points} points </h3>
                </div>
                <div className={dashboardStyles.levelBlock}>
                    <span> level </span>
                    <h3> {(0.2 * Math.sqrt(points)).toFixed()} level </h3>
                    <p> Learn 750 new words in one course </p>

                    <div className={dashboardStyles.levelBackground}></div>
                </div>
            </section>
        )
    } else {
        return(
            <section className={dashboardStyles.dashboardContainer}>
                <div className={dashboardStyles.gameBlock}>
                    <p className={dashboardStyles.resultTitle}>Ur result is - &laquo;{count}&raquo;!! Go to the our games and learn english with fun =)</p> 
                </div>

                <div className={dashboardStyles.pointsBlock}>
                    <span> Common experience </span>
                    <h3> {points} points </h3>
                </div>
                <div className={dashboardStyles.levelBlock}>
                    <span> level </span>
                    <h3> {(0.2 * Math.sqrt(points)).toFixed()} level </h3>
                    <p> Learn 750 new words in one course </p>

                    <div className={dashboardStyles.levelBackground}></div>
                </div>
            </section> 
        )
    }
}

export default Dashboard;