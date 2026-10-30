import headerImage from "../assets/header-image2.jpg";

export const Header = ({ onNavigate }) => {
    const handleNavigationClick = (page) => {
        onNavigate?.(page);
    };

    return (
        <header
            className="main-header"
            style={{
                backgroundImage:
                    `linear-gradient(180deg, rgba(9, 10, 16, 0.2), rgba(9, 10, 16, 0.6)), url(${headerImage})`,
            }}
        >
            <div>
                <h1 className="header-h1">E. Restaurant</h1>
                <p className="header-p">We serve the best food in town</p>

                <button className="header-btn" onClick={() => handleNavigationClick("varieties")}>Order Now</button>
            </div>
        </header>
    )
}
