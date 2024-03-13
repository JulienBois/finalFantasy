import React, {FC} from 'react';

interface HomePresentationProps {
    randomLogo: string;
}

const HomePresentation:FC<HomePresentationProps> = ({randomLogo}) => {

    return (
        <div className="flex justify-center items-center h-screen">
            <img src={randomLogo} className="absolute z-0 animate-flash" alt="Final Fantasy"/>
            <h1 className="text-xxl font-finalf tracking-widest z-10 animate-slide-up animate-draw-line z-1">FINAL FANTASY</h1>
            <p className="font-miriadpro text-3xl animate-flash-infinite absolute bottom-12"> Appuyer n'importe où pour commencer</p>
        </div>
    );
}

export default HomePresentation;