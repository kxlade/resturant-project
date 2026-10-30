import Reveal from "./Reveal/Reveal";
import "../App.css";
import foodSet from "../assets/food-set-photo.avif";
import wasteFood from "../assets/waste-food.webp";
import introImage from "../assets/intro.jpg";

export const Shop = ({ onNavigate }) => {
    const shopItems = [
        {
            title: "Catering Boxes",
            description: "Easy group ordering for office lunches, birthdays, and family tables.",
            image: foodSet,
        },
        {
            title: "Weekly Meal Picks",
            description: "Choose a rotating mix of comforting, healthy, and premium dishes.",
            image: introImage,
        },
        {
            title: "Waste-Free Planning",
            description: "Order only what you need and keep meals fresh without overbuying.",
            image: wasteFood,
        },
    ];

    return (
        <Reveal as="section">
            <section className="offer-section">
                <div className="offer-section__shell">
                    <p className="offer-eyebrow">Shop</p>
                    <h2 className="offer-title">A simple place to find bundles, meal ideas, and group-friendly options</h2>
                    <p className="offer-lead">
                        This page gives the Shop button a real destination and keeps it
                        aligned with the rest of the app&apos;s menu flow.
                    </p>

                    <div className="offer-actions">
                        <button className="menu-page__button" type="button" onClick={() => onNavigate?.("offer")}>
                            View Offers
                        </button>
                        <button className="menu-page__button menu-page__button--ghost" type="button" onClick={() => onNavigate?.("home")}>
                            Back Home
                        </button>
                    </div>

                    <div className="offer-grid">
                        {shopItems.map((item, index) => (
                            <Reveal key={item.title} delay={index * 120}>
                                <article className="offer-card">
                                    <img src={item.image} alt={item.title} className="offer-card__image" />
                                    <div className="offer-card__body">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </Reveal>
    );
};
