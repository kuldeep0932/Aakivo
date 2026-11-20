import HeroBanner from "../components/layout/HeroBanner.jsx";
import SocialStats from "../components/layout/SocailStats.jsx";
import Services from "../components/layout/ServiceSection.jsx";
import BusinessSection from "../components/layout/BusinessSection.jsx";
import JoinSection from "../components/layout/JoinSection.jsx";

function Home() {
    return (
        <>

            <main>
                <HeroBanner />
                <SocialStats />
                <JoinSection />
                <Services />
                <BusinessSection />
            </main>
        </>
    );
}

export default Home;
