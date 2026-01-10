import React from 'react';
import '../components/componentCss/footer.css';
import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import { MainButton1, MainButton2, MainButton3, MainButton4 } from '../styledComponent';
import { Link } from 'react-router-dom';
import { MdDoubleArrow } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import footerLogo from '../assets/images/footerLogo.svg';
import f_postImg1 from '../assets/images/f_postImg1.jpg';
import f_postImg2 from '../assets/images/f_postImg2.jpg';

const Footer = () => {
    return (
        <>
            <footer>
                <Container maxWidth='xxl'>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                            <Box className='subscribeBox'>
                                <Grid container spacing={5}>
                                    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }} sx={{ pr: { xs: '0px', sm: '30px', md: '50px' } }}>
                                        <Box className='subscribeLeftBox'>
                                            <Typography variant='h3'>Subscribe To Our Newsletter</Typography>
                                            <Box className='subscribeForm'>
                                                <TextField variant='filled' label="Enter Your Email Address" />
                                                <MainButton3 sx={{ mt: { xs: '20px', sm: '20px', md: '0px' } }}>Subscribe Now!</MainButton3>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                                        <Box className='subscribeRightBox'>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography variant='h2'>20% </Typography>
                                                <Box className='offText'>OFF!</Box>
                                            </Box>
                                            <Box className='' sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, mt: '20px' }}>
                                                <Box>
                                                    <Typography variant='h3'>Lead Consulting Agency Global Reputation</Typography>
                                                </Box>
                                                <Box>
                                                    <MainButton4 sx={{ ml: { sm: '0px', md: '20px', lg: '30px' }, mt: { xs: '20px', sm: '20px', md: '0px' } }}>Get Started</MainButton4>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }} sx={{ mb: { sm: '30px', md: '30px', lg: '0px' } }}>
                            <Box className="f-Block">
                                <Typography variant='h4'>About Us</Typography>
                                <Typography>Axacus Consultancy is a one-stop shop offering accounting, financial and advisory services. Beneficial experienced finance professionals.</Typography>
                                <Typography variant='h5'>Emergency 24/7</Typography>
                                <Typography variant='span'>+123-456-7890</Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
                            <Box className="f-links">
                                <Typography variant='h4'>Quick Links</Typography>
                                <ul>
                                    <li><Link to={''}><MdDoubleArrow />Make Appointment </Link></li>
                                    <li><Link to={''}><MdDoubleArrow />Customer Services </Link></li>
                                    <li><Link to={''}><MdDoubleArrow />Department </Link></li>
                                    <li><Link to={''}><MdDoubleArrow />About Company </Link></li>
                                    <li><Link to={''}><MdDoubleArrow /> Our Case Studies</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
                            <Box className="f-postBox">
                                <Typography variant='h4'>Recent Posts</Typography>
                                <Box className='postInner'>
                                    <Box component={'img'} src={f_postImg1} />
                                    <Box className='postContent'>
                                        <Typography variant='h5'>5 Effective Ways to Hire More Workers</Typography>
                                        <Typography variant='span'>Nov 5, 2020</Typography>
                                    </Box>
                                </Box>
                                <Box className='postInner'>
                                    <Box component={'img'} src={f_postImg2} />
                                    <Box className='postContent'>
                                        <Typography variant='h5'>5 Does My Business Need a Director of Training?</Typography>
                                        <Typography variant='span'>Nov 5, 2020</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
                            <Box className="f-tweetsBox">
                                <Typography variant='h4'>Latest Tweets</Typography>
                                <Box className='tweetsInner'>
                                    <FaTwitter />
                                    <Box sx={{ ml: '20px' }}>
                                        <Typography> theme WooCommerece! Get a huge amount of customers for selling any kind of auto parts, auto equipment acc… </Typography>
                                        <Typography variant='h6'>February 12, 2021 12:33 pm</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                            <Box className='copyright'>
                                <Typography>Copyright © 2021 Axacus. All rights reserved.</Typography>
                                <Box className='footerLogoBox'>
                                    <Box component={'img'} src={footerLogo} className='footerLogo' />
                                </Box>
                                <Box className='f-socialBox'>
                                    <ul>
                                        <li>
                                            <Link to={''}><FaFacebookF /></Link>
                                        </li>
                                        <li>
                                            <Link to={''}><FaLinkedinIn /></Link>
                                        </li>
                                        <li>
                                            <Link to={''}><FiDribbble /></Link>
                                        </li>
                                        <li>
                                            <Link to={''}><FaTwitter /></Link>
                                        </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </>
    )
}

export default Footer
