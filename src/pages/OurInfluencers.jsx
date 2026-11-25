import BreadcrumbBanner from "../components/layout/BreadcrumbBanner";
import InfluencerDirectory from "../components/layout/InfluencerDirectory";
import CampaignCTA from "../components/layout/CampaignCTA.jsx";
import PageBannerImg from "../assets/images/breadcrumb-influencers.png"
function OurInfluencers() {
    return (
        <><main>
            <BreadcrumbBanner
                title="Our Influencers"
                backgroundImage={PageBannerImg}
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Our Influencers" },
                ]}
            />
            <InfluencerDirectory />
            <CampaignCTA />
        </main>
        </>
    );
}
export default OurInfluencers;