import React from 'react';

const logos = [
    require("./assets/logos_ff/ff1_logo.png"),
    require("./assets/logos_ff/ff2_logo.png"),
    require("./assets/logos_ff/ff3_logo.png"),
    require("./assets/logos_ff/ff4_logo.png"),
    require("./assets/logos_ff/ff5_logo.png"),
    require("./assets/logos_ff/ff6_logo.png"),
    require("./assets/logos_ff/ff7_logo.png"),
    require("./assets/logos_ff/ff8_logo.png"),
    require("./assets/logos_ff/ff9_logo.png"),
    require("./assets/logos_ff/ff10_logo.png"),
    require("./assets/logos_ff/ff10-2_logo.png"),
    require("./assets/logos_ff/ff11_logo.png"),
    require("./assets/logos_ff/ff12_logo.png"),
    require("./assets/logos_ff/ff12-2_logo.png"),
    require("./assets/logos_ff/ff13_logo.png"),
    require("./assets/logos_ff/ff13-2_logo.png"),
    require("./assets/logos_ff/ff14_logo.png"),
    require("./assets/logos_ff/ff15_logo.png"),
    require("./assets/logos_ff/ff16_logo.png"),
    require("./assets/logos_ff/ff_dissidia_logo.png"),
]

function HomePresentation() {

    const randomLogo = logos[Math.floor(Math.random() * logos.length)];
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={randomLogo} className="absolute z-0 animate-flash" alt="Final Fantasy"/>
            <h1 className="text-xxl font-finalf tracking-widest font-outline-2 z-10 animate-slide-up animate-draw-line z-1">FINAL FANTASY</h1>
        </div>
    );
}

export default HomePresentation;