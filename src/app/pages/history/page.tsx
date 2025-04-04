//http://localhost:3000/pages/history
import ParallaxImage from "@/app/components/deco/Parallax";
import BeanFloat from "@/app/components/deco/BeanFloat";
import { CiCoffeeBean } from "react-icons/ci";

export default function History() {
  return (
    <section className="px-8 sm:px-12 pt-26 pb-12">
      <div className="max-w-2xl mx-auto relative">
        <div className="flex justify-center text-2xl md:text-4xl font-bold italic mb-4 float">
          <div className="relative fade-up2">
            Our History
            <div className="absolute top-0 -right-6  text-base text-amber-700"><CiCoffeeBean /></div>
            <div className="absolute top-3 -right-7.5 text-base rotate-30 text-amber-700"><CiCoffeeBean /></div>
          </div>
        </div>

        <p className="mb-4 mt-4 leading-relaxed indent-5 fade-in2">
          DailyDrip began as a humble coffee stall tucked in the old town of Chiang Mai. Inspired
          by the rich flavors of Northern Thai Arabica, we started brewing small-batch coffee
          with a passion for quality and community.
        </p>

        <div>
          <img
            src="/images/gal/about2.jpg"
            alt="DailyDrip early days"
            className="h-65 w-65 object-cover rounded-md shadow-lg mx-auto"
          />
        </div>


        <p className="mb-4 mt-4 leading-relaxed indent-5">
          Over the years, our little corner grew into a space where locals and travelers gather,
          relax, and enjoy the artistry of coffee. Today, DailyDrip continues to blend tradition
          with creativity — one cup at a time.
        </p>

        <div>
          <img
            src="/images/gal/about3.jpg"
            alt="DailyDrip early days"
            className="h-65 w-65 object-cover rounded-md shadow-lg mx-auto"
          />
        </div>

        <p className="mb-6 mt-4 leading-relaxed indent-5">
          We remain proudly rooted in Chiang Mai, working with local farms and artisans to deliver
          an authentic café experience in every sip.
        </p>

        <div>
          <img
            src="/images/gal/about4.jpg"
            alt="DailyDrip early days"
            className="h-65 w-65 object-cover rounded-md shadow-lg mx-auto"
          />
        </div>

        {/* Floating bean */}
        <div className="absolute -bottom-12 -right-4 opacity-60 rotate-slow">
          <BeanFloat />
        </div>
      </div>
    </section>
  );
}
