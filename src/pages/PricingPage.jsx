import React from "react";
import { useState } from "react";
import pricingBg from "../assets/images/pricingBanner.png"
import growBusiness from "../assets/images/growBusiness.png"
import BreadcrumbBanner from "../components/layout/BreadcrumbBanner.jsx";
import SocialStats from "../components/layout/SocailStats.jsx";


function CreatorProfile() {

     const [activePlan, setActivePlan] = useState("basic");

    const plans = {
        basic: {
            name: "Basic Plan",
            price: "₹999",
            description:
                "Perfect for small brands looking to collaborate with credible creators and start their influencer journey.",
            features: [
                "Access to 1,000+ Creators",
                "Basic Campaign Management",
                "Standard Analytics",
                "Email Support"
            ]
        },

        ultra: {
            name: "Ultra Plan",
            price: "₹2,499",
            description:
                "Ideal for growing businesses looking to expand their reach and manage multiple influencer campaigns.",
            features: [
                "Access to 5,000+ Creators",
                "Advanced Campaign Management",
                "Detailed Performance Analytics",
                "Priority Email Support"
            ]
        },

        pro: {
            name: "Pro Plan",
            price: "₹4,999",
            description:
                "Designed for established brands looking for premium creator partnerships and advanced campaign solutions.",
            features: [
                "Unlimited Creator Discovery",
                "Premium Campaign Management",
                "Advanced Analytics & Reports",
                "Dedicated Account Support"
            ]
        }
    };

    const selectedPlan = plans[activePlan];

    return (
        <main className="pricingPage">
            <BreadcrumbBanner
                title="Pricing"
                backgroundImage={pricingBg}
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Pricing" },
                ]}
            />

            <section className="pricing-intro-section section">
                <div className="container">

                    <div className="pricing-intro-wrapper">

                        {/* Left Image */}
                        <div className="pricing-intro-image">
                            <img
                                src={growBusiness}
                                alt="Ananya working on her laptop"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="pricing-intro-content">

                            {/* Subtitle */}
                            <span className="section-subtitle pricing-intro-label">
                                Grow Your Business  </span>

                            {/* Main Heading */}
                            <h2 className="section-heading">
                                Boost Your Reach With
                                <br />
                                the <span>Power of Influencers</span>
                            </h2>

                            {/* Description */}
                            <p>
                                Collaborate with top creators, reach your ideal
                                audience, and grow your brand with Aakivo's
                                influencer marketing solutions.
                            </p>

                            {/* Global Gradient Button */}
                            <div className="gradient-btn">
                                <a href="/contact">
                                    Get Started
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section className="pricing-plan-section section">
                <div className="container">

                    <div className="pricing-plan-wrapper">

                        {/* Plan Tabs */}
                        <div className="pricing-plan-tabs">

                            <button
                                className={`pricing-plan-tab ${activePlan === "basic" ? "active" : ""
                                    }`}
                                onClick={() => setActivePlan("basic")}
                            >
                                <span className="pricing-plan-tab-icon">
                                    <i className="fas fa-user-friends"></i>
                                </span>
                                <span>Basic Plan</span>
                            </button>

                            <button
                                className={`pricing-plan-tab ${activePlan === "ultra" ? "active" : ""
                                    }`}
                                onClick={() => setActivePlan("ultra")}
                            >
                                <span className="pricing-plan-tab-icon">
                                    <i className="fas fa-crown"></i>
                                </span>
                                <span>Ultra Plan</span>
                            </button>

                            <button
                                className={`pricing-plan-tab ${activePlan === "pro" ? "active" : ""
                                    }`}
                                onClick={() => setActivePlan("pro")}
                            >
                                <span className="pricing-plan-tab-icon">
                                    <i className="fas fa-gem"></i>
                                </span>
                                <span>Pro Plan</span>
                            </button>

                        </div>

                        {/* Plan Content */}
                        <div className="pricing-plan-content">

                            {/* Left Content */}
                            <div className="pricing-plan-details">

                                <h2 className="section-heading">
                                    {selectedPlan.name}
                                </h2>

                                <div className="pricing-plan-price">
                                    <strong>{selectedPlan.price}</strong>
                                    <span>/month</span>
                                </div>

                                <div className="pricing-plan-actions">

                                    <div className="gradient-btn">
                                        <a href="/contact">
                                            Choose Plan
                                            <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>

                                    <a
                                        href="/pricing-details"
                                        className="pricing-plan-discover"
                                    >
                                        Discover More
                                        <i className="fas fa-chevron-right"></i>
                                    </a>

                                </div>

                            </div>

                            {/* Right Content */}
                            <div className="pricing-plan-features">

                                <p>
                                    {selectedPlan.description}
                                </p>

                                <ul>
                                    {selectedPlan.features.map((feature, index) => (
                                        <li key={index}>
                                            <i className="fas fa-check"></i>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <SocialStats showHeading={true}/>

        </main>
    );
}

export default CreatorProfile;
