function SocialStats({ showHeading = false }) {
    return (
        <section className="ak-social-stats-section">
            <div className="container">

                {/* Optional Section Heading */}
                {showHeading && (
                    <div className="section-heading">
                        <span class="section-subtitle">beauty and lifestyle influencer</span>
                        <h2>
                            Follow My Journey On All
                            <span> Social Media Channels</span>
                        </h2>
                    </div>
                )}

                <div className="ak-social-stats-grid">

                    {/* Facebook */}
                    <div className="ak-social-stat-card">

                        <div className="ak-stat-icon facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>

                        <h2>2K+</h2>

                        <p>Facebook followers</p>

                        <a href="#" className="ak-stat-link">
                            Follow Me
                        </a>

                    </div>


                    {/* YouTube */}
                    <div className="ak-social-stat-card">

                        <div className="ak-stat-icon youtube">
                            <i className="fa-brands fa-youtube"></i>
                        </div>

                        <h2>4K+</h2>

                        <p>Youtube Subscribers</p>

                        <a href="#" className="ak-stat-link">
                            Subscribe Me
                        </a>

                    </div>


                    {/* TikTok */}
                    <div className="ak-social-stat-card">

                        <div className="ak-stat-icon tiktok">
                            <i className="fa-brands fa-tiktok"></i>
                        </div>

                        <h2>3.5K+</h2>

                        <p>Tiktok Followers</p>

                        <a href="#" className="ak-stat-link">
                            Follow Me
                        </a>

                    </div>


                    {/* Instagram */}
                    <div className="ak-social-stat-card">

                        <div className="ak-stat-icon instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </div>

                        <h2>2.3K+</h2>

                        <p>Instagram Followers</p>

                        <a href="#" className="ak-stat-link">
                            Follow Me
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default SocialStats;
