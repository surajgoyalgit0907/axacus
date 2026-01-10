import React from 'react'
import BannerSlider from './bannerSlider'
import { Box, Container, Grid } from '@mui/material'

const Banner = () => {
    return (
        <>

            <Box component={"section"} className='bannerSec' sx={{p:0}}>
                <Container maxWidth="2xl" disableGutters sx={{ px: '0px' }}>
                    <Grid size={{ xs: 12 }}>
                        <BannerSlider />
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Banner
