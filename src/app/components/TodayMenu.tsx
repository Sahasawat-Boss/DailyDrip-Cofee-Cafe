const menuItems = [
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
];

export default function TodayMenu() {
    return (
        <section className=" px-6 pt-14 pb-2">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold italic mb-4 float">
                        Today's Menu
                    </h2>
                    <p className="max-w-xl mx-auto">
                        Explore our handcrafted selection of coffee drinks — each brewed
                        with beans sourced from local farms in Northern Thailand.
                    </p>
                </div>
                <div className="grid px-8 sm:px-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex gap-4 lg:flex-col p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover-r"
                        >
                            {/* Tag Badge */}
                            {item.tag && (
                                <span className="absolute top-1 -left-4 bg-yellow-300/85 text-black text-[11px] font-semibold px-2 py-0.5 rounded shadow-md z-10">
                                    {item.tag}
                                </span>
                            )}

                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-30 h-30 object-cover rounded-md"
                            />

                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="font-semibold mt-1.5 mb-2 bg-black/12 w-fit rounded-2xl px-3 shadow-2xl">
                                    {item.price}
                                </p>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </section>
    );
}
