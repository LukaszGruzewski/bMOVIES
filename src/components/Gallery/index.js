import React, {Component} from 'react';
import './style.css';
import data from './data'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none", color: "black"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none", color: "black"}}
            onClick={onClick}
        />
    );
}

export default class Gallery extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            initialSlide: 0,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 0,
            responsive: [
                {
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,

                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,

                    }
                },

                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                }
            ],
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>
        };
        return (
            <section id='Gallery'>
                <div style={{ padding: '20px'}}>
                        <Slider {...settings}>
                            {data.properties.map((movie, index) => {
                                return <div key={index} id={`poster-${index}`} className="poster">
                                    <div style={{
                                        backgroundImage: `url(${movie.Poster})`
                                    }}></div>
                                </div>
                            })}
                        </Slider>
                    </div>
            </section>
        );
    }
}
