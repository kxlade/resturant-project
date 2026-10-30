import "../App.css";
import Reveal from "./Reveal/Reveal";
import pasta from "../assets/pasta.avif";
import streetFood from "../assets/food2.jpg";
import salmon from "../assets/Grilled-Salmon-with-Asparagus.JPG";
import dessert from "../assets/desert2.avif";
import doorOpen from "../assets/door-open.jpg";
const Varieties = ({ onNavigate }) => {
    const hnndleNavClick = (page) => {
        onNavigate?.(page);
    };

    const handleKeyDown = (event, page) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            hnndleNavClick(page);
        }
    };

    const varietyCards = [
        {
            key: "italian",
            title: "ITALIAN CLASSICS",
            ariaLabel: "Open Italian Classics",
            page: "italian",
            image: pasta,
        },
        {
            key: "streetfood",
            title: "GLOBAL STREET FOOD",
            ariaLabel: "Open Global Street Food",
            page: "streetfood",
            image: streetFood,
        },
        {
            key: "healthy",
            title: "HEALTHY & MODERN",
            ariaLabel: "Open Healthy and Modern",
            page: "healthy",
            image: salmon,
        },
        {
            key: "comfort",
            title: "COMFORT FOOD",
            ariaLabel: "Open Comfort Food",
            page: "comfort",
            image: dessert,
        },
        {
            key: "new",
            title: "NEW ARRIVALS",
            ariaLabel: "Open New Arrivals",
            page: "new",
            image: doorOpen,
        },
    ];

    return (
        <section className="varieties-cont">
            <div>
                <h2 className="varieties-h1">You've Got Varieties of Dish To Pick!!</h2>

                <div className="images_varieties-cont">
                    {varietyCards.map((card, index) => (
                        <Reveal key={card.key} delay={index * 110}>
                            <div
                                className="img-div"
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                }}
                                role="button"
                                tabIndex={0}
                                aria-label={card.ariaLabel}
                                onClick={() => hnndleNavClick(card.page)}
                                onKeyDown={(event) => handleKeyDown(event, card.page)}
                            >
                                <button className="fade-in-button" type="button" onClick={() => hnndleNavClick(card.page)}>
                                    {card.title}
                                </button>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Varieties;
