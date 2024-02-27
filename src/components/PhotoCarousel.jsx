import React from "react";
import firstVideo from "../assets/videos/IMG_3459.mp4";
import video2 from "../assets/videos/IMG_2288.mp4";
import video3 from "../assets/videos/IMG_2359.mp4";
import video4 from "../assets/videos/IMG_2372.mp4";
import video5 from "../assets/videos/IMG_2451.mp4";
import video6 from "../assets/videos/IMG_2477.mp4";
import video7 from "../assets/videos/IMG_2550.mp4";
import video8 from "../assets/videos/video3.mp4";
import video9 from "../assets/videos/video1.mp4";
import video10 from "../assets/videos/video2.mp4";



const importAllImages = (context) => context.keys().map(context);
const images = importAllImages(require.context("../assets/images/carousel/", false, /\.(png|jpe?g|svg)$/));

function PhotoCarousel() {

    return (
        <div class="container-fluid mt-5">
            <div class="row">
                <h2>
                <span class="color-letter">А</span> еще мы собрали яркие моменты из жизни людей с тобой!
                </h2>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <p>
                        Твои друзья и родн<span class="color-letter">ы</span>е совместными усилиями нашли множество фотографий и видео. Я надеюсь, что это позволит тебе порефлексировать в такой знаменательный день, вспомнить яркие моменты из жизни и рассказать мне всевозможные <span class="color-letter">и</span>стории.
                    </p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col"></div>
                <div class="col-8">
                    <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-interval="false">
                        <div className="carousel-inner">
                            {images.map((image, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img src={image} className="d-block carousel-image" alt={`Image ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col"></div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-4">
                    <video controls height="300px">
                        <source src={video2} type="video/mp4"/>
                    </video>
                </div>
                <div class="col"></div>
                <div class="col-sm-2">
                    <video controls height="300px">
                        <source src={video4} type="video/mp4"/>
                    </video>
                </div>
                <div class="col-sm-2">
                    <video controls height="300px">
                        <source src={video6} type="video/mp4"/>
                    </video>
                </div>
                <div class="col-sm-2">
                    <video controls height="300px">
                        <source src={video7} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-2">
                    <video controls height="300px">
                        <source src={video5} type="video/mp4"/>
                    </video>
                </div>
                <div class="col"></div>
                <div class="col-sm-2">
                    <video controls height="300px">
                        <source src={firstVideo} type="video/mp4"/>
                    </video>
                </div>
                <div class="col"></div>
                <div class="col-sm-4">
                    <video controls height="300px">
                        <source src={video3} type="video/mp4"/>
                    </video>
                </div>
                <div class="col"></div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-4">
                    <video controls height="300px">
                        <source src={video8} type="video/mp4"/>
                    </video>
                </div>
                <div class="col"></div>
                <div class="col-sm-2">
                    <video controls height="300px">
                        <source src={video9} type="video/mp4"/>
                    </video>
                </div>
                <div class="col"></div>
                <div class="col-sm-2">
                    <video controls height="300px">
                        <source src={video10} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export {PhotoCarousel}