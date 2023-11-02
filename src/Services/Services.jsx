import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import './Services.css'
import ServiceDetails from './ServiceDetails';

function Services() {
    const currentPath = window.location.pathname;
    console.log(currentPath);

    return (
        
        <main id="main">

            <section className="services">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="icon-box icon-box-pink">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4 className="title"><a href="">Plant Delivery</a></h4>
                                <p className="description">"We make it easy for you to bring the gift of life to any celebration. Whether it's a birthday, anniversary, or any special event, we deliver beautiful, handpicked plants right to your doorstep."</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-box icon-box-cyan">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4 className="title"><a href="">Plant Care App</a></h4>
                                <p className="description"> "Our user-friendly app guides you through the care and nurturing of your plants. Get watering reminders, expert tips, and ensure your plants thrive and grow as your memories do."</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box icon-box-green">
                                <div className="icon"><i className="bx twemojie-potted-plant"></i></div>
                                <h4 className="title"><a href="">Occasion Planting</a></h4>
                                <p className="description">"We provide a wide variety of plant options suited for different occasions. From vibrant flowering plants for birthdays to elegant succulents for weddings, we've got the perfect green companions for your celebrations."</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box icon-box-blue">
                                <div className="icon"><i className="bx bx-world"></i></div>
                                <h4 className="title"><a href="">Eco-friendly Celebrations</a></h4>
                                <p className="description">"By choosing plants over single-use decor, you contribute to a greener planet. Eco-conscious celebrations are not just a trend; they're a statement of your commitment to the environment."</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <img src="assets/img/mission.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-12 d-flex flex-column justify-content-center p-5">

                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <p className="description">At Green Occasion, we've embarked on an extraordinary journey - a mission to plant 1 trillion trees by the year 2050. Our vision is to create a greener, healthier, and more sustainable world for all. We believe that each of us has a part to play in nurturing our planet, and that's why we're dedicated to making every occasion a green occasion</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {currentPath.includes('services') ? <ServiceDetails /> : null }

        </main>


    );

}

export default Services;