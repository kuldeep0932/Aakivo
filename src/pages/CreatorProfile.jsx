import profileImg1 from "../assets/images/ananya1.png"
import profileImg2 from "../assets/images/ananya2.png"
import profileImg3 from "../assets/images/ananya3.png"
import profileBg from "../assets/images/bannerbgProfile.png"
import BreadcrumbBanner from "../components/layout/BreadcrumbBanner.jsx";

function CreatorProfile() {
    return (
        <main>
            <BreadcrumbBanner
                title="Creator Profile"
                backgroundImage={profileBg}
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Creator Profile" },
                ]}
            />
            <div className="creator-profile-section">

                <div className="container creator-profile-container">

                    {/* PORTFOLIO GALLERY */}
                    <div className="creator-profile-gallery">

                        <div className="creator-profile-gallery-main">
                            <img
                                src={profileImg1}
                                alt="El Kilombo portfolio"
                            />
                        </div>

                        <div className="creator-profile-gallery-side">

                            <div className="creator-profile-gallery-item">
                                <img
                                    src={profileImg2}
                                    alt="El Kilombo portfolio"
                                />
                            </div>

                            <div className="creator-profile-gallery-item">
                                <img
                                    src={profileImg3}
                                    alt="El Kilombo portfolio"
                                />
                            </div>

                        </div>

                    </div>


                    {/* CREATOR INFORMATION */}
                    <div className="creator-profile-info">

                        <div className="creator-profile-info-left">

                            <h1 className="creator-profile-name">
                                El Kilombo
                                <i className="fa-solid fa-circle-check"></i>
                            </h1>

                            <a href="#" className="creator-profile-username">
                                @el-kilombo
                            </a>

                            <div className="creator-profile-meta">

                                <span>
                                    <i className="fa-solid fa-location-dot"></i>
                                    Faro, Portugal
                                </span>

                                <span className="creator-profile-meta-divider"></span>

                                <span>
                                    <i className="fa-solid fa-circle-user"></i>
                                    Artist/Performer
                                </span>

                            </div>

                            {/* SOCIAL LINKS */}
                            <div className="creator-profile-social-links">

                                <a href="#" className="creator-profile-social-facebook"
                                    aria-label="Facebook">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>

                                <a href="#" className="creator-profile-social-youtube"
                                    aria-label="YouTube">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>

                                <a href="#" className="creator-profile-social-tiktok"
                                    aria-label="TikTok">
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>

                                <a href="#" className="creator-profile-social-instagram"
                                    aria-label="Instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                            </div>

                        </div>


                        {/* PROFILE ACTIONS */}
                        <div className="creator-profile-info-actions">

                            <div className="gradient-btn">
                                <a href="/contact">
                                    Contact Creator
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>

                            <button
                                className="creator-profile-bookmark-btn"
                                aria-label="Bookmark creator"
                                type="button"
                            >
                                <i className="fa-regular fa-bookmark"></i>
                            </button>

                        </div>

                    </div>


                    {/* ABOUT CREATOR */}
                    <section className="creator-profile-about">

                        <h2 className="creator-profile-section-title">
                            About the Creator
                            <i className="fa-solid fa-circle-check"></i>
                        </h2>

                        <p>
                            El Kilombo is a leading comedy content creator from
                            Faro, Portugal, widely recognized for his hilarious
                            sketches, viral videos, and entertaining YouTube
                            series. With a natural talent for humor and
                            storytelling, he has built a massive and loyal
                            following that spans across social media platforms.
                        </p>

                        <p>
                            Known for blending witty commentary, relatable life
                            situations, and unexpected twists, his videos
                            consistently capture the attention of audiences
                            and generate high engagement. From trending
                            challenges to original comedic sketches,
                            El Kilombo's content resonates with both young and
                            adult viewers, making him one of Portugal's most
                            beloved humor influencers.
                        </p>

                    </section>


                    {/* CREATOR PACKAGES */}
                    <section className="creator-profile-packages">

                        <h2 className="creator-profile-section-title">
                            Packages:

                            <a href="/contact" className="creator-profile-how-link">
                                How does it work?
                            </a>

                        </h2>


                        <div className="creator-profile-packages-grid">

                            {/* INSTAGRAM PACKAGE */}
                            <div className="creator-profile-package">

                                <div className="creator-profile-package-top">

                                    <div className="creator-profile-package-icon creator-profile-instagram-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>

                                    <div>
                                        <h3>1 Instagram Photo Feed Post</h3>

                                        <p>
                                            I will make a carousel feed post
                                            featuring your product or service.
                                        </p>
                                    </div>

                                </div>

                                <div className="creator-profile-package-bottom">

                                    <strong>$300</strong>

                                    <a href="/contact" className="creator-profile-package-btn btn btn-outline">
                                        Continue
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>

                                </div>

                            </div>


                            {/* YOUTUBE PACKAGE */}
                            <div className="creator-profile-package">

                                <div className="creator-profile-package-top">

                                    <div className="creator-profile-package-icon creator-profile-youtube-icon">
                                        <i className="fa-brands fa-youtube"></i>
                                    </div>

                                    <div>
                                        <h3>1 YouTube Video</h3>

                                        <p>
                                            I will create a YouTube video
                                            featuring your brand.
                                        </p>
                                    </div>

                                </div>

                                <div className="creator-profile-package-bottom">

                                    <strong>$350</strong>

                                    <a href="/contact" className="creator-profile-package-btn btn btn-outline">
                                        Continue
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>

                                </div>

                            </div>


                            {/* FACEBOOK PACKAGE */}
                            <div className="creator-profile-package">

                                <div className="creator-profile-package-top">

                                    <div className="creator-profile-package-icon creator-profile-facebook-icon">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </div>

                                    <div>
                                        <h3>1 Facebook Post</h3>

                                        <p>
                                            I will create a Facebook post
                                            for your brand.
                                        </p>
                                    </div>

                                </div>

                                <div className="creator-profile-package-bottom">

                                    <strong>$250</strong>

                                    <a href="/contact" className="creator-profile-package-btn btn btn-outline">
                                        Continue
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>

                                </div>

                            </div>

                        </div>


                        {/* CUSTOM OFFER */}
                        <div className="creator-profile-custom-offer">

                            <i className="fa-solid fa-envelope"></i>

                            <span>Have a different request?</span>

                            <a href="/contact">
                                Send a Custom Offer
                            </a>

                        </div>

                    </section>

                </div>

            </div>
        </main>
    );
}

export default CreatorProfile;
