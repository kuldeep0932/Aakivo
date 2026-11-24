
function AboutSection() {
    const stats = [
        {
            number: "25K+",
            label: "Creators",
            style: "stat-purple"
        },
        {
            number: "200+",
            label: "Brand Partners",
            style: "stat-pink"
        },
        {
            number: "19M+",
            label: "Audience Reach",
            style: "stat-green"
        },
        {
            number: "10M",
            label: "Social Followers",
            style: "stat-peach"
        }
    ];

    const features = [
        "Discover Talented Creators",
        "Brand Collaborations",
        "Grow Your Audience",
        "Manage Campaigns"
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
                            We Connect Creators and Brands to Build <span>Powerful</span> Collaborations
                        </h2>

                        <p>
                            Aakivo is a platform where creativity meets opportunity. We bring influencers and brands together to create meaningful partnerships, grow audiences, and build impactful marketing campaigns.
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