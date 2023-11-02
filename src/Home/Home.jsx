import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import './Home.css'
import Services from '../Services/Services';

function Home() {
    return (
        <>
            <section id="hero" className="d-flex justify-cntent-center align-items-center">
                <div id="heroCarousel" className="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

                    <div className="carousel-item active">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Celebrate with Greenery</h2>
                            <p className="animate__animated animate__fadeInUp"> "Add a touch of nature to your special moments. Our carefully selected plants are the perfect companions for your celebrations. Choose from a variety of green wonders and make every occasion special."</p>
                            <a href="" className="btn-get-started animate__animated animate__fadeInUp">Start Planting</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Eco-Friendly Celebrations</h2>
                            <p className="animate__animated animate__fadeInUp">"Join the movement towards sustainable celebrations. Embrace eco-conscious party planning with our green solutions. Reduce waste, lower your carbon footprint, and make a positive impact on the environment."</p>
                            <a href="" className="btn-get-started animate__animated animate__fadeInUp">Start Planting</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Plant Care Made Easy</h2>
                            <p className="animate__animated animate__fadeInUp"> "Keep your plants healthy and thriving with our user-friendly plant care app. Receive watering reminders, expert tips, and personalized care instructions. Ensure your green companions grow as your memories do."</p>
                            <a href="" className="btn-get-started animate__animated animate__fadeInUp">Start Planting</a>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>
            </section>
            <main id="main">
                <Services />    
            </main>
        </>

    );

}

export default Home;