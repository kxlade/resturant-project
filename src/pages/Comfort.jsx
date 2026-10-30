import "./Pages.css";
import Reveal from "../components/Reveal/Reveal";
import MenuGallery from "../components/MenuGallery";
import burgers from "../assets/Gourmet-Burgers.JPG";
import mac from "../assets/mac-and-cheese.JPG";
import chicken from "../assets/fried-chicken.JPG";
import fries from "../assets/loaded-fries.JPG";
import friesTwo from "../assets/loaded-2fries.JPG";

export const Comfort = ({ onNavigate = () => {}, shortlist = [], onToggleShortlist }) => {
    const article = [
        {
            src: burgers,
            name: "Gourmet Burgers",
            description: "A juicy, stacked burger layered with fresh toppings and served on a soft toasted bun.",
        },
        {
            src: mac,
            name: "Mac and Cheese",
            description: "Creamy cheese sauce coats tender pasta for a comforting, oven-finished classic.",
        },
        {
            src: chicken,
            name: "Fried Chicken",
            description: "Crispy seasoned chicken with a golden crust and a tender, flavourful centre.",
        },
        {
            src: fries,
            name: "Loaded Fries",
            description: "Golden fries topped with savoury extras, fresh herbs and a generous drizzle of sauce.",
        },
        {
            src: friesTwo,
            name: "Loaded Fries II",
            description: "A shareable portion of crisp fries finished with bold toppings and a savoury sauce.",
        },
    ];

    return (
        <Reveal as="section">
            <section className="menu-page menu-page--comfort">
                <div className="menu-page__shell">
                    <div className="menu-page__actions">
                        <button
                            className="menu-page__button"
                            onClick={() => onNavigate("varieties")}
                        >
                            Back to varieties
                        </button>
                    </div>

                    <p className="menu-page__eyebrow">Comfort Food</p>
                    <h1 className="menu-page__title">
                        Comforting favourites, freshly made for a satisfying meal.
                    </h1>
                    <p className="menu-page__lead">
                        From crispy chicken to loaded fries, explore hearty favourites made
                        for relaxed lunches, family dinners and everything in between.
                    </p>

                    <MenuGallery
                        collectionKey="comfort"
                        items={article}
                        shortlist={shortlist}
                        onToggleShortlist={onToggleShortlist}
                    />


                </div>
            </section>
        </Reveal>
    );
};
