// components/About.tsx

export default function About() {
    return (
        <section className="text-white px-6 py-12 md:py-20">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <img
                        src="/images/cofee/cofee.jpg"
                        alt="Cafe interior"
                        className="h-60 md:h-80 w-full object-cover rounded-md shadow-lg"
                    />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold italic mb-6">
                    About DailyDrip
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed indent-5">
                    Located in the heart of Chiang Mai, DailyDrip is a cozy spot for coffee
                    lovers, creatives, and travelers. We brew with locally sourced beans from
                    Northern Thailand, roasted fresh in small batches.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed indent-5">
                    Whether you're grabbing a quick espresso or settling in to work, DailyDrip
                    brings you great coffee and warm vibes — one cup at a time.
                </p>

                <button className="border border-white text-white px-6 py-2 uppercase tracking-wide hover:bg-white hover:text-black hover-r">
                    Our History
                </button>
            </div>
        </section>
    );
}
