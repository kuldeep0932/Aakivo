import logo from '../../assets/images/aakivo-logo.png';

function NavBar() {
    return (
        <>
        <div className="ak-topbar">

            <div className="container ak-topbar-inner">

                {/* Contact Information */}
                <div className="ak-topbar-left">

                    <a href="tel:+885629873" className="ak-topbar-link">
                        <i className="fa-solid fa-phone"></i>
                        <span>+88 562 9873</span>
                    </a>

                    <a href="mailto:info@aakivo.com" className="ak-topbar-link">
                        <i className="fa-regular fa-envelope"></i>
                        <span>info@aakivo.com</span>
                    </a>

                </div>

                {/* Social Media */}
                <div className="ak-topbar-right">

                    <span className="ak-follow-text">Follow Us:</span>

                    <a href="#" className="ak-social facebook" aria-label="Facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#" className="ak-social linkedin" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a href="#" className="ak-social twitter" aria-label="X">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>

                    <a href="#" className="ak-social google" aria-label="Google Plus">
                        <i className="fa-brands fa-google-plus-g"></i>
                    </a>

                </div>

            </div>

        </div>
        <header className="ak-header">

            <nav className="ak-navbar container">

                {/* Logo */}
                <a href="/" className="ak-logo">
                    <img
                        src={logo}
                        alt="Aakivo"
                    />
                </a>

                {/* Mobile Menu */}
                <input
                    type="checkbox"
                    id="ak-menu-toggle"
                    className="ak-menu-toggle"
                />

                <label
                    htmlFor="ak-menu-toggle"
                    className="ak-menu-icon"
                >
                    <i className="fa-solid fa-bars"></i>
                </label>

                {/* Navigation */}
                <div className="ak-nav-content">

                    <ul className="ak-nav-links">

                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/discover">Discover</a></li>
                        <li>
                            <a href="/categories">
                                Categories <i className="fa-solid fa-chevron-down"></i>
                            </a>
                        </li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>

                    </ul>

                    {/* Actions */}
                    <div className="ak-nav-actions">

                        <a href="/login" className="btn btn-outline">
                            Log In
                        </a>

                        <div className="gradient-btn">
                            <a href="/register">
                                Get Started <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

                    </div>

                </div>

            </nav>

        </header>
        </>
    );
}

export default NavBar;
