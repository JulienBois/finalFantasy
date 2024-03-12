import React from 'react';

const logos = [
    require("./assets/ff1_logo.png"),
    require("./assets/ff2_logo.png"),
    require("./assets/ff3_logo.png"),
    require("./assets/ff4_logo.png"),
    require("./assets/ff5_logo.png"),
    require("./assets/ff6_logo.png"),
    require("./assets/ff7_logo.png"),
    require("./assets/ff8_logo.png"),
    require("./assets/ff9_logo.png"),
    require("./assets/ff10_logo.png"),
    require("./assets/ff10-2_logo.png"),
    require("./assets/ff11_logo.png"),
    require("./assets/ff12_logo.png"),
    require("./assets/ff12-2_logo.png"),
    require("./assets/ff13_logo.png"),
    require("./assets/ff13-2_logo.png"),
    require("./assets/ff14_logo.png"),
    require("./assets/ff15_logo.png"),
    require("./assets/ff16_logo.png"),
    require("./assets/ff_dissidia_logo.png"),
]

function HomePresentation() {

    const randomLogo = logos[Math.floor(Math.random() * logos.length)];
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={randomLogo} className="absolute z-0 animate-flash" alt="Final Fantasy"/>
            <h1 className="text-xxl font-finalf tracking-widest z-10 animate-slide-up animate-draw-line z-1">FINAL FANTASY</h1>
            <p className="font-miriadpro text-3xl animate-flash-infinite absolute bottom-12"> Appuyer n'importe où pour commencer</p>
        </div>
    );
}

export default HomePresentation;