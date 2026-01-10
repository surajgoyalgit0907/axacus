import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './testimonialCard';
import TestimonialCardData from './tesimonialCardData';

const TestimonialSlider = () => {
    return (
        <>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 10 }} sx={{ mx: 'auto' }}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        // delay: 5000,
                        // disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // navigation={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        540: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {/* <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}

                    {
                        TestimonialCardData.map((item, ind) => {
                            return (
                                <>
                                    <SwiperSlide>
                                        <TestimonialCard
                                            imgsrc={item.imgsrc}
                                            clientName={item.clientName}
                                            clientDegignation={item.clientDegignation}
                                            textPara={item.textPara}
                                        />
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }

                </Swiper>
            </Grid>
        </>
    )
}

export default TestimonialSlider;
