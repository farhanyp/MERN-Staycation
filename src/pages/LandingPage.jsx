import React, {useRef,useEffect} from 'react';
import Header from '../parts/Header';
import datas from '../data/landingPage.json'
import { callApiLandingPage } from '../utils/LandingPage'
import Hero from '../parts/Hero';
import MostPicked from '../parts/MostPicked'
import Categories from '../parts/Categories';
import Testimonials from '../parts/Testimonials';
import Footer from '../parts/Footer';
import axios from 'axios';




const LandingPage = () => {    
    useEffect(() => {
        callApiLandingPage()
    }, []);
    const mostPickedSection = useRef()
    return (
        <>
        <Header/>
        <Hero mostPickedSection={mostPickedSection} data={datas.hero}/>
        <MostPicked mostPickedSection={mostPickedSection} data={datas.mostPicked}/>
        <Categories data={datas.categories}/>
        <Testimonials data={datas.testimonial}/>
        <Footer/>
        </>
    );
}

export default LandingPage;
