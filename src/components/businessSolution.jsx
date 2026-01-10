import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import BusinessCard from './businessCard';
import BusinessCardData from './businessCardData';

const BusinessSolution = () => {
    return (
        <>
            <Box component={"section"} className='business_solution_sec'>
                <Container maxWidth='xxl'>
                    <Grid container spacing={2}>
                        {/* <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ m: '0px auto' }}> */}
                        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 6 }} sx={{ mx: 'auto', mb: '50px' }}>
                            <Box className="secHead">
                                <Typography variant='h6'>what we offer</Typography>
                                <Typography variant='h2'>Business Shaped Solutions</Typography>
                                <Typography>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        {
                            BusinessCardData.map((item, ind) => {
                                return (
                                    <>
                                        <BusinessCard
                                            imgsrc={item.imgsrc}
                                            cardtitle={item.cardtitle}
                                            cardtext={item.cardtext}
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

export default BusinessSolution;
