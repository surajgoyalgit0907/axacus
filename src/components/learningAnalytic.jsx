import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FaChevronRight } from "react-icons/fa6";
import learningImg1 from '../assets/images/learningImg1.jpg';
import learningImg2 from '../assets/images/learningImg2.jpg';
import learningImg3 from '../assets/images/learningImg3.jpg';
import learningImg4 from '../assets/images/learningImg4.jpg';
import learningImg5 from '../assets/images/learningImg5.jpg';
import learningImg6 from '../assets/images/learningImg6.jpg';
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbDeviceIpadHorizontalDollar } from "react-icons/tb";
import { LiaUsersCogSolid } from "react-icons/lia";
import { FaChalkboardUser } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import { PiToolbox } from "react-icons/pi";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const LearningAnalytic = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box component={"section"} className='learningAnalysticSec'>
                <Container maxWidth="xxl">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 6 }} sx={{ mx: 'auto', mb: '50px' }}>
                            <Box className="secHead">
                                <Typography variant='h6'>BUSINESS TO BUSINESS</Typography>
                                <Typography variant='h2'>Learning Analytics Solutions </Typography>
                                <Typography >With a broad range of experience across multiple industries around the globe, our award-winning team produces that people love to use.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>

                            <Box className='learningContent'>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8 }}>
                                        <Box className='learnigLeftBox'>
                                            <TabPanel value={value} index={0}>
                                                <Box className='InnerImgDeatail'>
                                                    <Box component={'img'} src={learningImg1} className='learningImg' />
                                                    <Box className="textContent">
                                                        <Typography variant='span'>25 Jobs in 10 Differents Companies</Typography>
                                                        <Typography variant='h3'>Business Case for Sustainability</Typography>
                                                        <Typography>We are specialists in both economics and information techno gies and we apply our full range of talent.</Typography>
                                                    </Box>
                                                    <Box className='arrowIconBox'>
                                                        <FaChevronRight />
                                                    </Box>
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value={value} index={1}>
                                                <Box className='InnerImgDeatail'>
                                                    <Box component={'img'} src={learningImg2} className='learningImg' />
                                                    <Box className="textContent">
                                                        <Typography variant='span'>25 Jobs in 10 Differents Companies</Typography>
                                                        <Typography variant='h3'>Our Transformation Policy</Typography>
                                                        <Typography>We are specialists in both economics and information techno gies and we apply our full range of talent.</Typography>
                                                    </Box>
                                                    <Box className='arrowIconBox'>
                                                        <FaChevronRight />
                                                    </Box>
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value={value} index={2}>
                                                <Box className='InnerImgDeatail'>
                                                    <Box component={'img'} src={learningImg3} className='learningImg' />
                                                    <Box className="textContent">
                                                        <Typography variant='span'>25 Jobs in 10 Differents Companies</Typography>
                                                        <Typography variant='h3'>Our Customer Strategy</Typography>
                                                        <Typography>We are specialists in both economics and information techno gies and we apply our full range of talent.</Typography>
                                                    </Box>
                                                    <Box className='arrowIconBox'>
                                                        <FaChevronRight />
                                                    </Box>
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value={value} index={3}>
                                                <Box className='InnerImgDeatail'>
                                                    <Box component={'img'} src={learningImg4} className='learningImg' />
                                                    <Box className="textContent">
                                                        <Typography variant='span'>25 Jobs in 10 Differents Companies</Typography>
                                                        <Typography variant='h3'>Brand Management Career</Typography>
                                                        <Typography>We are specialists in both economics and information techno gies and we apply our full range of talent.</Typography>
                                                    </Box>
                                                    <Box className='arrowIconBox'>
                                                        <FaChevronRight />
                                                    </Box>
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value={value} index={4}>
                                                <Box className='InnerImgDeatail'>
                                                    <Box component={'img'} src={learningImg5} className='learningImg' />
                                                    <Box className="textContent">
                                                        <Typography variant='span'>25 Jobs in 10 Differents Companies</Typography>
                                                        <Typography variant='h3'>Our Advanced Analytics Graph</Typography>
                                                        <Typography>We are specialists in both economics and information techno gies and we apply our full range of talent.</Typography>
                                                    </Box>
                                                    <Box className='arrowIconBox'>
                                                        <FaChevronRight />
                                                    </Box>
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value={value} index={5}>
                                                <Box className='InnerImgDeatail'>
                                                    <Box component={'img'} src={learningImg6} className='learningImg' />
                                                    <Box className="textContent">
                                                        <Typography variant='span'>25 Jobs in 10 Differents Companies</Typography>
                                                        <Typography variant='h3'>Growth Strategies in Business</Typography>
                                                        <Typography>We are specialists in both economics and information techno gies and we apply our full range of talent.</Typography>
                                                    </Box>
                                                    <Box className='arrowIconBox'>
                                                        <FaChevronRight />
                                                    </Box>
                                                </Box>
                                            </TabPanel>
                                            {/* <TabPanel value={value} index={6}>
                                                Item Seven
                                            </TabPanel> */}
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 12, md: 5, lg: 4 }}>
                                        <Box className='learnigRightBox'>
                                            <Tabs
                                                orientation="vertical"
                                                variant="scrollable"
                                                value={value}
                                                onChange={handleChange}
                                                aria-label="Vertical tabs example"
                                                sx={{ borderRight: 1, borderColor: 'divider' }}
                                            >

                                                <Tab label="Sustainability" icon={<HiOutlineLightBulb />} {...a11yProps(0)} />
                                                <Tab label="Transformation" icon={<TbDeviceIpadHorizontalDollar />} {...a11yProps(1)} />
                                                <Tab label="Customer Strategy" icon={<LiaUsersCogSolid />} {...a11yProps(2)} />
                                                <Tab label="Marketing" icon={<FaChalkboardUser />} {...a11yProps(3)} />
                                                <Tab label="Advanced Analytics" icon={<GrAnalytics />} {...a11yProps(4)} />
                                                <Tab label="Growth Strategies" icon={<PiToolbox />} {...a11yProps(5)} />
                                                {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
                                            </Tabs>
                                        </Box>
                                    </Grid>
                                </Grid>


                            </Box>
                        </Grid>
                    </Grid>
                </Container >
            </Box >
        </>
    )
}

export default LearningAnalytic;
