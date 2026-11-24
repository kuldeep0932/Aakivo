import "../../FeaturedCreator.css"
import bantaImg from "../../assets/images/banta.jpg"
import priyaImg from "../../assets/images/priya.jpg"
import rohanImg from "../../assets/images/rohan.jpg"
import ananyaImg from "../../assets/images/ananya.png"
function FeaturedCreators() {

    
const creators = [
    {
        name: "Banta Singh",
        category: "Fashion & Lifestyle",
        username: "@bantasingh",
        followers: "125K",
        image: bantaImg,
        verified: true,
        profileUrl: "/creators/aarav-sharma",
        socialLinks: {
            youtube: "https://youtube.com/@aaravcreates",
            instagram: "https://instagram.com/aaravcreates",
            facebook: "https://facebook.com/@aaravcreates"
        }
    },
    {
        name: "Priya Mehta",
        category: "Beauty & Fashion",
        username: "@priyamehta",
        followers: "98K",
        image: priyaImg,
        verified: true,
        profileUrl: "/creators/priya-mehta",
        socialLinks: {
            youtube: "",
            instagram: "https://instagram.com/priyamehta",
            facebook: "https://facebook.com/@priyamehta"
        }
    },
    {
        name: "Rohan Kapoor",
        category: "Travel & Adventure",
        username: "@rohantravels",
        followers: "210K",
        image: rohanImg,
        verified: true,
        profileUrl: "/creators/rohan-kapoor",
        socialLinks: {
            youtube: "https://youtube.com/@rohantravels",
            instagram: "",
            facebook: ""
        }
    },
    {
        name: "Ananya Verma",
        category: "Fitness & Wellness",
        username: "@ananyafit",
        followers: "85K",
        image: ananyaImg,
        verified: true,
        profileUrl: "/creators/ananya-verma",
        socialLinks: {
            youtube: "",
            instagram: "https://instagram.com/ananyafit",
            facebook: ""
        }
    }
];


    return (
        <section className="featured-creators-section section">
            <div className="featured-creators-container container">

                {/* Section Heading */}
                <div className="section-heading">
                    <span className="section-subtitle">
                        MEET OUR CREATORS
                    </span>

                    <h2>
                        Featured <span>Creators</span>
                    </h2>

                    <p>
                        Discover talented creators, explore their content
                        and connect with influencers who can bring your
                        brand vision to life.
                    </p>
                </div>

                {/* Creators Grid */}
                <div className="featured-creators-grid">


                    {creators.map((creator, index) => (
                        <div className="featured-creator-card" key={index}>

                            {/* Creator Image */}
                            <div className="featured-creator-image">
                                <img
                                    src={creator.image}
                                    alt={creator.name}
                                />
                            </div>

                            {/* Creator Information */}
                            <div className="featured-creator-info">

                                {/* Creator Name */}
                                <h4 className="featured-creator-name">
                                    {creator.name}

                                    {creator.verified && (
                                        <span
                                            className="featured-creator-verified"
                                            title="Verified Creator"
                                        >
                                            <i className="fas fa-check"></i>
                                        </span>
                                    )}
                                </h4>

                                {/* Category */}
                                <p className="featured-creator-category">
                                    {creator.category} · {creator.followers} Followers
                                </p>

                                {/* Username */}
                                <span className="featured-creator-username">
                                    {creator.username}
                                </span>

                                {/* Bottom Section */}
                                <div className="featured-creator-bottom">

                                    {/* Followers */}
                                    <div className="featured-creator-followers">
                                        <i className="fas fa-users"></i>
                                        <strong>{creator.followers}</strong>
                                    </div>

                                    {/* Social Media Links */}
                                    <div className="featured-creator-social-links">

                                        {creator.socialLinks?.youtube && (
                                            <a
                                                href={creator.socialLinks.youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${creator.name} YouTube`}
                                            >
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        )}

                                        {creator.socialLinks?.instagram && (
                                            <a
                                                href={creator.socialLinks.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${creator.name} Instagram`}
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        )}

                                        {creator.socialLinks?.facebook && (
                                            <a
                                                href={creator.socialLinks.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${creator.name} facebook`}
                                            >
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        )}

                                    </div>

                                    {/* View Profile */}
                                    <a
                                        href={creator.profileUrl || "/creators"}
                                        className="btn btn-outline"
                                    >
                                        View Profile
                                        <i className="fas fa-arrow-right"></i>
                                    </a>

                                </div>

                            </div>

                        </div>
                    ))}


                </div>

                {/* View All Button */}
                <div className="featured-creators-view-all">
                    <div className="gradient-btn">
                        <a href="/creators">
                            Explore All Creators
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default FeaturedCreators;
