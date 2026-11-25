import CampainImage from "../../assets/images/campaignSp.png"
function CampaignCTA() {
    return (
        <section className="campaign-cta-section section">
            <div className="campaign-cta-container container">

                <div className="campaign-cta-content">

                    <span className="campaign-cta-badge">
                        ✦ Ready to Collaborate?
                    </span>

                    <h2>
                        Find the Right <span>Creator</span>
                        <br />
                        for Your Brand
                    </h2>

                    <p>
                        Start your campaign today and reach
                        a wider audience.
                    </p>
                    <div class="gradient-btn">
                        <a href="/campaigns/create">Post a Campaign<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="campaign-cta-image">
                    <img
                        src={CampainImage}
                        alt="Megaphone illustration"
                    />
                </div>

            </div>
        </section>
    );
}

export default CampaignCTA;
