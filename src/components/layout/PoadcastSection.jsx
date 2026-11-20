import applePodcast from "../../assets/images/apple-podcast.png";
import googlePodcast from "../../assets/images/google-podcast.png";
import spotify from "../../assets/images/spotify.png";
import soundcloud from "../../assets/images/soundcloud.png";

function PodcastSection() {
    const platforms = [
        {
            name: "Apple Podcast",
            label: "Listen on",
            className: "apple-podcast",
            image: applePodcast
        },
        {
            name: "Google Podcast",
            label: "Listen on",
            className: "google-podcast",
            image: googlePodcast
        },
        {
            name: "Spotify",
            label: "Listen on",
            className: "spotify",
            image: spotify
        },
        {
            name: "Soundcloud",
            label: "Listen on",
            className: "soundcloud",
            image: soundcloud
        }
    ];

    return (
        <section className="podcast-section section">
            <div className="podcast-container container">

                {/* Section Heading */}
                <div className="section-heading podcast-heading">
                    <span className="section-subtitle">
                        LIKE & SUBSCRIBE
                    </span>

                    <h2>
                        Podcast Available <span>On</span>
                    </h2>
                </div>

                {/* Podcast Platforms */}
                <div className="podcast-platforms">

                    {platforms.map((platform, index) => (
                        <a
                            href="#"
                            className="podcast-platform-card"
                            key={index}
                        >
                            <div className={`podcast-icon ${platform.className}`}>
                                {/* <span>{platform.icon}</span> */}
                                <img
                                    src={platform.image}
                                    alt={`${platform.name} logo`}
                                />
                            </div>

                            <div className="podcast-platform-info">
                                <p>{platform.label}</p>
                                <h4>{platform.name}</h4>
                            </div>
                        </a>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default PodcastSection;