import React, {FC} from "react";
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
    return (
        <div className={`${saga.background} bg-center h-screen w-screen z-0 `}>
            <div className="flex justify-center items-center h-[70vh]">
                <img src={saga.logo} className="absolute z-10" alt="Final Fantasy"/>
                <h1 className="text-xxl font-finalf tracking-widest z-20 line z-1">FINAL
                    FANTASY</h1>
            </div>
            <div className=" h-[40vh] py-14 absolute bottom-0">
                {options.map((i, index) => (
                    <ItemMenu title={i} key={i} padding={saga.customStyle !== undefined ? undefined : index} customStyle={saga.customStyle}/>
                ))}
            </div>
        </div>
    );
}

export default Menu;