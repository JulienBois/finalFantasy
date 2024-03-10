function MainHome() {
    return (
        <div className="h-screen w-full flex justify-center items-center text-center bg-slate-100">
            <div className="rounded-3xl bg-white w-5/6 h-5/6 grid grid-cols-4 grid-rows-4 gap-4 p-4">
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 grid-cols-1 grid-rows-1 row-span-2
                     flex justify-center items-center text-center">All the final fantasy games
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 grid-rows-3 row-start-3 row-span-2 flex justify-center items-center text-center">
                    Final Fantasy heroes
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 row-start-2 row-span-2 col-span-2 flex justify-center items-center text-center">FINAL
                    FANTASY
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-2 flex justify-center items-center text-center">
                    Story creation of Final Fantasy
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 row-start-4 flex justify-center items-center text-center">
                    Final Fantasy Espers
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 row-start-4 flex justify-center items-center text-center">
                    Final Fantasy musics
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-start-4 row-span-2 flex justify-center items-center text-center">
                    Final Fantasy producers
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-start-4 row-span-2 flex justify-center items-center text-center">
                    Final Fantasy vilains
                </div>
            </div>
        </div>
    );
}

export default MainHome;