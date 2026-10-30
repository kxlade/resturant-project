import { useState } from "react";
import Reveal from "./Reveal/Reveal";

const buildItemId = (collectionKey, itemName) => `${collectionKey}:${itemName}`;

const MenuGallery = ({
    collectionKey,
    items,
    shortlist = [],
    onToggleShortlist,
}) => {
    const [expandedItemId, setExpandedItemId] = useState(null);
    const shortlistIds = new Set(shortlist.map((item) => item.id));
    const shortlistedItems = items.filter((item) =>
        shortlistIds.has(buildItemId(collectionKey, item.name)),
    );

    const handleViewDetails = (itemId) => {
        setExpandedItemId((currentItemId) => (currentItemId === itemId ? null : itemId));
    };

    return (
        <div className="menu-gallery">
            <div className="menu-grid">
                {items.map((item, index) => {
                    const itemId = buildItemId(collectionKey, item.name);
                    const isExpanded = expandedItemId === itemId;
                    const isSaved = shortlistIds.has(itemId);

                    return (
                        <Reveal key={itemId} delay={index * 90}>
                            <article className="menu-card menu-card--interactive">
                                <div className="menu-card__body">
                                    <img src={item.src} alt={item.name} />
                                    <h2>{item.name}</h2>
                                    <p
                                        className={`menu-card__description ${
                                            isExpanded ? "menu-card__description--visible" : ""
                                        }`}
                                    >
                                        {item.description}
                                    </p>
                                    <div className="menu-card__actions">
                                        <button
                                            className="menu-page__button"
                                            type="button"
                                            onClick={() => handleViewDetails(itemId)}
                                        >
                                            {isExpanded ? "Hide details" : "View details"}
                                        </button>
                                        <button
                                            className="menu-page__button menu-page__button--ghost"
                                            type="button"
                                            onClick={() =>
                                                onToggleShortlist?.({
                                                    id: itemId,
                                                    name: item.name,
                                                    description: item.description,
                                                    image: item.src,
                                                    collectionKey,
                                                })
                                            }
                                        >
                                            {isSaved ? "Remove from shortlist" : "Add to shortlist"}
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    );
                })}
            </div>

            <aside className="shortlist-panel">
                <div className="shortlist-panel__header">
                    <div>
                        <p className="shortlist-panel__eyebrow">Shortlist</p>
                        <h3>
                            {shortlistedItems.length > 0
                                ? `${shortlistedItems.length} saved from this section`
                                : "Nothing saved yet"}
                        </h3>
                    </div>
                    <span className="shortlist-panel__count">{shortlist.length} total</span>
                </div>

                {shortlistedItems.length > 0 ? (
                    <div className="shortlist-panel__items">
                        {shortlistedItems.map((item) => (
                            <button
                                key={buildItemId(collectionKey, item.name)}
                                className="shortlist-chip"
                                type="button"
                                onClick={() =>
                                    onToggleShortlist?.({
                                        id: buildItemId(collectionKey, item.name),
                                        name: item.name,
                                        description: item.description,
                                        image: item.src,
                                        collectionKey,
                                    })
                                }
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                ) : (
                    <p className="shortlist-panel__empty">
                        Use <strong>View details</strong> to expand the dish description and
                        <strong> Add to shortlist</strong> to save it for later.
                    </p>
                )}
            </aside>
        </div>
    );
};

export default MenuGallery;
