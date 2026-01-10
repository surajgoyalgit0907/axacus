import React from 'react';
import '../components/componentCss/home.css';
import Header from '../directives/header';
import Footer from '../directives/footer';
import Banner from './banner';
import BusinessSolution from './businessSolution';
import Benefit from './benefit';
import Strategy from './strategy';
import Testimonial from './testimonial';
import Digital from './digital';
import LearningAnalytic from './learningAnalytic';
import Counter from './counter';
import Latestnews from './latestnews';

const Home = () => {
    return (
        <>

            <Header />

            {/* <h4>This is Home Page</h4> */}
            <Banner />
            <BusinessSolution />
            <Benefit />
            <Strategy />
            <Testimonial />
            <Digital />
            <LearningAnalytic />
            <Counter />
            <Latestnews />
            <Footer />
        </>
    )
}

export default Home
