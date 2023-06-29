import About from "../About/About";
import Banner from "../Banner/Banner";
import Coantact from "../Contact/Coantact";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Projects></Projects>
            <Skills></Skills>
            <Coantact></Coantact>
        </div>
    );
};

export default Home;