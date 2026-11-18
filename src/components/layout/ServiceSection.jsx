function Services() {
    return (
        <section className="ak-services">

            <div className="container">

                {/* Section Heading */}
                <div className="section-heading">

                    <span className="section-subtitle">
                        THE RIGHT INFLUENCER
                    </span>

                    <h2>
                        Services to Improve <span>Your Business</span>
                    </h2>

                </div>

                {/* Services Cards */}
                <div className="ak-services-grid">

                    {/* Card 1 */}
                    <div className="ak-service-card">

                        <div className="ak-service-icon">
                            <img
                                src="https://influencer.beplusthemes.com/wp-content/uploads/2023/12/brand-image-2x-min.png"
                                alt="Brand collaborations"
                            />
                        </div>

                        <h3>Brand Collaborations</h3>

                        <p>
                            We connect influencers with the
                            right brands to create authentic
                            partnerships.
                        </p>

                        <a href="/services/brand-collaborations">
                            READ MORE
                        </a>

                    </div>


                    {/* Card 2 */}
                    <div className="ak-service-card">

                        <div className="ak-service-icon">
                            <img
                                src="https://influencer.beplusthemes.com/wp-content/uploads/2023/12/empowerment-2x-min.png"
                                alt="Empowering creators"
                            />
                        </div>

                        <h3>Empowering Creators</h3>

                        <p>
                            We provide tools, guidance, and
                            strategic support to help creators
                            grow their influence.
                        </p>

                        <a href="/services/creator-support">
                            READ MORE
                        </a>

                    </div>


                    {/* Card 3 */}
                    <div className="ak-service-card">

                        <div className="ak-service-icon">
                            <img
                                src="https://influencer.beplusthemes.com/wp-content/uploads/2023/12/content-creator-2x-min.png"
                                alt="Content planner"
                            />
                        </div>

                        <h3>Content Planner</h3>

                        <p>
                            Our structured content planning
                            helps you stay consistent with
                            ideas and campaigns.
                        </p>

                        <a href="/services/content-planner">
                            READ MORE
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Services;
