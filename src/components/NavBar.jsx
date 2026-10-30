export const NavBar = ({ currentPage, shortlistCount = 0, onNavigate }) => {
    const navLinks = [
        { label: "Home", link: "home", classname: "nav__link active" },
        { label: "About", link: "about", classname: "nav__link" },
        { label: "Varieties", link: "varieties", classname: "nav__link" },
        { label: "New", link: "new", classname: "nav__link" },
        { label: "Shop", link: "shop", classname: "nav__link" },
    ];

    const hnndleNavClick = (page) => {
        onNavigate?.(page);
    };



    return (
        <nav className="navbar">
            <div className="nav-cont container">
                <h1 className="nav__logo">ER</h1>





                <div className="nav__list">
                    {navLinks.map((navLink) => {
                        const isActive = currentPage === navLink.link;

                        return (
                            <button
                                key={navLink.link}
                                className="nav__item"
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => hnndleNavClick(navLink.link)}
                            >
                                {navLink.label}
                            </button>
                        );
                    })}
                    <button
                        className="nav__item nav__item--shortlist"
                        aria-label={`Open shortlist with ${shortlistCount} saved items`}
                        onClick={() => hnndleNavClick("offer")}
                    >
                        Shortlist{shortlistCount > 0 ? ` (${shortlistCount})` : ""}
                    </button>
                </div>
            </div>
        </nav>
    );
};
