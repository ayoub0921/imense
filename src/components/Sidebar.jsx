import React, { useState } from 'react'
import '../styles/Sidebar.css';
import logo from '../images/logo.png'
import { TbHandStop } from 'react-icons/tb'
import { AiOutlineHome, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import ppe from '../icons/ppe.png'
import satchel from '../icons/satchel.png'
import secondLogo from '../images/logo2.png'


const Sidebar = () => {

  const [toggle, setToggle] = useState(false);


  const handleToogleSidebar = () => {
    setToggle(!toggle)
  }

  return (


    <div className='bg-white border relative border-[#D7D7D7] '>
      {toggle && <AiOutlineMenu onClick={handleToogleSidebar} size={20} cursor='pointer' className={`text-[#C4C4C4]  top-[19px] absolute ${!toggle ? 'left-[267px]' : 'left-[80px]'}`} />}
      {!toggle ? <div className='sidebar'>
        <div className="sidebar-content">
          <div className='logo'>
            <img src={logo} alt="logo" className='w-[150px]' />
            <AiOutlineMenu onClick={handleToogleSidebar} size={20} className='text-[#C4C4C4] cursor-pointer' />
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
                <img src={ppe} alt="ppe" width='18px' height='18px' />
                <h3>P.P.Es</h3>
              </div>
              <div className='sidebar-pages-content'>
                <img src={satchel} alt="satchel" width='18px' height='18px' />
                <h3>Contractors</h3>
              </div>
              <div className='sidebar-pages-content'>
                <AiOutlineUser size={18} className='text-[#C4C4C4]' />
                <h3>Workers</h3>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4">
              <span className='text-[#939393] text-[13px] font-[700]'>@ App name 2021</span>
              <p className='text-[#8A8A8A] text-[11px] font-[400] w-[198px]'>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut.</p>
          </div>
        </div>
      </div> : <div className='w-[63px] h-[950px] py-4 bg-white flex flex-col items-center space-y-10'>
        <div>
          <img src={secondLogo} alt="logo" className='w-[34px] h-[35.69px]' />
        </div>
        <div className="flex flex-col space-y-4">
          <div >
            <AiOutlineHome size={18} className='hover:text-[#42A4DF] text-[#C4C4C4] cursor-pointer' />
          </div>
          <div className=''>
            <TbHandStop size={18} className='text-[#42A4DF] cursor-pointer' />
          </div>
          <div className="flex flex-col space-y-4 pt-12">
            <div className=''>
              <img src={ppe} alt="ppe" className='text-[#C4C4C4] hover:text-[#42A4DF] cursor-pointer' width='18px' height='18px' />
            </div>
            <div className=''>
              <img src={satchel} className='text-[#C4C4C4] hover:text-[#42A4DF] cursor-pointer' alt="satchel" width='18px' height='18px' />
            </div>
            <div className=''>
              <AiOutlineUser size={18} className='text-[#C4C4C4] hover:text-[#42A4DF] cursor-pointer' />
            </div>
          </div>
        </div>
      </div>}


    </div>

  )
}

export default Sidebar