export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-black">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 blur-xs" //[inset-0] = (t-0 r-0 l-0 b-0) = stretch and fill its entire parent.
                style={{ backgroundImage: "url('/images/hero/cafe.jpeg')" }}
            />
            <div className="absolute inset-0 bg-black/55 z-0" />
            <div className="relative z-10 text-white text-center px-4 max-w-3xl">
                <div>
                    <h1 className="relative text-4xl md:text-5xl font-bold leading-tight mb-4 hover-r">
                        DailyDrip
                    </h1>
                    {/* == Cofee Bean SV ============================ */}
                    <div className="absolute top-0 -left-8 -rotate-70 float">
                        <img src="/svg/coffee-beans2.png" alt="coffee png" className="w-6 h-6" />
                    </div>
                    <div className="absolute top-8 -left-2.5 -rotate-100 float">
                        <img src="/svg/coffee-beans2.png" alt="coffee png" className="w-4 h-4" />
                    </div>
                    <div className="absolute buttom-0 -right-8 rotate-70 float">
                        <img src="/svg/coffee-beans1.png" alt="coffee png" className="w-8 h-8" />
                    </div>
                    {/* == Cofee Bean SVG ============================ */}
                </div>
                <h1 className="opacity-80 text-lg md:text-xl font-bold leading-tight mb-4">
                    Coffee Cafe  <em>in</em> CNX
                </h1>

                <div className="flex text-lg italic mt-6 ">
                    Brought to you by
                    <div className="hover-r ml-1.5">
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
