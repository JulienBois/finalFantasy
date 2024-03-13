import React, {FC} from "react";
import ItemMenu from "./ItemMenu";

interface MenuProps {
    randomLogo: string;
}

const options = [
    'Games',
    'Heroes',
    'Vilains',
    'Musics',
    'Artworks',
]

const Menu: FC<MenuProps> = ({randomLogo}) => {
    return (
        <div>
            <div className="flex justify-center items-center h-[70vh]">
                <img src={randomLogo} className="absolute z-0" alt="Final Fantasy"/>
                <h1 className="text-xxl font-finalf tracking-widest z-10 line z-1">FINAL
                    FANTASY</h1>
            </div>
            <div className=" h-[40vh] py-14 absolute bottom-0">
                {options.map((i, index) => (
                    <ItemMenu title={i} key={i} padding={index}/>
                ))}
            </div>
        </div>
    );
}

export default Menu;