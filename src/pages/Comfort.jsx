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
            description: "Juicy, stacked, and ideal for a bold hero image.",
        },
        {
            src: mac,
            name: "Mac and Cheese",
            description: "Rich textures and gooey visuals make this one pop.",
        },
        {
            src: chicken,
            name: "Fried Chicken",
            description: "Great for crispy close-up photography and warm tones.",
        },
        {
            src: fries,
            name: "Loaded Fries",
            description: "A high-contrast card with lots of toppings and color.",
        },
        {
            src: friesTwo,
            name: "Loaded Fries II",
            description: "A high-contrast card with lots of toppings and color.",
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
                        Warm, familiar plates for when you want something satisfying.
                    </h1>
                    <p className="menu-page__lead">
                        This page is ready for your final dish images. Each card keeps a
                        consistent shape, so the section stays polished on desktop and mobile.
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
