import { Link } from "react-router-dom";

const BreadcrumbBanner = ({
    title,
    breadcrumbs = [],
    backgroundImage,
}) => {
    return (
        <section
            className="breadcrumb-banner"
            style={{
                backgroundImage: `linear-gradient(
                    rgba(11, 5, 33, 0.30),
                    rgba(11, 5, 33, 0.30)
                ), url(${backgroundImage})`,
            }}
        >
            <div className="container breadcrumb-banner-container">

                <div className="breadcrumb-banner-content">

                    <h1 className="breadcrumb-banner-title">
                        {title}
                    </h1>

                    <nav
                        className="breadcrumb-navigation"
                        aria-label="Breadcrumb"
                    >
                        {breadcrumbs.map((item, index) => (
                            <span
                                className="breadcrumb-item"
                                key={`${item.label}-${index}`}
                            >
                                {index === 0 && (
                                    <span className="breadcrumb-home-icon">
                                        <i class="fa-regular fa-house"></i>
                                    </span>
                                )}

                                {item.path ? (
                                    <Link to={item.path}>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="breadcrumb-current">
                                        {item.label}
                                    </span>
                                )}

                                {index !== breadcrumbs.length - 1 && (
                                    <span className="breadcrumb-separator">
                                        /
                                    </span>
                                )}
                            </span>
                        ))}
                    </nav>

                </div>

            </div>
        </section>
    );
};

export default BreadcrumbBanner;
