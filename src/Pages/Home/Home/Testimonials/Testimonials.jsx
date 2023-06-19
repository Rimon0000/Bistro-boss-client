import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section className='my-20'>
            <SectionTitle
            subHeading="What Our Clients Say"
            heading="Testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 
                 {
                    reviews.map(review => <SwiperSlide
                    key={review._id}
                    >
                        <div className='m-24 flex flex-col items-center mx-24 my-16'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                            <p className='py-6'>{review.details}</p>
                            <div className="text-2xl text-orange-400">{review.name}</div>
                        </div>
                    </SwiperSlide>)
                 }
            </Swiper>
            
        </section>
    );
};

export default Testimonials;