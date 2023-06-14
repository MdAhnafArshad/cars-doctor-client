import About from "./about/About";
import Banner from "./banner/Banner";
import Services from "./services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            This is homepage
        </div>
    );
};

export default Home;