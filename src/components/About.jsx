import aboutPhoto from "../assets/about-photo.jpg";
import Reveal from "./Reveal/Reveal";

function About() {
    return (
        <Reveal as="section">
            <section className="about">
                <div className="about__content">
                    <p className="about-eyebrow">About E. Restaurant</p>
                    <h2>More than a meal, it&apos;s a full dining experience</h2>
                    <p className="about-para">
                        We started with a simple idea: create a place where comfort food,
                        modern dishes, and international favorites all live together on one
                        menu. That means crispy, hearty plates for big appetites, lighter
                        options for balanced eating, and rotating specials for guests who
                        want to try something new.
                    </p>
                    <p className="about-para">
                        Our kitchen focuses on fresh ingredients, careful plating, and
                        friendly service. Whether you&apos;re ordering a quick lunch, a family
                        dinner, or a weekend treat, we want every visit to feel easy,
                        welcoming, and worth coming back for.
                    </p>

                    <div className="about-highlights">
                        <article className="about-highlight">
                            <h3>Fresh prep</h3>
                            <p>Meals are cooked after you order so the flavors stay bright and satisfying.</p>
                        </article>
                        <article className="about-highlight">
                            <h3>Varied menu</h3>
                            <p>From Italian classics to street food favorites, there&apos;s something for every mood.</p>
                        </article>
                        <article className="about-highlight">
                            <h3>Guest-first service</h3>
                            <p>We keep ordering simple and the experience friendly from start to finish.</p>
                        </article>
                    </div>
                </div>

                <aside className="about-aside">
                    <img src={aboutPhoto} className="about-image" alt="Restaurant food presentation" />
                </aside>
            </section>
        </Reveal>
    );
}

export default About;
