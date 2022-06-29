import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import { sliderItems } from "../data/data";

export default function Slider() {
    return (
        <div className="slide-container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sliderItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="slide-wrapper">
                            <div className="slide-slide">
                                <div className="slide-imgContainer">
                                    <img
                                        className="slide-img"
                                        src={item.img}
                                        alt=""
                                    />
                                </div>
                                <div className="slide-infoContainer">
                                    <h1 className="slide-title">
                                        {item.title}
                                    </h1>
                                    <p className="slide-desc">{item.desc}</p>
                                    <button className="slide-button ">
                                        Shop now!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
