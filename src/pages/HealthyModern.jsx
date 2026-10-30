import "./Pages.css";
import Reveal from "../components/Reveal/Reveal";
import MenuGallery from "../components/MenuGallery";
import Dishes from "./HealthyModernDishes";

export const HealthyModern = ({ onNavigate = () => {}, shortlist = [], onToggleShortlist }) => {
    return (
        <Reveal as="section">
            <section className="menu-page menu-page--healthy">
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

                    <p className="menu-page__eyebrow">Healthy and Modern</p>
                    <h1 className="menu-page__title">
                        Fresh, balanced dishes with plenty of flavour in every bite.
                    </h1>
                    <p className="menu-page__lead">
                        Find colourful bowls, wholesome ingredients and lighter options
                        made to leave you feeling satisfied.
                    </p>

                    <MenuGallery
                        collectionKey="healthy"
                        items={Dishes}
                        shortlist={shortlist}
                        onToggleShortlist={onToggleShortlist}
                    />
                </div>
            </section>
        </Reveal>
    );
};
