import "./Pages.css";
import pasta from "../assets/pasta.avif";
import salad from "../assets/salad.avif";
import dessert from "../assets/desert.jpg";
import stirFry from "../assets/stir-fry.avif";
import sushi from "../assets/sushi.avif";
import heartyBurger from "../assets/hearty-burger.avif";
import glassNoodles from "../assets/glass-nood.avif";
import burger from "../assets/burger.avif";
import mediterraneanSalad from "../assets/Mediterranean-Salad.avif";
import vegetarianPizza from "../assets/Vegetarian-Pizza.avif";
import freshFruit from "../assets/fresh-salad.webp";
import Reveal from "../components/Reveal/Reveal";

export const New = () => {
    const items = [
        { name: "Delicious Pasta", image: pasta },
        { name: "Fresh Salad", image: salad },
        { name: "Tasty Dessert", image: dessert },
        { name: "Spicy Stir Fry", image: stirFry },
        { name: "Exotic Sushi", image: sushi },
        { name: "Hearty Burger", image: heartyBurger },
        { name: "Chinese Glass Noodles", image: glassNoodles },
        { name: "American Burgers", image: burger },
        { name: "Mediterranean Salad", image: mediterraneanSalad },
        { name: "Vegetarian Pizza", image: vegetarianPizza },
        { name: "Fresh Fruit Salad", image: freshFruit },
    ];

    return (

        <Reveal as="section">
            <section className="new-section">
                <div className="new-container">
                    <h2 className="new-h2"><span className="new-word">NEW</span> Arrivals</h2>
                    <div className="offer-focus">
                        <div>
                            <p className="offer-focus__eyebrow">Check out our latest dishes and flavors</p>
                        </div>
                    </div>

                    <div className="new-images">
                        {items.map((item, index) => (
                            <Reveal key={item.name} delay={index * 10}>
                                <div
                                    key={item.name}
                                    className="new-image"
                                    style={{
                                        backgroundImage: `linear-gradient(180deg, rgba(7, 13, 24, 0.12), rgba(7, 13, 24, 0.74)), url(${item.image})`,
                                    }}
                                >
                                    <button className="new-image-description fade-in-button" type="button">
                                        {item.name}
                                    </button>
                                </div>
                            </Reveal>

                        ))}
                    </div>
                </div>
            </section>
        </Reveal>

    );
};
