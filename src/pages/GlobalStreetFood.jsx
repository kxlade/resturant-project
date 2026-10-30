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
        description: "Tender Korean-style barbecue served over rice with crisp vegetables and a savoury sauce.",
        src: bowl,
    },
    {
        name: "Mexican Tacos Al Pastor",
        description: "Warm tortillas filled with marinated pork, pineapple, onion and fresh coriander.",
        src: tacos,
    },
    {
        name: "Japanese Ramen",
        description: "A warming bowl of noodles in rich broth, finished with savoury toppings and fresh herbs.",
        src: ramen,
    },
    {
        name: "Indian Butter Chicken",
        description: "Tender chicken in a gently spiced, creamy tomato sauce, served with fragrant rice.",
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
                    <h1 className="menu-page__title">Street food favourites packed with bold flavours from around the world.</h1>
                    <p className="menu-page__lead">
                        Explore vibrant dishes inspired by food stalls and kitchens across
                        the globe, from smoky barbecue bowls to comforting ramen.
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
