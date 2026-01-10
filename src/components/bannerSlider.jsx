import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, colors, Container, Grid, Typography } from '@mui/material';

import sliderImg1 from '../assets/images/sliderImg1.jpg';
import sliderImg2 from '../assets/images/sliderImg2.jpg';
import bannerSliderData from './bannerSliderData';
import { FaPlay } from "react-icons/fa";
// import { PrimaryButton } from '../styledComponent';
import { MainButton1, MainButton2, MainButton3, MainButton4 } from '../styledComponent';


const BannerSlider = (props) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Box className="sliderDiv">
                        {/* <Box component={"img"} sx={{ backgroundImage: `url(${sliderImg1})`, width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} /> */}
                        <Box component={"img"} sx={{ backgroundImage: `url(${sliderImg1})`, width: '100%', height: '500px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                        {/* <Box className="slideImgBox">
                            <Box component={"img"} className='sliderImg' />
                        </Box> */}
                        <Container maxWidth='xxl'>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12 }}>
                                    <Box className="slider_content">
                                        <Typography variant='h4' sx={{ mb: '15px' }}>Creating futures.</Typography>
                                        <Typography variant='h1' sx={{ mb: '20px' }}>Business <Typography variant='span'>Without </Typography><br />Boundaries.</Typography>
                                        <Typography>A consultancy agency, see through innovation and dedication</Typography>
                                        <Box sx={{ mt: '35px', display: 'flex', alignItems: { xs: 'start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' } }}>
                                            {/* <PrimaryButton>Read More</PrimaryButton> */}
                                            {/* <MainButton1>dfsfs</MainButton1> */}
                                            <MainButton1>Read More</MainButton1>

                                            <Box className="watchBox" sx={{ ml: { xs: '0px', sm: '35px' }, mt: { xs: '30px', md: '0px' }, display: 'flex', alignItems: 'center', }}>
                                                <Box className="playIconBox">
                                                    <FaPlay className='playIcon' />
                                                </Box>
                                                <Typography component={"span"} sx={{ ml: '15px' }}>Watch Video</Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box className="sliderDiv">
                        {/* <Box component={"img"} sx={{ backgroundImage: `url(${sliderImg1})`, width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} /> */}
                        <Box component={"img"} sx={{ backgroundImage: `url(${sliderImg2})`, width: '100%', height: '500px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                        {/* <Box className="slideImgBox">
                            <Box component={"img"} className='sliderImg' />
                        </Box> */}
                        <Container maxWidth='xxl'>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12 }}>
                                    <Box className="slider_content">
                                        <Typography variant='h4' sx={{ mb: '15px' }}>Brand innovations</Typography>
                                        <Typography variant='h1' sx={{ mb: '20px' }}>The <Typography variant='span'>Possibilities </Typography><br />are Infinite.</Typography>
                                        <Typography>A consultancy agency, see through innovation and dedication</Typography>
                                        <Box sx={{ mt: '35px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <MainButton1>More Detail</MainButton1>
                                            {/* <MainButton2 sx={{ lg: { ml: '15px' }, lg: { mt: '0px' }, mt: '10px' }}>Appointment</MainButton2> */}
                                            <MainButton2 sx={{ ml: { lg: '15px', md: '15px', xs: '0px' }, mt: { lg: '0px', md: '0px', xs: '10px' } }}>Appointment</MainButton2>
                                            {/* <MainButton3>fsffsf</MainButton3> */}
                                            {/* <MainButton4>sfsfsfsf</MainButton4> */}
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </SwiperSlide>





                {/* {
                    bannerSliderData.map((item, ind) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <Box className="sliderDiv">
                                        <Box component={"img"} src={item.imgsrc} />
                                        <Box className="slider_content">
                                            <Typography variant='h4'>{item.heading1}</Typography>
                                            <Typography variant='h1'> {item.heading2}<Typography variant='span'>{item.heading2Span}</Typography></Typography>

                                            <Typography variant="h1" sx={{ mb: 2 }}>
                                                {item.heading2}{" "}
                                                {item.heading2Span && (
                                                    <Box component="span" sx={{ color: "primary.main" }}>
                                                        {item.heading2Span}
                                                    </Box>
                                                )}
                                            </Typography>
                                            <Typography>{item.textpara}</Typography>
                                        </Box>
                                        <Box>
                                            gddgfdd
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            </>
                        )
                    })
                } */}


            </Swiper >
        </>
    )
}

export default BannerSlider;
