import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { MainButton4 } from '../styledComponent'
import { Link } from 'react-router-dom'
import config from '../configFile/config'

const BusinessCard = (props) => {
    return (
        <>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
                <Box className="businessCard">
                    <Box className="iconBox">
                        <Box component={"img"} src={props.imgsrc} className='businessCardImg' />
                    </Box>
                    <Typography variant='h4'>{props.cardtitle}</Typography>
                    <Typography sx={{ mb: { sm: '20px', md: '30px' } }}>{props.cardtext}</Typography>
                    {/* <MainButton4>{props.btnname}</MainButton4> */}
                    <Link to={`${config.baseurl}about`}>{props.btnname}</Link>
                </Box>
            </Grid>
        </>
    )
}

export default BusinessCard
