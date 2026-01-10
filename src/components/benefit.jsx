import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import benefitLeftImg from '../assets/images/benefitLeftImg.jpg';
import { LuNotebookPen } from "react-icons/lu";
import { PiUserCircleGearLight } from "react-icons/pi";
import { TiLightbulb } from "react-icons/ti";
import { MdAutoGraph } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";


const Benefit = () => {
    return (
        <>
            <Box component={"section"} className='benefitSec'>
                {/* <Container maxWidth='xxl' disableGutters sx={{ px: '0px' }}> */}
                {/* <Container maxWidth='sm' disableGutters sx={{ px: '0px' }}> */}
                {/* <Container disableGutters sx={{ px: '0px' }}> */}
                <Container maxWidth={false} disableGutters sx={{ px: '0px' }}>
                    {/* <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ mx: 'auto', mb: '50px' }}>

                        </Grid>
                    </Grid> */}
                    <Grid container spacing={0}>
                        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
                            <Box className="benefitLeft">
                                <Box component={"img"} src={benefitLeftImg} className='benefitLeftImg' />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8 }}>
                            <Box className="benefitRight">
                                <Box className="secHead" sx={{ mb: '50px' }}>
                                    <Typography variant='h6'>Our Benefits</Typography>
                                    <Typography variant='h2'>Collaborate With Your Company</Typography>
                                    <Typography>We’ve designed a culture that allows our stewards to assimilate with our clients and bring the best of who we are to your business.</Typography>
                                </Box>
                                <Box className="benefitDetail" sx={{ mt: '70px' }}>
                                    <Box className="benefitBox" sx={{ mt: '50px', mb: '70px' }}>
                                        <Box className="benefitIconBox"><LuNotebookPen /></Box>
                                        <Box className="benefitText">
                                            <Typography variant='h4'>Supply Chain and Operations</Typography>
                                            <Typography>We help organizations reimagine & transform supply chains for tomorrow with positive impact on the business.</Typography>
                                        </Box>
                                    </Box>
                                    <Box className="benefitBox" sx={{ mt: '20px', mb: '70px' }}>
                                        <Box className="benefitIconBox"><PiUserCircleGearLight /></Box>
                                        <Box className="benefitText">
                                            <Typography variant='h4'>Business Process Outsourcing</Typography>
                                            <Typography>Today’s digitally disrupted market, where traditional revenue sources are becoming more sustainable growth.</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="qualityContent">
                                    <Box className="qualityBox">
                                        <TiLightbulb />
                                        <Typography variant='h3'>High Quality</Typography>
                                    </Box>
                                    <Box className="qualityBox active">
                                        <MdAutoGraph />
                                        <Typography variant='h3'>Innovations</Typography>
                                    </Box>
                                    <Box className="qualityBox">
                                        <RiGroupLine />
                                        <Typography variant='h3'>Comfortable</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Benefit;
