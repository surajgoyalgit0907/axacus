import React from 'react'

import { Box, Typography } from '@mui/material';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


const TestimonialCard = (props) => {
    return (
        <>
            <Box className="testimonialCard">
                <Box className="borderBox">
                    <Box className="" sx={{ display: 'flex', alignItems: 'center', mb: '25px' }}>
                        <Box className="testiIconBox">
                            <Box component={"img"} src={props.imgsrc} className='clientImg' />
                        </Box>
                        <Box className="testiText" sx={{ ml: '20px' }}>
                            <ul>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStarHalfAlt /></li>
                            </ul>
                            <Box>
                                <Typography variant='h4'>{props.clientName} <Typography variant='span'>{props.clientDegignation}</Typography></Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Typography> {props.textPara}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default TestimonialCard;
