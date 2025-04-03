const menuItems = [
    {
        title: "Iced Thai Latte",
        price: "40 Bath",
        image: "/images/menu/menu5.jpg",
        description:
            "Chilled Thai coffee with creamy sweetness.",
    },
    {
        title: "Cofee Matcha",
        price: "55 Bath",
        image: "/images/menu/menu6.jpg",
        description:
            "Matcha and espresso blend — earthy and bold.",
    },
    {
        title: "Classic Espresso",
        price: "45 Bath",
        image: "/images/menu/menu3.jpeg",
        description:
            "Bold Northern Thai espresso — rich and energizing.",
    },
    {
        title: "Drip Brew (Pour Over)",
        price: "40 Bath",
        image: "/images/menu/menu7.jpg",
        description:
            "Smooth pour-over from Chiang Mai’s finest beans.",
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
                            className="flex gap-4 lg:flex-col p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover-r"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-30 h-30 object-cover rounded-md mb-4"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="font-semibold mb-2 bg-black/12 w-fit rounded-2xl px-3 shadow-2xl">{item.price}</p>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
