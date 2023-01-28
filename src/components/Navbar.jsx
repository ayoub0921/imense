import React, { useState } from 'react'
import { BsArrowDown, BsMoon } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'
import a from '../icons/a.png'
import {  AiOutlineDown, AiOutlineSetting } from 'react-icons/ai'
import { MdOutlineLogout } from 'react-icons/md'
import { BsShieldExclamation } from 'react-icons/bs'
import english from '../icons/english.png'
import frensh from '../icons/france.png'
import nether from '../icons/netherland.png'
import spain from '../icons/espagne.png'
import deutsh from '../icons/deutsh.png'
import ellipse from '../icons/Ellipse 1.png'
import '../styles/Navbar.css'

const Navbar = () => {

    const [profile,setProfile] = useState(false);
    const [languages,setLanguages] = useState(true);

    const languagesaData = [
        {
            id: 1,
            drapeaux: english,
            language: 'English (EN)'
        },
        {
            id: 2,
            drapeaux: frensh,
            language: 'Français (FR)'
        },
        {
            id: 3,
            drapeaux: nether,
            language: 'Nederlands (NL)'
        },
        {
            id: 4,
            drapeaux: spain,
            language: 'Español (ES) '
        },
        {
            id: 5,
            drapeaux: deutsh,
            language: 'Deutsch (DE)'
        },

    ]


    const handlToogleProfile = () => {
        setProfile(!profile)
    }

    return (
        <div className='flex flex-col w-full'>
            <nav className='navbar w-full bg-white border-b border-gray-300 h-[60px] flex items-center justify-center flex-col'>
                <div className="nav-contentp-4  flex justify-between items-center w-[95%] mx-auto">
                    <div className='pl-8'>
                        <h3 className='font[500] text-[18px]'>Overview</h3>
                    </div>
                    <div className='flex items-center space-x-7'>
                        <ul className='flex items-center space-x-5'>
                            <li className='flex items-center cursor-pointer' >
                                <img src={a} alt="a" />
                                <BsArrowDown color='#B4B4B4' size={18} />
                            </li>
                            <li className='cursor-pointer'>
                                <BsMoon color='#B4B4B4' size={18} />
                            </li>
                            <li className='cursor-pointer'>
                                <IoIosNotificationsOutline color='#B4B4B4' size={18} />
                            </li>
                        </ul>

                        <div className="relative">
                            <div onClick={()=>setLanguages(!languages)} className='darpeauxChoos'>
                                <img src={english} width='17.81px' height='17.81px' alt="darpeaux" />
                                <span className='font-[500] text-[13px] text-[#7A7A7A]'>English (EN)</span>
                            </div>
                            {languages && <div className='darpeauxMenu'>
                                {languagesaData.map(l => (
                                    <>
                                        <div className='flex items-center space-x-2 leading-7 cursor-pointer'>
                                            <img src={l.drapeaux} width='18.75px' height='18.75px' alt={l.language} />
                                            <span className='text-[12px] font-[400] text-[#ADADAD]'>{l.language}</span>
                                        </div>
                                    </>
                                ))}
                            </div>}
                        </div>

                        <div className='relative'>
                            <div onClick={handlToogleProfile} className='flex items-center space-x-1 cursor-pointer'>
                                <img width="31px" height='31px' src={ellipse} alt="ellipse" />
                                <span className='text-[#7A7A7A] text-[13px] font-[500]'>BESIX Groupe</span>
                                <AiOutlineDown color='#7A7A7A' width="1px" />
                            </div>
                            {profile && <div className={`menu`}>
                                <div className='border-b border-gray-300 py-2'>
                                    <h4 className='text-[#313131] text-[12px] font-[600]'>Besix Groupe</h4>
                                    <p className='text-[#797979] font-[400] text-[12px] leading-6'>besix.group@besix.be</p>
                                </div>
                                <div>
                                    <ul className='border-b border-gray-300 py-2'>
                                        <li className='flex items-center cursor-pointer space-x-1'>
                                            <AiOutlineSetting />
                                            <span className='text-[13px]  font-[500] leading-6'>Profile Settings</span>
                                        </li>
                                        <li className='flex items-center cursor-pointer space-x-1'>
                                            <BsShieldExclamation />
                                            <span className='text-[13px] font-[500] leading-6 '>Our policies</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex items-center cursor-pointer pt-2 space-x-1'>
                                    <MdOutlineLogout />
                                    <span className='text-[13px] font-[500]'>Log out</span>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="sites bg-white flex h-[36px] items-center space-x-4">
                <h3 className='border-r font-[500] text-[#ADADAD] text-[12px] border-gray-300 w-[87px] h-[36px] flex items-center justify-center uppercase'>sites</h3>
                <ul className='flex space-x-8'>
                    <li className='font-[500] text-[12px] text-[#42A4DF]'>
                        All
                    </li>
                    <li className='text-[#ABABAB] hover:text-[#42A4DF] cursor-pointer  font-[500] text-[12px]'>
                        Site 1
                    </li>
                    <li className='text-[#ABABAB] hover:text-[#42A4DF] cursor-pointer  font-[500] text-[12px]'>
                        Site 2
                    </li>
                    <li className='text-[#ABABAB] hover:text-[#42A4DF] cursor-pointer   font-[500] text-[12px]'>
                        Site 3
                    </li>
                    <li className='text-[#ABABAB] hover:text-[#42A4DF] cursor-pointer   font-[500] text-[12px]'>
                        Site 4
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Navbar