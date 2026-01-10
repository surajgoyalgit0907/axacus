import { Box, Container, Grid } from '@mui/material';
import React from 'react'

const Demo = () => {
    return (
        <>
            {/* <h4>Demo</h4> */}

            <br />
            <br />

            {/* Material breakpoint using with Min width by default  */}

            <Box component={"h4"} sx={{ color: '#ffffff', background: { xs: '#ff0000', sm: '#000fff', md: '#fff000', lg: '#6B3F69', xl: '#0BA6DF', '2xl': '#f600e1' } }}>
                cool
            </Box>

            <br />
            <br />



            {/* Material breakpoint using with Min width by default  */}

            {/* 2xl kaam nhi karta  */}
            <Box component={"section"}>
                {/* <Container maxWidth={false} disableGutters sx={{ px: 5 }}> */}
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 6, xl: 3, '2xl': 6 }} sx={{ color: '#ffffff', background: { xs: '#ff0000', sm: '#000fff', md: '#fff000', lg: '#6B3F69', xl: '#0BA6DF', '2xl': '#f600e1' } }}>
                            Content 1
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 6, xl: 3, '2xl': 6 }} sx={{ color: '#ffffff', background: { xs: '#ff0000', sm: '#000fff', md: '#fff000', lg: '#6B3F69', xl: '#0BA6DF', '2xl': '#f600e1' } }}>
                            Content 2
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 6, xl: 3, '2xl': 6 }} sx={{ color: '#ffffff', background: { xs: '#ff0000', sm: '#000fff', md: '#fff000', lg: '#6B3F69', xl: '#0BA6DF', '2xl': '#f600e1' } }}>
                            Content 3
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 6, xl: 3, '2xl': 6 }} sx={{ color: '#ffffff', background: { xs: '#ff0000', sm: '#000fff', md: '#fff000', lg: '#6B3F69', xl: '#0BA6DF', '2xl': '#f600e1' } }}>
                            Content 4
                        </Grid>
                    </Grid>
                </Container>
            </Box >


            <br />
            <br />
            <br />

            {/* Bootstrap breakpoint using with Max width by default  */}

            <Box component={"section"}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 6, xl: 3, '2xl': 6 }} sx={{ color: '#ffffff', background: { xs: '#ff0000', sm: '#000fff', md: '#fff000', lg: '#6B3F69', xl: '#0BA6DF', '2xl': '#f600e1' } }}>
                            Content 1
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 6, xl: 3, '2xl': 6 }} sx={{ color: '#ffffff', background: { xs: '#ff0000', sm: '#000fff', md: '#fff000', lg: '#6B3F69', xl: '#0BA6DF', '2xl': '#f600e1' } }}>
                            Content 2
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 6, xl: 3, '2xl': 6 }} sx={{ color: '#ffffff', background: { xs: '#ff0000', sm: '#000fff', md: '#fff000', lg: '#6B3F69', xl: '#0BA6DF', '2xl': '#f600e1' } }}>
                            Content 3
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 6, xl: 3, '2xl': 6 }} sx={{ color: '#ffffff', background: { xs: '#ff0000', sm: '#000fff', md: '#fff000', lg: '#6B3F69', xl: '#0BA6DF', '2xl': '#f600e1' } }}>
                            Content 4
                        </Grid>
                    </Grid>
                </Container>
            </Box>


        </>
    )
}

export default Demo;
