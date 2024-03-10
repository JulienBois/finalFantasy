function MainHome() {
    return (
        <div className="h-screen w-full flex justify-center items-center text-center bg-slate-100">
            <div className="rounded-3xl bg-white grid grid-cols-12 grid-rows-6 gap-4 p-1 bento">
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-3 row-span-3
                     flex justify-center items-center text-center">Final Fantasy vilains
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-3 row-span-3 flex justify-center items-center text-center relative">
                    <img src={require("./assets/ff7_bg.png")} className="object-cover w-full h-full rounded-3xl z-0 absolute" alt="test"/>
                    <p className="text-8xl absolute w-full flex top-1/3 justify-center z-10 font-miriadpro text-white">Games</p>
                    <img src={require("./assets/ff7_bg_characters.png")} className="object-cover w-full h-full rounded-3xl z-20 absolute hover:animate-zoom-in"/>
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-6 row-span-3 flex justify-center items-center text-center">
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-6 row-span-3 flex justify-center items-center text-center">
                    <img src={require("./assets/final_fantasy_theatrhythm.png")} className="object-cover hover:animate-zoom-in" alt="Final Fantasy theatrhythm"/>
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-3 row-span-3 flex justify-center items-center text-center">
                    Final Fantasy Espers
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-3 row-span-3 flex justify-center items-center text-center">
                    Story creation of Final Fantasy
                </div>
            </div>
        </div>
    );
}

export default MainHome;