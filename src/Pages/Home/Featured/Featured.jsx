import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle 
            subHeading="Check it out"
            heading="featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>May 20, 2023</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias delectus 
                        expedita nihil quia incidunt laborum provident aliquam doloremque illo.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;