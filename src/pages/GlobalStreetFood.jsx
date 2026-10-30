import "./Pages.css";
import Reveal from "../components/Reveal/Reveal";
import bowl from "../assets/balancd-diet.avif";
import tacos from "../assets/Mexican-Tacos-Al-Pastor.avif";
import ramen from "../assets/japanese-Ramen.JPG";
import butterChicken from "../assets/indian-butter-beef.JPG";
import MenuGallery from "../components/MenuGallery";

const streetFoodDishes = [
    {
        name: "Korean BBQ Bowls",
        description: "Bright reds, greens, and grains make this a vibrant centerpiece.",
        src: bowl,
    },
    {
        name: "Mexican Tacos Al Pastor",
        description: "Colorful toppings and layered textures with great visual energy.",
        src: tacos,
    },
    {
        name: "Japanese Ramen",
        description: "Steam, broth, and toppings create a deep and dramatic image.",
        src: ramen,
    },
    {
        name: "Indian Butter Chicken",
        description: "Warm tones and creamy sauce that photograph beautifully on light backgrounds.",
        src: butterChicken,
    },
];

export const GlobalStreetFood = ({ onNavigate = () => { }, shortlist = [], onToggleShortlist }) => {
    return (
        <Reveal as="section">
            <section className="menu-page menu-page--streetfood">
                <div className="menu-page__shell">
                    <div className="menu-page__actions">
                        <button className="menu-page__button" onClick={() => onNavigate("varieties")}>Back to varieties</button>
                        <button className="menu-page__button menu-page__button--ghost" onClick={() => onNavigate("home")}>Home</button>
                    </div>

                    <p className="menu-page__eyebrow">Global Street Food</p>
                    <h1 className="menu-page__title">Trendy, colorful plates with high contrast and a lot of personality.</h1>
                    <p className="menu-page__lead">
                        The card system below gives you a ready-made image grid for vivid food photography and short supporting text.
                    </p>

                    <MenuGallery
                        collectionKey="streetfood"
                        items={streetFoodDishes}
                        shortlist={shortlist}
                        onToggleShortlist={onToggleShortlist}
                    />
                </div>
            </section>
        </Reveal>
    );
};
