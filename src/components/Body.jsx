import "../App.css";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import glassNoodle from "../assets/glass-noodle.webp";
import proteinBowl from "../assets/protein.avif";

const Body = ({ onNavigate }) => {
    const images = [
        { src: food1, alt: "Fresh plated dish" },
        { src: food2, alt: "Comfort food bowl" },
        { src: food3, alt: "Chef special dish" },
        { src: glassNoodle, alt: "Glass noodle bowl" },
        { src: proteinBowl, alt: "Protein-packed meal" },
    ];

    return (
        <section className="body-section">
            <div className="body-section__intro">
                <p className="body-eyebrow">Why guests keep coming back</p>
                <h2 className="body-h2">Food made fresh, fast, and full of character</h2>
                <p className="body-copy">
                    Every plate is prepared to order with bold flavors, generous
                    portions, and ingredients chosen for balance. We keep the menu
                    flexible so you can grab something comforting, something light,
                    or something adventurous without leaving the home page.
                </p>
                <div className="body-metrics">
                    <article className="body-metric">
                        <strong>20+</strong>
                        <span>signature dishes</span>
                    </article>
                    <article className="body-metric">
                        <strong>Daily</strong>
                        <span>fresh offers</span>
                    </article>
                    <article className="body-metric">
                        <strong>Fast</strong>
                        <span>easy ordering</span>
                    </article>
                </div>
                <button
                    className="body-cta"
                    type="button"
                    onClick={() => onNavigate?.("offer")}
                >
                    See Today&apos;s Offer
                </button>
            </div>

            <div className="body-gallery">
                <h3>Pick Your Preferences</h3>
                <div className="body_images_div">
                    {images.map((image) => (
                        <img key={image.src} src={image.src} alt={image.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Body;
