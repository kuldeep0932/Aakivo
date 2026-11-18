import logo from '../../assets/images/aakivo-logo.png';
function Footer() {
    return (
        <footer className="ak-footer">

            <div className="ak-footer-overlay"></div>

            <div className="container ak-footer-container">

                {/* COLUMN 1 - BRAND INFORMATION */}
                <div className="ak-footer-brand">

                    <a href="/" className="ak-footer-logo">
                        <img
                            src={logo}
                            alt="Aakivo Logo"
                        />
                    </a>

                    <h3>Want to Create Something Great Together?</h3>

                    <div className="ak-footer-contact">
                        <h4>Get in Touch...</h4>

                        <a href="mailto:hello@aakivo.com">
                            hello@aakivo.com
                        </a>
                    </div>

                </div>


                {/* COLUMN 2 - INSTAGRAM FEED */}
                <div className="ak-footer-feed">

                    <h3>
                        Instagram <span>Feed</span>
                    </h3>

                    <div className="ak-footer-gallery">

                        <a href="#" className="ak-footer-gallery-item">
                            <img src="https://influencer.beplusthemes.com/wp-content/uploads/2024/01/ins-5-min.jpg" alt="Creator post 1" />
                        </a>

                        <a href="#" className="ak-footer-gallery-item">
                            <img src="https://influencer.beplusthemes.com/wp-content/uploads/2024/01/ins-4-min.jpg" alt="Creator post 2" />
                        </a>

                        <a href="#" className="ak-footer-gallery-item">
                            <img src="https://influencer.beplusthemes.com/wp-content/uploads/2024/01/ins-3-min.jpg" alt="Creator post 3" />
                        </a>

                        <a href="#" className="ak-footer-gallery-item">
                            <img src="https://influencer.beplusthemes.com/wp-content/uploads/2024/01/ins-2-min.jpg" alt="Creator post 4" />
                        </a>

                        <a href="#" className="ak-footer-gallery-item">
                            <img src="https://influencer.beplusthemes.com/wp-content/uploads/2024/01/ins-1-min.jpg" alt="Creator post 5" />
                        </a>

                        <a href="#" className="ak-footer-gallery-item">
                            <img src="https://influencer.beplusthemes.com/wp-content/uploads/2024/01/ins-6-min.jpg" alt="Creator post 6" />
                        </a>

                    </div>

                </div>


                {/* COLUMN 3 - CONTACT CARD */}
                <div className="ak-footer-cta">

                    <h2>Join With Me</h2>

                    <p>
                        Let's collaborate to create engaging
                        content and grow your brand.
                    </p>

                    <a href="/contact" className="ak-footer-contact-btn">
                        CONTACT ME
                    </a>


                    {/* Social Media */}
                    <div className="ak-footer-social">

                        <a href="#" aria-label="Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="#" aria-label="YouTube">
                            <i className="fa-brands fa-youtube"></i>
                        </a>

                        <a href="#" aria-label="TikTok">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>

                        <a href="#" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
