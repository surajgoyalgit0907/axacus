import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import TestimonialSlider from './testimonialSlider'

const Testimonial = () => {
    return (
        <>
            <Box component={'section'} className='testimonialSec'>
                <Container maxWidth='xxl'>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 6 }} sx={{ mx: 'auto', mb: '20px' }}>
                            <Box className='secHead'>
                                <Typography variant='h6'>TESTIMONIALS</Typography>
                                <Typography variant='h2'>What Our Clients Say?</Typography>
                                <Typography >We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <TestimonialSlider />
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Testimonial
