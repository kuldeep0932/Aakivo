
function AboutSection() {
    const stats = [
        {
            number: "25K",
            label: "Podcasts Episodes",
            style: "stat-purple"
        },
        {
            number: "200+",
            label: "Podcasts Series",
            style: "stat-pink"
        },
        {
            number: "19M",
            label: "Podcasts Listeners",
            style: "stat-green"
        },
        {
            number: "10M",
            label: "Influencer Followers",
            style: "stat-peach"
        }
    ];

    const features = [
        "Exclusive Content",
        "Social Media Promotions",
        "Discounts on Merch"
    ];

    return (
        <section className="about-section section">
            <div className="about-container container">

                {/* Statistics */}
                <div className="about-stats">

                    {stats.map((stat, index) => (
                        <div
                            className={`stat-card ${stat.style}`}
                            key={index}
                        >
                            <div className="stat-number">
                                {stat.number}
                            </div>

                            <p>{stat.label}</p>
                        </div>
                    ))}

                </div>

                {/* About Content */}
                <div className="about-content">

                    <div className="section-heading about-heading">
                        <span className="section-subtitle">
                            About Aakivo
                        </span>

                        <h2>
                            We connect creators and brands to grow with <span>meaningful</span> collaborations
                        </h2>

                        <p>
                            Aakivo brings influencers and brands
                            together through meaningful partnerships.
                            Discover creators, showcase your talent,
                            and build collaborations that create
                            real impact.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="about-features">

                        {features.map((feature, index) => (
                            <div className="about-feature" key={index}>
                                <span className="feature-check">✓</span>
                                <span>{feature}</span>
                            </div>
                        ))}

                    </div>

                    {/* CTA Button */}
                    <div className="about-action gradient-btn">
                        <a href="/creators">
                            Explore Creator
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutSection;