import React from "react";
import { useState } from "react";
import pricingBg from "../assets/images/pricingBanner.png"
import growBusiness from "../assets/images/growBusiness.png"
import BreadcrumbBanner from "../components/layout/BreadcrumbBanner.jsx";
import AboutSection from "../components/layout/AboutSection.jsx";
import TrustedPartners from "../components/layout/TrustedPartners.jsx";
import Services from "../components/layout/ServiceSection.jsx";

function AboutPage() {
    return (
        <main className="aboutPage">
            <BreadcrumbBanner
                title="About"
                backgroundImage=''
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "About" },
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
                                Increase Your Business  </span>

                            {/* Main Heading */}
                            <h2 className="section-heading">
                                Boost Your Reach With
                                <br />
                                the <span>Power of Influencers</span>
                            </h2>

                            {/* Description */}
                            <p>
                                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihilmei. 
                                Mei an pericula euripidis, hinc partem ei est. Eos ei nisl aecis,consequat an. 
                                Eius lorem tincidunt vix at,vel pertinax aecis.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>

                            {/* Global Gradient Button */}
                            <div className="gradient-btn">
                                <a href="/contact">
                                    Contact Me
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <AboutSection />
            <TrustedPartners />
            <Services />
        </main>
    );
}
export default AboutPage;