import React, { useState } from 'react'
import '../styles/Sidebar.css';
import logo from '../images/logo.png'
import { TbHandStop } from 'react-icons/tb'
import { AiOutlineHome,AiOutlineMenu } from 'react-icons/ai'


const Sidebar = () => {

  // const [toggle,setToggle] = useState(false);


  // const handleToogleSidebar = () => {
  //     setToggle(!toggle)
  // }

  return (


    <div className='sidebar'>
      <div className="sidebar-content">
        <div className='logo'>
          <img src={logo} alt="logo" />
          <AiOutlineMenu size={18} className='text-[#C4C4C4]' />
        </div>
        <div className="sidebar-pages">
          <div className='sidebar-pages-content active'>
            <AiOutlineHome size={18} className='text-[#C4C4C4]' />
            <h3>Dashboard</h3>
          </div>
          <div className='sidebar-pages-content'>
            <TbHandStop size={18} className='text-[#C4C4C4]' />
            <h3>P.P.E Violations</h3>
          </div>
          <h2 className='manage'>Manage</h2>
          <div className="sidebar-pages">
            <div className='sidebar-pages-content'>
              <AiOutlineHome size={18} className='text-[#C4C4C4]' />
              <h3>P.P.Es</h3>
            </div>
            <div className='sidebar-pages-content'>
              <TbHandStop size={18} className='text-[#C4C4C4]' />
              <h3>Contractors</h3>
            </div>
            <div className='sidebar-pages-content'>
              <TbHandStop size={18} className='text-[#C4C4C4]' />
              <h3>Workers</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Sidebar