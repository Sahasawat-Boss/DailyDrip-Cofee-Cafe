export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-black">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 blur-xs" //[inset-0] = (t-0 r-0 l-0 b-0) = stretch and fill its entire parent.
                style={{ backgroundImage: "url('/images/hero/cafe.jpeg')" }}
            />
            <div className="absolute inset-0 bg-black/55 z-0" />
            <div className="relative z-10 text-white text-center px-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    DailyDrip
                </h1>
                <h1 className="text-lg md:text-xl font-bold leading-tight mb-4">
                    Coffee Cafe  <em>in</em> CNX
                </h1>
                <p className="text-lg italic mt-6 hover">
                    Brought to you by{" "}
                    <a
                        href="https://bossbsynth.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-300/90 underline hover:text-pink-200 transition-colors duration-200 "
                    >
                        BossBsynth
                    </a>
                </p>

            </div>
        </section>
    );
}
