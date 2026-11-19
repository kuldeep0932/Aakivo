import BusinessBg from "../../assets/images/business_bg.png"
function BusinessSection() {
    return (
        <section className="business-section section">

            <div className="business-container container">

                {/* Background Image */}
                <div className="business-image">

                    <img
                        src={BusinessBg}
                        alt="Influencer showcasing creative work"
                    />

                    {/* Watch Video */}
                    <div className="business-video">

                        <div className="business-play-button">
                            <span>▶</span>
                        </div>

                        <div className="business-video-text">
                            <h3>Watch Video</h3>
                            <p>My Showreel</p>
                        </div>

                    </div>
                </div>

                {/* Content Panel */}
                <div className="business-content">

                    <div className="section-heading">

                        <span className="section-subtitle">
                            INCREASE YOUR BUSINESS
                        </span>

                        <h2>
                            Leading International
                            <br />
                            Brands and Businesses
                        </h2>

                    </div>

                    <p className="business-description">
                        We help brands grow with innovative strategies,
                        creative campaigns, and powerful influencer
                        collaborations. Our approach focuses on increasing
                        visibility, building trust, and delivering measurable
                        results that support long-term business success.
                    </p>

                    {/* Features */}
                    <ul className="business-features">

                        <li>
                            <span>✔</span>
                            Technology Support Allows Erie non-profit to Serve.
                        </li>

                        <li>
                            <span>✔</span>
                            Web design done Delightful Visualization
                        </li>

                        <li>
                            <span>✔</span>
                            Software Makes Your Profit Double if You Scale Properly.
                        </li>

                    </ul>

                    {/* Contact Button */}
                    <div className="gradient-btn">
                        <a href="/contact">Contact Us</a>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default BusinessSection;