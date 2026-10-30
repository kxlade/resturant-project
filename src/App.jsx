// /* eslint-disable no-unused-vars */
import "./App.css";
import About from "./components/About";
import Varieties from "./components/Varieties";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Newsletter } from "./pages/Newsletter";
import { New } from "./pages/New";
import "./pages/Pages.css";
import { Comfort } from "./pages/Comfort";
import { Italian } from "./pages/Italian";
import { GlobalStreetFood } from "./pages/GlobalStreetFood";
import { HealthyModern } from "./pages/HealthyModern";
import BackToTop from "./components/BackToTop";
import { Offer } from "./pages/Offer";
import { Shop } from "./components/Shop";
// import Reveal from "./components/Reveal";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [shortlist, setShortlist] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNavigate = (pageName) => {
    setCurrentPage(pageName);
  };

  const handleToggleShortlist = (item) => {
    setShortlist((currentShortlist) => {
      const alreadySaved = currentShortlist.some(
        (savedItem) => savedItem.id === item.id,
      );

      if (alreadySaved) {
        return currentShortlist.filter((savedItem) => savedItem.id !== item.id);
      }

      return [...currentShortlist, item];
    });
  };

  const pageByName = {
    home: <Home onNavigate={handleNavigate} />,
    about: <About />,
    varieties: <Varieties onNavigate={handleNavigate} />,
    body: <Body onNavigate={handleNavigate} />,
    newsletter: <Newsletter onNavigate={handleNavigate} />,
    new: <New onNavigate={handleNavigate} />,
    comfort: (<Comfort onNavigate={handleNavigate} shortlist={shortlist} onToggleShortlist={handleToggleShortlist} />),
    italian: (<Italian onNavigate={handleNavigate} shortlist={shortlist} onToggleShortlist={handleToggleShortlist} />),
    streetfood: <GlobalStreetFood onNavigate={handleNavigate} shortlist={shortlist} onToggleShortlist={handleToggleShortlist} />,
    healthy: (<HealthyModern onNavigate={handleNavigate} shortlist={shortlist} onToggleShortlist={handleToggleShortlist} />),
    offer: <Offer onNavigate={handleNavigate} shortlist={shortlist} />,
    shop: <Shop onNavigate={handleNavigate} />,
  };

  return (
    <div className="App">
      <NavBar
        currentPage={currentPage}
        shortlistCount={shortlist.length}
        onNavigate={handleNavigate}
      />
      <main className="main">
        {pageByName[currentPage] ?? <Home onNavigate={handleNavigate} />}
      </main>

      <BackToTop />
    </div>
  );
}

export default App;
