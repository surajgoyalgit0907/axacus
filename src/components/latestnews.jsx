import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import BlogCard from './blogCard';
import BlogCardData from './blogCardData';

const Latestnews = () => {
    return (
        <>
            <Box component={'section'} className='latestNewSec'>
                <Container maxWidth='xxl'>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 6 }} sx={{ mx: 'auto', mb: '50px' }}>
                            <Box className="secHead">
                                <Typography variant='h6'>Latest News</Typography>
                                <Typography variant='h2'>Our News And Insights</Typography>
                                <Typography>Our results solution combines implementation support, capability building and state-of-the-art diagnostic and analytic tools sally change.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>

                        {
                            BlogCardData.map((item, ind) => {
                                return (
                                    <>
                                        <BlogCard
                                            imgsrc={item.imgsrc}
                                            cardtitle={item.cardtitle}
                                            btnname={item.btnname}
                                            visit={item.visit}
                                        />
                                    </>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Latestnews;
