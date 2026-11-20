import BlogImg1 from "../../assets/images/blog1.webp";
import BlogImg2 from "../../assets/images/blog2.webp";
import BlogImg3 from "../../assets/images/blog3.webp";

function BlogSection() {

    const articles = [
        {
            image: BlogImg1,
            date: "April 4, 2026",
            title: "How to Successfully Negotiate with Influencers",
            category: "Lifestyle, Travel",
            readTime: "2 min read",
            link: "/blog/negotiate-with-influencers"
        },
        {
            image: BlogImg2,
            date: "March 24, 2026",
            title: "How Influencers Really Make Money Online",
            category: "Lifestyle, Travel",
            readTime: "2 min read",
            link: "/blog/influencers-make-money"
        },
        {
            image: BlogImg3,
            date: "March 23, 2026",
            title: "Day in the Life of a Social Media Influencer",
            category: "Lifestyle, Travel",
            readTime: "2 min read",
            link: "/blog/social-media-influencer"
        }
    ];

    return (
        <section className="blog-section section">
            <div className="blog-container container">

                {/* Section Heading */}
                <div className="section-heading blog-heading">

                    <span className="section-subtitle">
                        FROM THE BLOG
                    </span>

                    <h2>
                        Latest Articles & <span>News</span>
                    </h2>

                </div>

                {/* Blog Cards */}
                <div className="blog-grid">

                    {articles.map((article, index) => (

                        <article className="blog-card" key={index}>

                            {/* Article Image */}
                            <a
                                href={article.link}
                                className="blog-image"
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                />
                            </a>

                            {/* Article Content */}
                            <div className="blog-content">

                                {/* Date */}
                                <div className="blog-date">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="23"
                                        height="23"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="3"
                                            y="4"
                                            width="18"
                                            height="17"
                                            rx="2"
                                        />
                                        <path d="M16 2v4M8 2v4M3 10h18" />
                                        <path d="m9 16 2 2 4-4" />
                                    </svg>

                                    <span>{article.date}</span>

                                    <span className="blog-date-line"></span>

                                </div>

                                {/* Title */}
                                <h3>
                                    <a href={article.link}>
                                        {article.title}
                                    </a>
                                </h3>

                                {/* Meta Information */}
                                <div className="blog-meta">
                                    <span>{article.category}</span>
                                    <span className="blog-meta-separator">-</span>
                                    <span>{article.readTime}</span>
                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default BlogSection;