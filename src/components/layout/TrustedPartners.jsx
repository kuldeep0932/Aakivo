function TrustedPartners() {

    const partners = [
        { name: "LVMH", className: "partner-lvmh" },
        { name: "EVERLANE", className: "partner-everlane" },
        { name: "KINFO", className: "partner-kinfo" },
        { name: "Glossier.", className: "partner-glossier" },
        { name: "Aēsop.", className: "partner-aesop" }
    ];

    return (
        <section className="partners-section section">
            <div className="partners-container container">

                {/* Section Heading */}
                <div className="section-heading partners-heading">

                    <span className="section-subtitle">
                        Trusted Partners
                    </span>

                    <h2>
                        We Work with Brands that{" "}
                        <span>Influence</span>
                        <br />
                        <span>100K Clients</span>
                    </h2>

                </div>

                {/* Partners Grid */}
                <div className="partners-grid">

                    {partners.map((partner, index) => (
                        <div
                            className={`partner-card ${partner.className}`}
                            key={index}
                        >
                            <span>{partner.name}</span>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default TrustedPartners;