import React, { useState } from 'react';
import HomePresentation from "./HomePresentation";
import './input.css';
import Menu from "./Menu";

const logos = [
    require("./assets/logos/ff1_logo.png"),
    require("./assets/logos/ff2_logo.png"),
    require("./assets/logos/ff3_logo.png"),
    require("./assets/logos/ff4_logo.png"),
    require("./assets/logos/ff5_logo.png"),
    require("./assets/logos/ff6_logo.png"),
    require("./assets/logos/ff7_logo.png"),
    require("./assets/logos/ff8_logo.png"),
    require("./assets/logos/ff9_logo.png"),
    require("./assets/logos/ff10_logo.png"),
    require("./assets/logos/ff10-2_logo.png"),
    require("./assets/logos/ff11_logo.png"),
    require("./assets/logos/ff12_logo.png"),
    require("./assets/logos/ff12-2_logo.png"),
    require("./assets/logos/ff13_logo.png"),
    require("./assets/logos/ff13-2_logo.png"),
    require("./assets/logos/ff14_logo.png"),
    require("./assets/logos/ff15_logo.png"),
    require("./assets/logos/ff16_logo.png"),
    require("./assets/logos/ff_dissidia_logo.png"),
]

function App() {
    const [click, setClick] = useState(false);
    const randomLogo:string = logos[Math.floor(Math.random() * logos.length)];

    const handleClick = () => {
        setClick(true);
    }

    return  click ? (
        <div>
            <Menu randomLogo={randomLogo}/>
        </div>) : (
        <div onClick={handleClick}>
            <HomePresentation randomLogo={randomLogo}/>
        </div>
    );
}

export default App;
