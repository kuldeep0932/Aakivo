import JoinCreator from "../../assets/images/joinCreator.png"
import JoinBrand from "../../assets/images/JoinBrand.png"
function JoinSection() {
    return (

        <section className="join-section section">
            <div className="join-container container">

                {/* Join as an Influencer */}
                <div className="join-card join-creator">

                    <div className="join-content">
                        <h3>Join as an Influencer</h3>

                        <p>
                            Showcase your talent, grow your audience
                            <br />
                            and get brand collaborations.
                        </p>

                        <a href="/register/creator" className="btn btn-outline">
                            Create Creator Account
                            <span>→</span>
                        </a>
                    </div>

                    <div className="join-image creator-image">
                        <img
                            src={JoinCreator}
                            alt="Join Aakivo as an influencer"
                        />
                    </div>

                    <span className="join-sparkle sparkle-one">✦</span>
                    <span className="join-sparkle sparkle-two">✧</span>
                </div>


                {/* Join as a Brand */}
                <div className="join-card join-brand">

                    <div className="join-content">
                        <h3>Join as a Brand</h3>

                        <p>
                            Find the perfect creators for your brand
                            <br />
                            and launch impactful campaigns.
                        </p>

                        <a href="/register/brand" className="btn btn-outline">
                            Create Brand Account
                            <span>→</span>
                        </a>
                    </div>

                    <div className="join-image brand-image">
                        <img
                            src={JoinBrand}
                            alt="Join Aakivo as a brand"
                        />
                    </div>

                    <span className="join-sparkle sparkle-three">✦</span>
                    <span className="join-sparkle sparkle-four">✧</span>
                </div>

            </div>
        </section>

    );
}

export default JoinSection;
