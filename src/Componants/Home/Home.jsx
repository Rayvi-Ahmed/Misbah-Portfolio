import About from "../About/About";
import Banner from "../Banner/Banner";
import Coantact from "../Contact/Coantact";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Coantact></Coantact>
        </div>
    );
};

export default Home;