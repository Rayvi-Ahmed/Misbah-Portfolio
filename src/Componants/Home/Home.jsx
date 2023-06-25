import About from "../About/About";
import Banner from "../Banner/Banner";
import Coantact from "../Contact/Coantact";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Projects></Projects>
            <Coantact></Coantact>
        </div>
    );
};

export default Home;