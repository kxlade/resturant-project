// /* eslint-disable no-unused-vars */
import Body from "./Body";
import { Header } from "./Header";
import Varieties from "./Varieties";
import Reveal from "./Reveal/Reveal";
import "../App.css";

const Home = ({ onNavigate }) => {
    return (
        <div className="home-page">
            <Reveal as="section">
                <Header onNavigate={onNavigate} />
            </Reveal>
            <Reveal as="section" delay={80}>
                <Varieties onNavigate={onNavigate} />
            </Reveal>
            <Reveal as="section" delay={140}>
                <Body onNavigate={onNavigate} />
            </Reveal>
        </div>
    );
}
export default Home;
