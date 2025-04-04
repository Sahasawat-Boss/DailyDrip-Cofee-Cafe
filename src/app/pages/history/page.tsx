//http://localhost:3000/pages/history
import BeanFloatAround from "@/app/components/deco/BeanFloatAround";
import BeanFloat from "@/app/components/deco/BeanFloat";
import { FaHourglassStart } from "react-icons/fa";

export default function History() {
  return (
    <section className="px-8 sm:px-12 pt-26 pb-12 relative">
      <div className="max-w-2xl mx-auto relative">
        <div className="flex justify-center text-2xl md:text-4xl font-bold italic mb-4 float">
          <div className="relative fade-up2">
            Our History
            <div className="absolute top-1.5 -right-6  text-base text-amber-700/50"><FaHourglassStart /></div>
          </div>
        </div>

        <section>
          <p className="mb-4 mt-4 leading-relaxed indent-5 fade-right">
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

          <div className="mb-4 mt-4 leading-relaxed indent-5 fade-right relative">
            Over the years, our little corner grew into a space where locals and travelers gather,
            relax, and enjoy the artistry of coffee. Today, DailyDrip continues to blend tradition
            with creativity — one cup at a time.
          </div>

          <div>
            <img
              src="/images/gal/about3.jpg"
              alt="DailyDrip early days"
              className="h-65 w-65 object-cover rounded-md shadow-lg mx-auto"
            />
          </div>

          <p className="mb-6 mt-4 leading-relaxed indent-5 fade-right">
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
        </section>

        {/* Floating bean */}
        <div className="absolute -bottom-12 -right-4 opacity-60 rotate-slow">
          <BeanFloat />
        </div>
      </div>
      <div className='absolute opacity-80 top-72 fade-left2 '>
        <BeanFloatAround />
      </div>
    </section>
  );
}
