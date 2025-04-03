import CofeeCup from "./deco/CofeeCup";

export default function Hero() {
    return (
        <section className="relative h-[65vh] md:h-[70vh] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 blur-xs" //[inset-0] = (t-0 r-0 l-0 b-0) = stretch and fill its entire parent.
                style={{ backgroundImage: "url('/images/hero/hero.jpg')" }}
            />
            <div className="absolute inset-0 bg-white/70 z-0" />
            <div className="relative z-10 text-center px-4 max-w-3xl">
                <div>
                    <div className='text-4xl  md:text-5xl font-bold transition-opacity duration-300 float'
                        style={{
                            filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.05)) drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.6))",
                        }}>
                        <span className="text-[#fab152] tracking-wide">Daily</span><span className="text-white">Drip</span>
                    </div>


                    {/* == Cofee Bean SV ============================ */}
                    {/* Coffee Cup Icon */}
                    <div className="absolute top-3 -right-9 opacity-85 rotate-25 float drop-shadow-lg drop-shadow-black/35">
                        <CofeeCup />
                    </div>
                    <div className="absolute top-4 -left-8 -rotate-70 floatCoffee">
                        <img src="/svg/coffee-beans2.png" alt="coffee png" className="w-5 h-5" />
                    </div>
                    <div className="absolute top-12 -left-2.5 -rotate-100 floatCoffee">
                        <img src="/svg/coffee-beans2.png" alt="coffee png" className="w-3 h-3" />
                    </div>

                    <div className="absolute top-3 -right-12 -rotate-10 floatCoffee">
                        <img src="/svg/coffee-beans1.png" alt="coffee png" className="w-6 h-6" />
                    </div>
                    {/* == Cofee Bean SVG ============================ */}
                </div>
                <h1 className="opacity-80 text-lg md:text-xl font-bold leading-tight mb-4">
                    Coffee Cafe  <em>in</em> CNX
                </h1>

                <div className="absolute mt-14 flex w-full text-sm italic ">
                    <div>Brought to you by</div>
                    <div className="hover-r ml-1">
                        <a
                            href="https://bossbsynth.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-400 underline hover:text-red-300 transition-colors duration-200"
                        >
                            BossBsynth
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
