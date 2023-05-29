import React, {useEffect} from 'react';
import Header from '../parts/Header';
import DetailTitle from '../parts/Detail-Page/Detail-Title';
import datas from '../data/itemDetails.json';
import DetailImage from '../parts/Detail-Page/Detail-Image';
import DetailBody from '../parts/Detail-Page/Detail-Body';
import ThingsTodo from '../parts/Detail-Page/Things-Todo';
import DetailTestimonials from '../parts/Detail-Page/Detail-Testimonials';
import Footer from '../parts/Footer'

const DetailPage = () => {

    useEffect(()=>{
        document.title = "StayCation  |  Home";
        return ()=>{
            document.title = "React App";
            window.scrollTo(0,0)
        }
    },[])

    return (
        <div>
            <Header/>
            <DetailTitle data={datas}/>
            <DetailImage data={datas}/>
            <DetailBody data={datas} value={2}/>
            <ThingsTodo data={datas.activities}/>
            <DetailTestimonials data={datas.testimonial}/>
            <Footer/>
            {/* <InputNumber/> */}
        </div>
    );
}

export default DetailPage;
