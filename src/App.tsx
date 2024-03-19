import React, { useState } from 'react';
import HomePresentation from "./Home/HomePresentation";
import './input.css';
import Menu from "./Home/Menu";
import {Saga} from "./interfaces/Saga";

const logos:Saga[] = [
    { logo: require("./assets/logos/ff1_logo.png"), mainTheme: require("./assets/musics/ffI.mp3"), opening: require("./assets/openings/ffI_opening.mp4") },
    { logo: require("./assets/logos/ff2_logo.png"), mainTheme: require("./assets/musics/ffII.mp3"), opening: require("./assets/openings/ffII_opening.mp4") },
    { logo: require("./assets/logos/ff3_logo.png"), mainTheme: require("./assets/musics/ffI.mp3"), opening: require("./assets/openings/ffIII_opening.mp4") },
    { logo: require("./assets/logos/ff4_logo.png"), mainTheme: require("./assets/musics/ffIV.mp3"), opening: require("./assets/openings/ffIV_opening.mp4") },
    { logo: require("./assets/logos/ff5_logo.png"), mainTheme: require("./assets/musics/ffV.mp3"), opening: require("./assets/openings/ffV_opening.mp4") },
    { logo: require("./assets/logos/ff6_logo.png"), mainTheme: require("./assets/musics/ffVI.mp3"), opening: require("./assets/openings/ffVI_opening.mp4") },
    { logo: require("./assets/logos/ff7_logo.png"), mainTheme: require("./assets/musics/ffVII.mp3"), background: "bg-ff-7", customStyle: 'ff7' , opening: require("./assets/openings/ffVII_opening.mp4") },
    { logo: require("./assets/logos/ff8_logo.png"), mainTheme: require("./assets/musics/ffVIII.mp3"), opening: require("./assets/openings/ffVIII_opening.mp4") },
    { logo: require("./assets/logos/ff9_logo.png"), mainTheme: require("./assets/musics/ffIX.mp3"), opening: require("./assets/openings/ffIX_opening.mp4") },
    { logo: require("./assets/logos/ff10_logo.png"), mainTheme: require("./assets/musics/ffX.mp3"), opening: require("./assets/openings/ffX_opening.mp4") },
    { logo: require("./assets/logos/ff10-2_logo.png"), mainTheme: require("./assets/musics/ffX.mp3"), opening: require("./assets/openings/ffX_opening.mp4") },
    { logo: require("./assets/logos/ff11_logo.png"), mainTheme: require("./assets/musics/ffXI.mp3"), opening: require("./assets/openings/ffXI_opening.mp4") },
    { logo: require("./assets/logos/ff12_logo.png"), mainTheme: require("./assets/musics/ffXII.mp3"), opening: require("./assets/openings/ffXII_opening.mp4") },
    { logo: require("./assets/logos/ff12-2_logo.png"), mainTheme: require("./assets/musics/ffXII.mp3"), opening: require("./assets/openings/ffXII_opening.mp4") },
    { logo: require("./assets/logos/ff13_logo.png"), mainTheme: require("./assets/musics/ffXIII.mp3"), opening: require("./assets/openings/ffXIII_opening.mp4") },
    { logo: require("./assets/logos/ff13-2_logo.png"), mainTheme: require("./assets/musics/ffXIII.mp3"), opening: require("./assets/openings/ffXIII_opening.mp4") },
    { logo: require("./assets/logos/ff14_logo.png"), mainTheme: require("./assets/musics/ffXIV.mp3"), opening: require("./assets/openings/ffXIV_opening.mp4") },
    { logo: require("./assets/logos/ff15_logo.png"), mainTheme: require("./assets/musics/ffXV.mp3") },
    { logo: require("./assets/logos/ff16_logo.png"), mainTheme: require("./assets/musics/ffXVI.mp3") },
    { logo: require("./assets/logos/ff_dissidia_logo.png"), mainTheme: require("./assets/musics/ffI.mp3") },
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
