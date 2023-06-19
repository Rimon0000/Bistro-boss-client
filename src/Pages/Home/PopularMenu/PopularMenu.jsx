import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../../Menu/MenuCategory/MenuCategory';

const PopularMenu = ({items}) => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // }, [])

    return (
        <section className='mb-12'>
            <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Popular Items"
            ></SectionTitle>
            <MenuCategory items = {popular}></MenuCategory>
            <div className='text-center'>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
            
        </section>
    );
};

export default PopularMenu;