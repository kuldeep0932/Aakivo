import HowIt1 from "../../assets/images/howit1.png"
import HowIt2 from "../../assets/images/howit2.png"
import HowIt3 from "../../assets/images/howit3.png"
function HowItWorks() {
    return (
        <section className="how-it-works section">
            <div className="container">

                {/* Section Heading */}
                <div className="section-heading">
                    <span className="section-subtitle">
                        How It Works?
                    </span>

                    <h2>
                        We Have A Lot Of <span>Opportunities</span>
                    </h2>
                </div>

                <div className="works-timeline">

                    {/* Step 01 */}
                    <div className="works-row">

                        <div className="works-content">
                            <span className="section-subtitle ">
                                Create Campaign
                            </span>

                            <h3>
                                <span>Create Campaign</span> with the help
                                of Influencers
                            </h3>

                            <p>
                                Plan and launch campaigns with the help of
                                influencers to maximize reach and engagement.
                                Our platform guides you step-by-step to ensure
                                your campaign is structured for success.
                            </p>

                            <div class="gradient-btn"><a href="/creators">Create Campaign Now</a></div>

                           
                        </div>

                        <div className="works-number">
                            01
                        </div>

                        <div className="works-image">
                            <img
                                src={HowIt1}
                                alt="Create influencer campaign"
                            />
                        </div>

                    </div>


                    {/* Step 02 */}
                    <div className="works-row">

                        <div className="works-image">
                            <img
                                src={HowIt2}
                                alt="Discover influencers on Aakivo"
                            />
                        </div>

                        <div className="works-number">
                            02
                        </div>

                        <div className="works-content">
                            <span className="section-subtitle ">
                                Find Influencer
                            </span>

                            <h3>
                                Discover the <span>Perfect Influencers</span>
                                for Your Campaigns
                            </h3>

                            <p>
                                Discover the perfect influencers for your
                                brand and campaign goals. Connect with
                                creators whose audience aligns with your
                                target market.
                            </p>

                            <div class="gradient-btn"><a href="/creators">Find Influencer</a></div>

                        </div>

                    </div>


                    {/* Step 03 */}
                    <div className="works-row">

                        <div className="works-content">
                            <span className="section-subtitle ">
                                Monitor Your Campaign
                            </span>

                            <h3>
                                Get <span>Influencer</span> Insights and
                                Make <span>Data-driven</span> Decisions
                            </h3>

                            <p>
                                Track influencer performance and audience
                                engagement in real time. Make data-driven
                                decisions to optimize your campaigns for
                                maximum impact.
                            </p>

                            <div class="gradient-btn"><a href="/creators">Discover More</a></div>
                        </div>

                        <div className="works-number">
                            03
                        </div>

                        <div className="works-image">
                            <img
                                src={HowIt3}
                                alt="Influencer campaign analytics"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default HowItWorks;