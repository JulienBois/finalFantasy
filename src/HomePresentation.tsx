
function HomePresentation() {
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={require("./assets/ff1_logo.png")} className="absolute z-0 animate-flash" alt="test"/>
            <h1 className="text-xxl font-finalf tracking-widest z-10 animate-slide-up animate-draw-line z-1">FINAL FANTASY</h1>
        </div>
    );
}

export default HomePresentation;