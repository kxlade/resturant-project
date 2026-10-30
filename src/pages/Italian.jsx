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
                        A rich, high-impact collection built for elegant food photography.
                    </h1>
                    <p className="menu-page__lead">
                        Each dish card is sized for a future image and a short description so your layout stays balanced once you add your own image source.
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
