import "../App.css";
import offerItems from "./OfferItems";
import Reveal from "../components/Reveal/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export const Offer = ({ onNavigate, shortlist = [] }) => {
    const [selectedOffer, setSelectedOffer] = useState(offerItems[0]);

    const nextSteps = [
        {
            title: "Add filters",
            description: "Let guests switch between popular, healthy, comfort, and limited-time dishes.",
        },
        {
            title: "Add a cart flow",
            description: "Turn the food cards into real ordering steps with quantity, notes, and checkout.",
        },
        {
            title: "Show live availability",
            description: "Connect the badge to data so sold-out dishes update automatically.",
        },
        {
            title: "Add dietary tags",
            description: "Mark vegan, vegetarian, spicy, gluten-friendly, or high-protein options.",
        },
        {
            title: "Add pricing and savings",
            description: "Display prices, combo discounts, and best-value labels to help decisions faster.",
        },
        {
            title: "Add social proof",
            description: "Include ratings, popular picks, and short guest comments on the strongest dishes.",
        },
    ];

    const handlePick = (item) => {
        setSelectedOffer(item);
    };

    return (
        <Reveal as="section">
            <section className="offer-section">
                <div className="offer-section__shell">
                    <p className="offer-eyebrow">Limited time offers <FontAwesomeIcon icon={faClock} /></p>
                    <h2 className="offer-title">Special plates for today&apos;s cravings</h2>
                    <p className="offer-lead">
                        This section brings the best-value dishes together in one place so
                        guests can move from browsing to ordering without hunting through the
                        full menu.
                    </p>

                    <div className="offer-actions">
                        <button className="menu-page__button" type="button" onClick={() => onNavigate?.("varieties")}>
                            Browse Varieties
                        </button>
                        <button
                            className="menu-page__button menu-page__button--ghost"
                            type="button"
                            onClick={() => onNavigate?.("home")}
                        >
                            Back to Home
                        </button>
                    </div>

                    <div className="offer-focus">
                        <div>
                            <p className="offer-focus__eyebrow">Ready to pick</p>
                            <h3>{selectedOffer.title}</h3>
                            <p>{selectedOffer.details}</p>
                        </div>
                        <div className={`offer-badge offer-badge--${selectedOffer.availabilityTone}`}>
                            {selectedOffer.availability}
                        </div>
                    </div>

                    <div className="offer-grid">
                        {offerItems.map((item, index) => (
                            <Reveal key={item.title} delay={index * 120}>
                                <article className="offer-card">
                                    <img src={item.image} alt={item.title} className="offer-card__image" />
                                    <div className="offer-card__body">
                                        <div className={`offer-badge offer-badge--${item.availabilityTone}`}>
                                            {item.availability}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <div className="offer-card__actions">
                                            <button
                                                className="menu-page__button"
                                                type="button"
                                                onClick={() => handlePick(item)}
                                            >
                                                View details
                                            </button>
                                            <button
                                                className="menu-page__button menu-page__button--ghost"
                                                type="button"
                                                onClick={() => onNavigate?.("shop")}
                                            >
                                                Pick this
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    <div className="shortlist-panel offer-shortlist">
                        <div className="shortlist-panel__header">
                            <div>
                                <p className="shortlist-panel__eyebrow">Your shortlist</p>
                                <h3>{shortlist.length > 0 ? "Saved dishes across the site" : "No dishes saved yet"}</h3>
                            </div>
                            <span className="shortlist-panel__count">{shortlist.length} total</span>
                        </div>

                        {shortlist.length > 0 ? (
                            <div className="shortlist-panel__items">
                                {shortlist.map((item) => (
                                    <span className="shortlist-chip shortlist-chip--static" key={item.id}>
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="shortlist-panel__empty">
                                Tap <strong>Add to shortlist</strong> on Italian, Comfort, or Healthy Modern dishes to build a small save list.
                            </p>
                        )}
                    </div>

                    <div className="offer-roadmap">
                        <p className="offer-eyebrow">Next big changes</p>
                        <h3 className="offer-roadmap__title">What will make the biggest difference next</h3>
                        <div className="offer-roadmap__grid">
                            {nextSteps.map((step, index) => (
                                <article className="offer-roadmap__card" key={step.title}>
                                    <span className="offer-roadmap__index">0{index + 1}</span>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
};
