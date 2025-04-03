import { FaFacebookF, FaLinkedinIn, FaTwitter, FaDribbble } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" text-gray-400 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                {/* DailyDrip Section */}
                <div>
                    <h4 className="text-white text-lg font-semibold mb-2">DailyDrip</h4>
                    <p>
                        A cozy coffee space in the heart of Chiang Mai, brewing locally sourced beans and delivering bold flavors with warm vibes.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white text-lg font-semibold mb-2">CONTACT INFORMATION</h4>
                    <ul className="space-y-2">
                        <li>123 Nimmanhaemin Road,</li>
                        <li>Chiang Mai, Thailand 50200</li>
                        <li>+66 86 868 4466</li>
                        <li>info@bossbsynth.com</li>
                        <li>bossbsynth.com</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-6 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
                <p>
                    © 2025 DailyDrip. All Rights Reserved. Designed by{" "}
                    <a href="https://bossbsynth.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">BossBsynth</a>{" "}
                    <div>
                        Demo Images: 
                        <a href="https://unsplash.com" className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer"> Unsplash </a>
                        and
                        <a href="https://www.pexels.com/photo/capturing-coffee-moment-with-smartphone-29074308/" className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer"> pexels </a>
                    </div>
                </p>

                {/* Social Icons */}
                <div className="flex justify-center mt-4 gap-5 text-red-500 text-lg">

                    <a href="#" className="hover:text-white"><FaFacebookF /></a>
                </div>
            </div>
        </footer>
    );
}
