import HeroBanner from "../components/layout/HeroBanner.jsx";
import SocialStats from "../components/layout/SocailStats.jsx";
import Services from "../components/layout/ServiceSection.jsx";
import BusinessSection from "../components/layout/BusinessSection.jsx";
import JoinSection from "../components/layout/JoinSection.jsx";
import AboutSection from "../components/layout/AboutSection.jsx";
import HowItWorks from "../components/layout/HowItWorks.jsx";
import PodcastSection from "../components/layout/PoadcastSection.jsx";
import TrustedPartners from "../components/layout/TrustedPartners.jsx";
import BlogSection from "../components/layout/BlogSection.jsx";
import FeaturedCreators from "../components/layout/FeaturedCreators.jsx";

function Home() {
    return (
        <>

            <main>
                <HeroBanner />
                <SocialStats />
                <JoinSection />
                <Services />
                <BusinessSection />
                <PodcastSection />
                <FeaturedCreators />
                <AboutSection />
                <HowItWorks />
                <TrustedPartners />
                <BlogSection />
            </main>
        </>
    );
}

export default Home;
