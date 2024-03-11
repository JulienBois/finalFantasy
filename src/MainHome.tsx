function MainHome() {
    return (
        <div className="h-screen w-full flex justify-center items-center text-center">
            <div className="rounded-3xl bg-white grid grid-cols-6 grid-rows-4 gap-4 p-1 bento">
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-2 row-span-2 flex justify-center items-center text-center relative">
                    <img src={require("./assets/background/ffXV.jpg")}
                         className="object-cover w-full h-full rounded-3xl z-0 absolute" alt="test"/>
                    <p className="text-8xl relative flex bottom-20 justify-center z-10 font-miriadpro text-white">Heroes</p>
                    <img src={require("./assets/foreground/ffXV.png")}
                         className="object-cover w-full h-full rounded-3xl absolute z-20 hover:animate-zoom-upper"/>
                </div>
                <div className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-4 row-span-2 flex justify-center items-center text-center relative">
                    <img src={require("./assets/background/ff7_fire.jpg")}
                         className="object-cover w-full h-full rounded-3xl z-0 absolute" alt="test"/>
                    <p className="text-8xl absolute w-full flex top-2/3 justify-center z-30 font-miriadpro text-white">Vilains</p>
                    <img src={require("./assets/foreground/sephiroth.png")}
                         className="object-cover w-full h-full rounded-3xl z-20 absolute hover:animate-zoom-up"/>
                </div>
                <div className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-2 row-span-2 flex justify-center items-center text-center relative">
                    <img src={require("./assets/background/theathrythm.jpg")}
                         className="object-cover w-full h-full rounded-3xl absolute"/>
                    <p className={"text-8xl absolute top-16  z-10 font-miriadpro text-white"}>Musics</p>
                    <img src={require("./assets/foreground/Theatrhythm_Logo.png")}
                         className="object-cover rounded-3xl w-full h-full p-20 z-20 absolute hover:animate-zoom-in"
                         alt="Final Fantasy theatrhythm"/>
                </div>
                <div className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-2 row-span-2 flex justify-center items-center text-center relative">
                    <img src={require("./assets/ff1.png")} className="object-cover h-full rounded-3xl hover:animate-zoom-in"/>
                    <p className={"text-8xl absolute justify-center z-30 font-miriadpro text-white"}>FF1</p>
                </div>
                <div className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-2 row-span-2 flex justify-center items-center text-center relative">
                    <img src={require("./assets/background/ff7.png")}
                         className="object-cover w-full h-full rounded-3xl z-0 absolute" alt="test"/>
                    <p className="text-8xl absolute w-full flex top-1/3 justify-center z-10 font-miriadpro text-white">Games</p>
                    <img src={require("./assets/foreground/ff7.png")}
                         className="object-cover w-full h-full rounded-3xl z-20 absolute hover:animate-zoom-up"/>
                </div>
            </div>
        </div>
    );
}

export default MainHome;