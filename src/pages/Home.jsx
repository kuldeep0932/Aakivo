import HeroBanner from "../components/layout/HeroBanner.jsx";
import SocialStats from "../components/layout/SocailStats.jsx";
import Services from "../components/layout/ServiceSection.jsx";
function Home() {
    return (
        <>

            <main>
                <HeroBanner />
                <SocialStats />
                <Services />
            </main>
        </>
    );
}

export default Home;
