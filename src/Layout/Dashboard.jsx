import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaUsers, FaBook } from 'react-icons/fa';
import useCart from '../hooks/usecart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart()

    //TODO: load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true
    const [isAdmin] = useAdmin()

    return (
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            <Outlet></Outlet>
          </div> 
          <div className="drawer-side bg-[#D1A054]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full text-base-content">
              {/* Sidebar content here */}
              {
                isAdmin ? <>
                 <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add An Item</NavLink></li>
                <li><NavLink to="/dashboard/manageItems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                <li><NavLink to="/"><FaBook></FaBook> Manage bookings(Not implemented)</NavLink></li>
                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                

                </> : <>
                <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> user Home</NavLink></li>
                <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                <span className="badge badge-secondary ml-1">+${cart?.length || 0}</span>
                </NavLink></li>
                </>
              }

              <div className="divider"></div>

              <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
              <li><NavLink to="/menu"> Our Menu</NavLink></li>
              <li><NavLink to="/order/salad"> Our Food</NavLink></li>

            </ul>
          
          </div>
        </div>
    );
};

export default Dashboard;