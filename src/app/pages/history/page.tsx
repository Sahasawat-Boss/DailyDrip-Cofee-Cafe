//http://localhost:3000/pages/history
import ThemeToggle from "@/app/components/layout/DarkToggle";
import BeanFloat from "@/app/components/deco/BeanFloat";

export default function History() {
  return (
    <section className="px-8 sm:px-12 py-22">
      <ThemeToggle/>
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold italic mb-6">
          Our History
        </h2>

        <p className="mb-4 leading-relaxed indent-5">
          DailyDrip began as a humble coffee stall tucked in the old town of Chiang Mai. Inspired
          by the rich flavors of Northern Thai Arabica, we started brewing small-batch coffee
          with a passion for quality and community.
        </p>

        <div>
          <img
            src="/images/gal/about2.jpg"
            alt="DailyDrip early days"
            className="h-full w-full object-cover rounded-md shadow-lg"
          />
        </div>

        <p className="mb-4 leading-relaxed indent-5">
          Over the years, our little corner grew into a space where locals and travelers gather,
          relax, and enjoy the artistry of coffee. Today, DailyDrip continues to blend tradition
          with creativity — one cup at a time.
        </p>

        <div>
          <img
            src="/images/gal/about2.jpg"
            alt="DailyDrip early days"
            className="h-full w-full object-cover rounded-md shadow-lg"
          />
        </div>
        
        <p className="mb-6 leading-relaxed indent-5">
          We remain proudly rooted in Chiang Mai, working with local farms and artisans to deliver
          an authentic café experience in every sip.
        </p>

        <div>
          <img
            src="/images/gal/about2.jpg"
            alt="DailyDrip early days"
            className="h-full w-full object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Floating bean */}
        <div className="absolute -bottom-12 -left-4 md:-left-14 opacity-70">
          <BeanFloat />
        </div>
      </div>
    </section>
  );
}
