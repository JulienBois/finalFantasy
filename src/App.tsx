import React, { useState } from 'react';
import HomePresentation from "./Home/HomePresentation";
import './input.css';
import Menu from "./Home/Menu";
import {Saga} from "./interfaces/Saga";

const logos:Saga[] = [
    { logo: require("./assets/logos/ff1_logo.png") },
    { logo: require("./assets/logos/ff2_logo.png") },
    { logo: require("./assets/logos/ff3_logo.png") },
    { logo: require("./assets/logos/ff4_logo.png") },
    { logo: require("./assets/logos/ff5_logo.png") },
    { logo: require("./assets/logos/ff6_logo.png") },
    { logo: require("./assets/logos/ff7_logo.png"), background: "bg-ff-7", customStyle: 'ff7' },
    { logo: require("./assets/logos/ff8_logo.png") },
    { logo: require("./assets/logos/ff9_logo.png") },
    { logo: require("./assets/logos/ff10_logo.png") },
    { logo: require("./assets/logos/ff10-2_logo.png") },
    { logo: require("./assets/logos/ff11_logo.png") },
    { logo: require("./assets/logos/ff12_logo.png") },
    { logo: require("./assets/logos/ff12-2_logo.png") },
    { logo: require("./assets/logos/ff13_logo.png") },
    { logo: require("./assets/logos/ff13-2_logo.png") },
    { logo: require("./assets/logos/ff14_logo.png") },
    { logo: require("./assets/logos/ff15_logo.png") },
    { logo: require("./assets/logos/ff16_logo.png") },
    { logo: require("./assets/logos/ff_dissidia_logo.png") },
]

const randomSaga:Saga = logos[Math.floor(Math.random() * logos.length)];

function App() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    }

    return  click ? (
        <div>
            <Menu saga={randomSaga}/>
        </div>) : (
        <div onClick={handleClick}>
            <HomePresentation randomLogo={randomSaga.logo}/>
        </div>
    );
}

export default App;
