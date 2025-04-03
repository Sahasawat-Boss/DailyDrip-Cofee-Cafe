import BeanFloat from "./deco/BeanFloat";

export default function About() {
    return (
        <section className="px-8 sm:px-12 py-12 md:py-20">
            <div className="max-w-5xl mx-auto relative">
                <div className="mb-8">
                    <img
                        src="/images/gal/about.jpg"
                        alt="Cafe interior"
                        className="h-50 w-full md:h-80 object-cover rounded-md shadow-lg"
                    />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold italic mb-6">
                    About DailyDrip
                </h2>
                <p className="mb-3 leading-relaxed indent-5">
                    Located in the heart of Chiang Mai, DailyDrip is a cozy spot for coffee
                    lovers, creatives, and travelers. We brew with locally sourced beans from
                    Northern Thailand, roasted fresh in small batches.
                </p>
                <p className="mb-6 leading-relaxed indent-5">
                    Whether you're grabbing a quick espresso or settling in to work, DailyDrip
                    brings you great coffee and warm vibes — one cup at a time.
                </p>

                <button className="border px-6 py-2 uppercase tracking-wide hover-r">
                    Our History
                </button>

                <div className="absolute bottom-0 -right-2 md:-right-4 opacity-70">
                    <BeanFloat />
                </div>
            </div>
        </section>
    );
}
