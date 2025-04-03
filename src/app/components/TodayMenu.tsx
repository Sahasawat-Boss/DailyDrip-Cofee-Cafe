// components/TodayMenu.tsx

const menuItems = [
    {
        title: "Classic Espresso",
        price: "45 Bath",
        image: "/images/menu/menu4.jpg",
        description:
            "A rich, bold shot of pure espresso made from Northern Thai Arabica beans. Perfect to start your day.",
    },
    {
        title: "Iced Thai Latte",
        price: "40 Bath",
        image: "/images/menu/menu4.jpg",
        description:
            "A refreshing blend of strong coffee, creamy milk, and a touch of sweetness served over ice.",
    },
    {
        title: "Drip Brew (Pour Over)",
        price: "50 Bath",
        image: "/images/menu/menu4.jpg",
        description:
            "Slow-brewed using freshly ground beans from Chiang Mai's Doi Chang region. Smooth and aromatic.",
    },
    {
        title: "Cofee Matcha",
        price: "55 Bath",
        image: "/images/menu/menu4.jpg",
        description:
            "A vibrant matcha latte with a bold espresso shot layered on top. Earthy meets energizing.",
    },
];

export default function TodayMenu() {
    return (
        <section className="bg-[#1a1a1a] text-white px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold italic mb-4">
                        Today's Menu
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Explore our handcrafted selection of coffee drinks — each brewed
                        with beans sourced from local farms in Northern Thailand.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex gap-4 lg:flex-col p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-40 h-40 object-cover rounded-md mb-4"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-yellow-400 text-lg font-bold mb-2">{item.price}</p>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
