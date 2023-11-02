import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import './Portfolio.css'
import FsLightbox from 'fslightbox-react';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

function Portfolio() {

    const images = [
        {
          src: 'assets/img/portfolio/portfolio-1.jpg',
          title: 'Image 1',
          category: 'Indoor',
          description: 'Description for Image 1',
        },
        {
          src: 'assets/img/portfolio/portfolio-2.jpg',
          title: 'Image 2',
          category: 'Outdoor',
          description: 'Description for Image 1',

        },
        {
          src: 'assets/img/portfolio/portfolio-3.jpg',
          title: 'Image 3',
          category: 'Indoor',
          description: 'Description for Image 1',

        }
        // Add more image objects with src, title, and category as needed
      ];

    const [toggler, setToggler] = useState(false);
    const [productIndex, setProductIndex] = useState(0);
    const [currentCategory, setCurrentCategory] = useState('All'); // Initial category filter

    const filterImages = (category) => {
        setCurrentCategory(category);
    };

    const filteredImages = currentCategory === 'All'
    ? images
    : images.filter((image) => image.category === currentCategory);
    console.log(filteredImages );

    return (
        <main id="main">

            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Our Portfolio</h2>
                        <ol>
                            <li><a href="/Home">Home</a></li>
                            <li>Our Portfolio</li>
                        </ol>
                    </div>

                </div>
            </section>
            <section className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul id="portfolio-flters">
                                <li onClick={() => filterImages('All')} className="filter-active">All</li>
                                <li onClick={() => filterImages('Indoor')}>Indoor</li>
                                <li onClick={() => filterImages('Outdoor')}>Outdoor</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                    {filteredImages.map((image, index) => (

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-app" >
                            <div className="portfolio-item">
                                
                                <img src={image.src} alt={`Image ${index + 1}`} class="img-fluid" />
                                <div className="portfolio-info">
                                    <h3>{image.title}</h3>
                                    <div>
                                        <a className="portfolio-lightbox" key={index} onClick={() => setToggler(!toggler)} >
                                            <i className="bx bx-plus" onClick={() => setProductIndex(index)} ></i>
                                        </a>
                                        <a href="" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        </div>
                        <FsLightbox toggler={toggler} 
                            sources={filteredImages.map((image) => image.src)}  
                            sourceIndex={productIndex} 
                            types={['image']}
                            descriptions={filteredImages.map((image) => image.title)}
                            customSources={images.map((image) => (
                                <div className="custom-lightbox-source">
                                  <img src={image.src} alt={image.title} />
                                  <div className="custom-description-overlay">
                                    {image.description}
                                  </div>
                                </div>
                              ))}
                        />
                    </div>
            </section>
        </main>
    );
}

export default Portfolio;