import BreadcrumbBanner from "../components/layout/BreadcrumbBanner";
import InfluencerDirectory from "../components/layout/InfluencerDirectory";
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
        </main>
        </>
    );
}
export default OurInfluencers;