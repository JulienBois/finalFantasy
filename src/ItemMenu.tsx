import React, {FC} from "react";

interface MenuProps {
    title: string;
    padding?: number;
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

const ItemMenu: FC<MenuProps> = ({title, padding}) => {
    const className = paddings[padding!];
    return (
        <div>
            <button className={`${className} pt-[1vh]relative cursor`}>
                <span className=" text-3xl font-miriadpro ">{title}</span></button>
        </div>
    );
}

export default ItemMenu;