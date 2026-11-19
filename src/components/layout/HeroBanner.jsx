import BannerImg from "../../assets/images/NewBannerImg.png";
function Hero() {
    return (
        <section className="ak-hero">

            <div className="container ak-hero-container">

                {/* LEFT CONTENT */}
                <div className="ak-hero-content">

                    {/* Badge */}
                    <div className="ak-hero-badge">
                        <i className="fa-solid fa-star"></i>
                        <span>The Creator Collaboration Marketplace</span>
                    </div>

                    {/* Heading */}
                    <h1>
                        Your Influence.
                        <br />
                        Your <span>Opportunities.</span>
                    </h1>

                    {/* Description */}
                    <p className="ak-hero-description">
                        Discover talented creators, build meaningful
                        collaborations and grow your brand together.
                    </p>

                    {/* Search Bar */}
                    <div className="ak-hero-search">

                        <div className="ak-search-input">
                            <i className="fa-solid fa-magnifying-glass"></i>

                            <input
                                type="text"
                                placeholder="Search creators, categories or locations..."
                            />
                        </div>

                        <div className="gradient-btn">
                            <a href="/discover">
                                Search Creators
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

                    </div>

                    {/* Popular Categories */}
                    <div className="ak-hero-popular">

                        <span className="ak-popular-label">Popular:</span>

                        <div className="ak-popular-tags">
                            <a href="/discover?category=fashion">Fashion</a>
                            <a href="/discover?category=beauty">Beauty</a>
                            <a href="/discover?category=travel">Travel</a>
                            <a href="/discover?category=technology">Technology</a>
                        </div>

                    </div>

                </div>


                {/* RIGHT IMAGE */}
                <div className="ak-hero-visual">

                    {/* Background Shape */}
                    <div className="ak-hero-shape"></div>

                    {/* Creator Image */}
                    <div className="ak-hero-image">
                        <img
                            src={BannerImg}
                            alt="Content creator showcasing her influence"
                        />
                    </div>

                    {/* Instagram Icon */}
                    <div className="ak-floating-icon ak-instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </div>

                    {/* YouTube Icon */}
                    <div className="ak-floating-icon ak-youtube">
                        <i className="fa-brands fa-youtube"></i>
                    </div>

                    {/* TikTok Icon */}
                    <div className="ak-floating-icon ak-tiktok">
                        <i className="fa-brands fa-tiktok"></i>
                    </div>

                    {/* Audience Statistics */}
                    <div className="ak-hero-stats">
                        <h3>2.5M</h3>
                        <span>Total Reach</span>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;
