import CreatorCard from "./CreatorCard.jsx"
function InfluencerDirectory() {
    return (
        <section className="influencer-directory-section section">

            <div className="influencer-directory-container container">

                {/* SECTION HEADER */}
                <div className="influencer-directory-header">

                    <div className="influencer-directory-heading">

                        <span className="section-subtitle">
                            Find The Best Influencers
                        </span>

                        <h2>
                            Influencer Marketing Made Easy
                        </h2>

                    </div>


                    {/* SEARCH BAR */}
                    <form className="influencer-search-form">
                        <div class="ak-hero-search">
                            <div class="ak-search-input">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input placeholder="Search creators, categories or locations..." type="text" />
                            </div>
                            <div class="gradient-btn">
                                <a href="/discover">Search Creators<i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </form>



                </div>


                {/* INFLUENCERS GRID */}
                <div className="influencer-directory-grid">

                    {/* INFLUENCER CARD MAPPING HERE */}
                    <CreatorCard />

                </div>

            </div>

        </section>
    );
}

export default InfluencerDirectory;