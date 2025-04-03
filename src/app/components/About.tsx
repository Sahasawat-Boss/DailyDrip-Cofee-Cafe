import BeanFloat from "./deco/BeanFloat";

export default function About() {
    return (
        <section className="px-8 sm:px-12 py-10 md:py-14">
            <div className="max-w-5xl mx-auto relative">
                <h2 className="text-2xl md:text-4xl font-bold italic mb-6">
                    DailyDrip
                </h2>
                <p className="mb-3 leading-relaxed indent-5">
                    Located in the heart of Chiang Mai, DailyDrip is a cozy spot for coffee
                    lovers, creatives, and travelers. We brew with locally sourced beans from
                    Northern Thailand, roasted fresh in small batches.
                </p>

                <button className="border px-6 py-2 mb-4 uppercase tracking-wide hover-r">
                    Our History
                </button>

                <div>
                    <img
                        src="/images/gal/about.jpg"
                        alt="Cafe interior"
                        className="h-50 w-full md:h-80 object-cover rounded-md shadow-lg"
                    />
                </div>

                <div className="absolute -bottom-12 -right-4 md:-right-14 opacity-70">
                    <BeanFloat />
                </div>

            </div>
        </section>
    );
}
