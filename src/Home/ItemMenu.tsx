import React, {FC} from "react";

interface MenuProps {
    title: string;
    padding?: number;
    customStyle?: string;
}

type PaddingMap = {
    [key: number]: string;
};

const paddings: PaddingMap = {
    0: 'pl-[18vw]',
    1: 'pl-[20vw]',
    2: 'pl-[22vw]',
    3: 'pl-[24vw]',
    4: 'pl-[26vw]',
}

const ItemMenu: FC<MenuProps> = ({title, padding,customStyle }) => {
    const className = paddings[padding!];
    const audioHover = new Audio(require('../assets/sound_effects/hover_sound.wav'));
    const audioClick = new Audio(require('../assets/sound_effects/click_sound.wav'));

    const playHover = () => {
        audioHover.play();
    }

    const playClick = () => {
        audioClick.play();
    }

    return (
        <div>
            <button className={`${className !== undefined ? className : 'pl-[10vw]'} relative cursor`} onClick={playClick} onMouseOver={playHover}>
                <span className={` text-3xl font-miriadpro ${customStyle !== undefined ? customStyle : 'classic'}`} >{title}</span></button>
        </div>
    );
}

export default ItemMenu;