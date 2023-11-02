import React from "react";
import { Container } from "react-bootstrap";
import './About.css'
function About() {
    return (
        <main id="main">
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>About Us</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>About Us</li>
                        </ol>
                    </div>

                </div>
            </section>

            <section className="about" data-aos="fade-up">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <h3>Turn Every Occasion into a Green Occasion.</h3>
                            <p className="fst-italic">
                                At Green Occasion, we believe that every celebration can make a positive impact on the environment. We are on a mission to promote eco-friendly celebrations by encouraging you to embrace the beauty of nature in your special moments.
                            </p>
                            <ul>
                                <li><i className="bi bi-check2-circle"></i> Eco-Conscious Celebrations.</li>
                                <li><i className="bi bi-check2-circle"></i> Passion for Sustainability.</li>
                                <li><i className="bi bi-check2-circle"></i> Convenient Plant Delivery.</li>
                                <li><i className="bi bi-check2-circle"></i> Occasion-Specific Plants.</li>
                                <li><i className="bi bi-check2-circle"></i> Community of Like-Minded Individuals .</li>
                                <li><i className="bi bi-check2-circle"></i> 1 Trillion Tree Mission. </li>

                            </ul>
                            <p>
                                Founded with a deep passion for sustainability and a love for greenery, Green Occasion is your partner in creating meaningful and eco-conscious celebrations
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="facts section-bg" data-aos="fade-up">
                <div className="container">

                    <div className="row counters">

                        <div className="col-lg-6 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Plants Planted</p>
                        </div>

                        <div className="col-lg-6 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Hours Spent</p>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}

export default About;