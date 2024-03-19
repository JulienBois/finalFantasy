import React, {FC, useState, useRef } from "react";
import ItemMenu from "./ItemMenu";
import {Saga} from "../interfaces/Saga";

interface MenuProps {
    saga: Saga;
}

const options = [
    'Games',
    'Heroes',
    'Vilains',
    'Musics',
    'Artworks',
]

const Menu: FC<MenuProps> = ({saga}) => {
    const [showVideo, setShowVideo] = useState(false);
    const audioRef = useRef(null);
    const handleAudioEnd = () => {
        setShowVideo(true);
    }

    const handleVideoClick = () => {
        setShowVideo(false);
    }

    return (
        <div className={`h-screen w-screen relative`}>
            {(saga.opening !== undefined && showVideo) ? (
                <video onClick={handleVideoClick} autoPlay={true} controls={false} className="bg-black fixed aspect-video inset-0 w-full h-full object-center" onEnded={handleVideoClick}>
                    <source src={saga.opening} type="video/mp4"/>it supports the video</video>
            ) : (
                <div className={`${saga.background} bg-center h-screen w-screen`}>
                    <audio ref={audioRef} src={saga.mainTheme} autoPlay loop={saga.opening === undefined} onEnded={handleAudioEnd}/>
                    <div className="flex justify-center items-center h-[70vh]">
                        <img src={saga.logo} className="absolute z-10" alt="Final Fantasy"/>
                        <h1 className="text-xxl font-finalf tracking-widest z-20 line">FINAL
                            FANTASY</h1>
                    </div>
                    <div className=" h-[40vh] py-14 absolute bottom-0">
                        {options.map((i, index) => (
                            <ItemMenu title={i} key={i} padding={saga.customStyle !== undefined ? undefined : index}
                                      customStyle={saga.customStyle}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;