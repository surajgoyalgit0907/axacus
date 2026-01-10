import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';

import CountUp from 'react-countup';
import countIcon1 from '../assets/icons/countIcon1.png';
import countIcon2 from '../assets/icons/countIcon2.png';
import countIcon3 from '../assets/icons/countIcon3.png';

const Counter = () => {
    return (
        <>
            <Box component={'section'} className='counterSec'>
                <Container maxWidth='xxl'>
                    <Grid container spacing={2}>
                        <Grid size={{ md: 12, lg: 10 }} sx={{ mx: 'auto', mt: '70px' }}>
                            <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }} >
                                    <Box className='countDiv'>
                                        <Box className="overflowBox">
                                            <Box component={'img'} src={countIcon1} className='countIcon' />
                                        </Box>
                                        <Box className='countBlock'>
                                            <Typography variant='span'>Projects</Typography>
                                            <Box className="countSmallDiv">
                                                <CountUp duration={5} end={26} />
                                                <Typography>K</Typography>
                                            </Box>
                                            <Typography>Successful Projects</Typography>
                                            <Typography variant='h6'>Get a Project</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                                    <Box className='countDiv'>
                                        <Box className="overflowBox">
                                            <Box component={'img'} src={countIcon2} className='countIcon' />
                                        </Box>
                                        <Box className='countBlock'>
                                            <Typography variant='span'>Our Team</Typography>
                                            <Box className="countSmallDiv">
                                                <CountUp duration={5} end={143} />
                                                <Typography>+</Typography>
                                            </Box>
                                            <Typography>Experienced Staff</Typography>
                                            <Typography variant='h6'>Team Members</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }} >
                                    <Box className='countDiv'>
                                        <Box className="overflowBox">
                                            <Box component={'img'} src={countIcon3} className='countIcon' />
                                        </Box>
                                        <Box className='countBlock'>
                                            <Typography variant='span'>Happy Clients</Typography>
                                            <Box className='countSmallDiv'>
                                                <CountUp duration={5} end={99} />
                                                <Typography>%</Typography>
                                            </Box>
                                            <Typography>Client Satisfaction</Typography>
                                            <Typography variant='h6'>Testimonials</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </>
    )
}

export default Counter;
