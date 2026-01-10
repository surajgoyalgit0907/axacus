import { Box, Typography, Grid } from '@mui/material';
import React from 'react'
import { FaCommentDots } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


const BlogCard = (props) => {
    return (
        <>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} sx={{ mb: { sm: "30px", md:'20px', lg:'35px' } }}>
                <Box className='blogCard'>
                    <Box component={'img'} src={props.imgsrc} className='blogCardimg' />
                    <Box className='blogContent'>
                        <Box className='blogDetails'>
                            <Box className='dateDiv'>
                                <Typography variant='h4'>17 <br />APR</Typography>
                            </Box>
                            <Box className='commentDiv'>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FaCommentDots />
                                    <Typography variant='span'>Comments</Typography>
                                </Box>
                                <Box sx={{ ml: '30px', display: 'flex', alignItems: 'center' }}>
                                    <FaUser />
                                    <Typography variant='span'>Admin</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Typography variant='h4' sx={{ mb: '30px' }}>{props.cardtitle}</Typography>
                        <Link to={props.visit}>{props.btnname} </Link>
                    </Box>
                </Box >
            </Grid>

        </>
    )
}

export default BlogCard;
