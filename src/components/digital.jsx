import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { FaPlay } from "react-icons/fa";


const Digital = () => {
    return (
        <>
            <Box component={'section'} className='digitalSec'>
                <Container maxWidth="xxl" >
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                            <Box className="digitalContent">
                                <Typography variant='h6'>More Than 50,000 Happy Client</Typography>
                                <Typography variant='h2'>We Provide Best Digital Marketing Solutions <br /> Enjoy Full-Service Digital Expertise</Typography>
                                <Box className="watchBox" sx={{ mt: { sm: '20px', md: '30px', lg: '35px' }, display: 'flex', alignItems: 'center' }}>
                                    <Box className="playIconBox">
                                        <FaPlay className='playIcon' />
                                    </Box>
                                    <Typography component={"span"} sx={{ ml: '15px' }}>Watch Video</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Digital
