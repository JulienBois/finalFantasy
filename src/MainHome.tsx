function MainHome() {
    return (
        <div className="h-screen w-full flex justify-center items-center text-center bg-slate-100">
            <div className="rounded-3xl bg-white grid grid-cols-12 grid-rows-6 gap-4 p-1 bento">
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-3 row-span-3
                     flex justify-center items-center text-center">Final Fantasy vilains
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-3 row-span-3 flex justify-center items-center text-center">
                    Final Fantasy heroes
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-6 row-span-3 flex justify-center items-center text-center">
                    Final fantasy games
                </div>
                <div
                    className="rounded-3xl bg-slate-100 border-2 border-gray-200 col-span-6 row-span-3 flex justify-center items-center text-center">
                    Final Fantasy music
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