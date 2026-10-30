// /* eslint-disable no-unused-vars */
import "./Pages.css";
import Dishes from "./ItallianDishes.js";
import Reveal from "../components/Reveal/Reveal.jsx";
import MenuGallery from "../components/MenuGallery";

export const Italian = ({ onNavigate = () => {}, shortlist = [], onToggleShortlist }) => {

    return (
        <Reveal as="section">
            <section className="menu-page menu-page--italian">
                <div className="menu-page__shell">
                    <div className="menu-page__actions">
                        <button className="menu-page__button" onClick={() => onNavigate("varieties")}>
                            Back to varieties
                        </button>
                        <button
                            className="menu-page__button menu-page__button--ghost"
                            onClick={() => onNavigate("home")}
                        >
                            Home
                        </button>
                    </div>

                    <p className="menu-page__eyebrow">Italian Classics</p>
                    <h1 className="menu-page__title">
                        Italian favourites, from slow-simmered classics to fresh, simple plates.
                    </h1>
                    <p className="menu-page__lead">
                        Discover familiar recipes and regional flavours, prepared with care
                        and served with the ingredients that make each dish special.
                    </p>

                    <MenuGallery
                        collectionKey="italian"
                        items={Dishes}
                        shortlist={shortlist}
                        onToggleShortlist={onToggleShortlist}
                    />
                </div>
            </section>
        </Reveal>
    );
};
