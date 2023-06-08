import React, {useRef,useEffect, useState} from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import MostPicked from '../parts/MostPicked'
import Categories from '../parts/Categories';
import Testimonials from '../parts/Testimonials';
import Footer from '../parts/Footer';
import {fetchDataLandingPage} from '../utils/LandingPage';
import Loading from '../elements/Loading ';

const LandingPage = () => { 
    const mostPickedSection = useRef()
    const [data, SetData] = useState(null)

    useEffect(() => {
      const fetchDataAsync = async () =>{
        try{
          const response = await fetchDataLandingPage()
          SetData(response)
        }catch(error){
          console.log(error)
        }
      }

      fetchDataAsync()
      console.log(data)
      }, []);

    return (
        <>
        {
          data ? 
          <div>
          <Header />
          <Hero data={data.hero} mostPickedSection={mostPickedSection}/>    
          <MostPicked mostPickedSection={mostPickedSection} data={data.mostpicked}/>
          {/* <Categories data={data.categories}/> */}
          {/* <Testimonials data={data.testimonial}/> */}
          <Footer/>
          </div>
          :
          
          <Loading/>
        }
        </>
    );
}

export default LandingPage;
