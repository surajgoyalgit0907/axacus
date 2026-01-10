import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { HiOutlineLightBulb } from "react-icons/hi";
import { LiaUsersCogSolid } from "react-icons/lia";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import reasonImg from '../assets/images/reasonImg.jpg'


const Strategy = () => {
    return (
        <>
            <Box component={"section"} className='strategySec'>
                <Container maxWidth={'xxl'}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 6 }} sx={{ mx: 'auto', mb: '50px' }}>
                            <Box className="secHead">
                                <Typography variant='h6'>OUR STRATEGY</Typography>
                                <Typography variant='h2'>We Make Best Consulting</Typography>
                                <Typography> The challenges it presents may seem daunting, but we help you approach change with confidence, adapt with purpose and embrace.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} >
                            <Box className='stratesyBox'>
                                {/* <Box component={'img'} /> */}
                                <HiOutlineLightBulb />
                                <Typography variant='h5'>Hi- Tech</Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                            <Box className='stratesyBox'>
                                {/* <Box component={'img'} /> */}
                                <LiaUsersCogSolid />
                                <Typography variant='h5'>Media</Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                            <Box className='stratesyBox active'>
                                {/* <Box component={'img'} /> */}
                                <FaPeopleGroup />
                                <Typography variant='h5'>Industrial</Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                            <Box className='stratesyBox'>
                                {/* <Box component={'img'} /> */}
                                <GiPublicSpeaker />
                                <Typography variant='h5'>Banking</Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                            <Box className='stratesyBox'>
                                {/* <Box component={'img'} /> */}
                                <MdOutlineMedicalServices />
                                <Typography variant='h5'>Medical</Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                            <Box className='stratesyBox'>
                                {/* <Box component={'img'} /> */}
                                <BsGraphUpArrow />
                                <Typography variant='h5'>Automotive</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Box className="reasonBox" sx={{ mt: '50px' }}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                                    <Grid container spacing={{ md: 2, lg: 10 }}>
                                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                            <Box className="reasonLeftBox">
                                                <Typography variant='h3' >Reason to Reject following Drawbacks</Typography>
                                                <Typography sx={{ mb: '20px', mt: '20px' }}>To obtain higher performance, our leaders first identify the critical obstacles to forward to overcome loss. We define our company's mission & Prioritize company objetives imageSometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too.</Typography>
                                                <ul>
                                                    <li><FaArrowRight /> <Typography component={'span'}>Running out of money can be a good sign</Typography></li>
                                                    <li><FaArrowRight /> <Typography component={'span'}>Clients are always right, except when they are wrong</Typography></li>
                                                    <li><FaArrowRight /> <Typography component={'span'}>You’re worth every penny, so show it</Typography></li>
                                                </ul>
                                            </Box>

                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                            <Box className="reasonRightBox">
                                                <Box component={'img'} src={reasonImg} className='reasonImg' />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid >
                </Container >
            </Box >
        </>
    )
}

export default Strategy
