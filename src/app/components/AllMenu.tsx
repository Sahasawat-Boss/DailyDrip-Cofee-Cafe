import BeanFloat from "@/app/components/deco/BeanFloat";

const allMenuItems = [
    {
        title: "Iced Thai Latte",
        price: "40 Bath",
        image: "/images/menu/menu5.jpg",
        description: "Chilled Thai coffee with creamy sweetness.",
        tag: "Best Seller",
    },
    {
        title: "Cofee Matcha",
        price: "55 Bath",
        image: "/images/menu/menu6.jpg",
        description: "Matcha and espresso blend — earthy and bold.",
        tag: "Best Seller",
    },
    {
        title: "Mocha Delight",
        price: "60 Bath",
        image: "/images/menu/menu4.jpg",
        description: "Chocolate and espresso in a creamy blend.",
    },
    {
        title: "Coconut Latte",
        price: "55 Bath",
        image: "/images/menu/menu10.jpg",
        description: "Espresso with smooth coconut milk and tropical notes.",
        tag: "New",
    },
    {
        title: "Thai Tea Frappe",
        price: "55 Bath",
        image: "/images/menu/menu8.jpg",
        description: "Icy Thai tea with rich condensed milk.",
        tag: "New",
    },
    {
        title: "Classic Espresso",
        price: "50 Bath",
        image: "/images/menu/menu3.jpeg",
        description: "Bold Northern Thai espresso — rich and energizing.",
    },
    {
        title: "Iced Americano",
        price: "45 Bath",
        image: "/images/menu/menu9.jpg",
        description: "Strong and smooth — a classic favorite.",
    },
    {
        title: "Drip Brew (Pour Over)",
        price: "50 Bath",
        image: "/images/menu/menu7.jpg",
        description: "Smooth pour-over from Chiang Mai’s finest beans.",
    },
];

export default function AllMenu() {
    return (
        <section className="px-6 pb-2">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-6 ">
                    <div className="fade-up2">
                        <h2 className="text-2xl md:text-4xl font-bold italic mb-4 float">
                            All Menu
                        </h2>
                    </div>
                    <p className="max-w-xl mx-auto fade-in2" >
                        Browse our full range of drinks — from traditional Thai coffee to creative modern blends.
                    </p>
                </div>
                {/* Menu List Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {allMenuItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex gap-4 lg:flex-col p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover-r"
                        >
                            {item.tag && (
                                <span className="absolute top-1 -left-4 bg-yellow-300/85 text-black text-[11px] font-semibold px-1.5 py-0.5 rounded shadow-md z-10 float">
                                    {item.tag}
                                </span>
                            )}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-30 h-30 object-cover rounded-md"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="font-semibold mb-2 mt-1.5 bg-black/12 w-fit rounded-2xl px-3 shadow-2xl">
                                    {item.price}
                                </p>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating bean */}
                <div className="absolute -bottom-12 -right-4 opacity-60 rotate-slow">
                    <BeanFloat />
                </div>
            </div>
        </section>
    );
}
