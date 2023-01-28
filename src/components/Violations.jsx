import React, { useState } from 'react'
import { AiFillSetting } from 'react-icons/ai'
import '../styles/Violations.css'
import glove from '../images/materiels/baseball-glove.png'
import Rectangle from '../images/materiels/Rectangle.png'
import casque from '../images/materiels/Rectangle 268.png'
import Form from './Form'
import user from '../images/user.png'
import browanze from '../icons/img.png'
import equipThree from '../images/materiels/Rectangle 268 (1).png'
import knee from '../images/materiels/image 19.png'
import shoes from '../images/materiels/Rectangle 268 (2).png'
import Coverall from '../images/materiels/Rectangle 268 (3).png'
import jacket from '../images/materiels/image 20.png'
import Safety from '../images/materiels/Rectangle 268 (4).png'
import Face from '../images/materiels/Rectangle 270.png'
import Hard from '../images/materiels/41.png'
import Welding from '../images/materiels/Rectangle 268 (5).png'
import { BiTimeFive } from 'react-icons/bi'
import popupFirst from '../images/popup1.png'
import popuSecond from '../images/popup2.png'






const Violations = () => {

  const [toogle, setToogle] = useState(false)
  const [popup,setPopup] = useState(true)



  return (
    <div className='violations'>
      <div className="violation-content">
        <h3 className='title'>P.P.E Violations Table</h3>
        <Form />
      </div>

      <div class="relative overflow-x-auto w-full my-10">
        <table className='bg-white w-[98%] mx-auto relative'>
          <thead className='border-b'>
            <tr>
              <th className='border-r border-b text-center '>
                <AiFillSetting onClick={() => setToogle(!toogle)} className='text-[#DCDCDC]  cursor-pointer mx-auto options-i' />
                <div className={`absolute p-4 bottom-45px z-10 bg-white shadow-md  ${toogle ? 'block' : 'hidden'}`}>
                  <h3 class="mb-4 text-[11px] font-500 text-[#989797]">Select columns to display</h3>
                  <ul className='text-[#D8D8D8] flex flex-col space-y-2'>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Protective gloves</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Safety glasses</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Ear protection</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Mask protection</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Knee pads</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Safety shoes</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Coverall</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Hi-Vis Jacket</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Safety Harness</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Face shield</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Goggles</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                      <p className='text-[11px] font-[400]'>Welding helmet</p>
                    </li>

                  </ul>
                </div>
              </th>
              <th className='border-r border-b'>
                <h3 className='text-[12px] font-600 text-[#737373]'>Workers</h3>
              </th>
              <th>
                <div className='flex flex-col items-center space-y-3'>
                  <div className='bg-gray-100 w-[40px] h-[40px] text-center' >
                    <img src={glove} alt="glove" />
                  </div>
                  <span>Protective gloves</span>
                </div>
              </th>
              <th>
                <div className='flex flex-col items-center space-y-3'>
                  <img src={Rectangle} alt="glove" className='bg-gray-100 w-[40px] h-[40px] text-center' srcset="" />
                  <span>Safety glasses</span>
                </div>
              </th>
              <th>
                <div className='flex flex-col items-center space-y-3'>
                  <img src={casque} alt="mat" className='bg-gray-100 w-[40px] h-[40px] text-center' />
                  <span>Ear protection</span>
                </div>
              </th>
              <th>
                <div className='flex items-center flex-col space-y-3'>
                  <img src={equipThree} alt="mat" className='bg-gray-100 w-[40px] h-[40px] text-center' />
                  <span>Mask protection</span>
                </div>
              </th>
              <th>
                <div className='flex items-center flex-col space-y-3'>
                  <img src={knee} alt="mat" className='bg-gray-100 w-[40px] h-[40px] text-center' />
                  <span>Knee pads</span>
                </div>
              </th>
              <th>
                <div className='flex items-center flex-col justify-between space-y-3'>
                  <img src={shoes} alt="mat" className='bg-gray-100 w-[40px] h-[40px] text-center' />
                  <span>Safety shoes</span>
                </div>
              </th>
              <th>
                <div className='flex items-center flex-col space-y-3'>
                  <img src={Coverall} alt="mat" className='bg-gray-100 relative top-0 w-[40px] h-[40px] text-center' />
                  <span>Coverall</span>
                </div>
              </th>
              <th>
                <div className='flex flex-col items-center space-y-3'>
                  <img src={jacket} alt="mat" className='bg-gray-100 relative top-0 w-[40px] h-[40px] text-center' />
                  <span>Hi-Vis  Jacket</span>
                </div>
              </th>
              <th>
                <div className='flex flex-col items-center space-y-3'>
                  <img src={Safety} alt="mat" className='bg-gray-100 relative top-0 w-[40px] h-[40px] text-center' />
                  <span>Safety  Harness</span>
                </div>
              </th>
              <th>
                <div className='flex flex-col items-center space-y-3'>
                  <img src={Face} alt="mat" className='bg-gray-100 relative top-0 w-[40px] h-[40px] text-center' />
                  <span>Face  shield</span>
                </div>
              </th>
              <th>
                <div className='flex flex-col items-center space-y-3'>
                  <img src={Hard} alt="mat" className='bg-gray-100 relative top-0 w-[40px] h-[40px] text-center' />
                  <span>Hard Hat</span>
                </div>
              </th>
              <th>
                <div className='flex flex-col items-center space-y-3'>
                  <img src={Welding} alt="mat" className='bg-gray-100 relative top-0 w-[40px] h-[40px] text-center' />
                  <span>Welding helmet</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='border-r text-[#909090] text-[12x] text-center font-[500]'>1</td>
              <td className='px-1 border-r'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px] text-[#313131]  font[700]  text-[14px] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>2</span>
              </td>
              <td className='px-2 py-2'></td>
              <td ></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>10</span>
              </td>
              <td className='px-2 py-2'></td>
              <td className='px-2 py-2'></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>1</span>
              </td>
              <td className='px-2 py-2'></td>
              <td className='px-2 py-2'></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>3</span>
              </td>
              <td className='px-2 py-2'></td>
            </tr>
            <tr className='border-b '>
              <td className='border-r text-center text-[#909090] text-[12x] font-[500]'>2</td>
              <td className='px-1 py-2 border-r'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>2</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>10</span>
              </td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>2</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span onClick={()=>setPopup(!popup)} className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>3</span>
                {/* popup here */}
                {popup && <div className='bg-white p-4 shadow-md absolute w-[296px] right-0 top-[180px]'>
                  <div>
                    <div>
                      <img src={popupFirst} alt="popuImage" className='w-full rounded-[5px] object-contain' />
                    </div>
                    <div className='flex justify-between items-center py-2'>
                      <p className='text-[#929292] font-[400] text-[12px]'>Comment</p>
                      <ul className='flex items-center space-x-2 '>
                        <li className='flex items-center space-x-1'>
                          <BiTimeFive className='text-[#F88923] w-[12px] h-[12px]' />
                          <span className='text-[#727272] text-[10px] font-[500]'>15/11/2022  10:34</span>
                        </li>
                        <li className='text-[12px] font-[500]'>
                          #03
                        </li>
                      </ul>
                    </div>
                    <div className='bg-[#F8F8F8] border-[0.5] border-[#E1E1E1]'>
                      <p className='text-[11px] rounded-[5px] w-[200px] font-[400] text-[#313131] p-1'>consectetur adipiscing elit, do eiusmod tempor
                        incididunt ut labore et dolore  magna aliqua
                        adipiscingdo eiusmod  tempor incididunt labore</p>
                    </div>
                    <hr className='border border-[#D8D8D8] my-4' />
                    <div>
                      <img src={popuSecond} alt="popupImage" className='w-full rounded-[5px] object-contain' />
                    </div>
                    <div className='flex justify-between py-2 items-center'>
                      <p className='text-[#929292] font-[400] text-[12px]'>Comment</p>
                      <ul className='flex items-center space-x-2 '>
                        <li className='flex items-center space-x-1'>
                          <BiTimeFive className='text-[#F88923] w-[12px] h-[12px]' />
                          <span className='text-[#727272] text-[10px] font-[500]'>15/11/2022  10:34</span>
                        </li>
                        <li className='text-[12px] font-[500]'>
                          #07
                        </li>
                      </ul>
                    </div>
                    <div className='bg-[#F8F8F8] border-[0.5] border-[#E1E1E1]'>
                      <p className='text-[11px] rounded-[5px] w-[200px] font-[400] text-[#313131] p-1'>consectetur adipiscing elit, do eiusmod tempor
                        incididunt ut labore et dolore  magna aliqua
                        adipiscingdo eiusmod  tempor incididunt labore</p>
                    </div>
                  </div>
                </div>}
              </td>
            </tr>
            <tr className='border-b'>
              <td className='border-r text-center text-[#909090] text-[12x] font-[500]'>3</td>
              <td className='px-1 py-2 border-r'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>11</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className='border-b'>
              <td className='border-r text-center text-[#909090] text-[12x] font-[500]'>11</td>
              <td className='px-1 py-2 border-r'>
                <div className='flex items-center justify-between'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>11</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>2</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>3</span>
              </td>
              <td></td>
            </tr>
            <tr className='border-b'>
              <td className='border-r text-center text-[#909090] text-[12x] font-[500]'>5</td>
              <td className='px-1 py-2 border-r'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>2</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>1</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>3</span>
              </td>
            </tr>
            <tr className='border-b'>
              <td className='border-r text-center text-[#909090] text-[12x] font-[500]'>6</td>
              <td className='px-1 py-2 border-r'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>11</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className='border-b'>
              <td className='border-r text-[#909090] text-[12x] text-center font-[500]'>7</td>
              <td className='px-1 border-r py-2'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>2</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>11</span>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>1</span>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>3</span>
              </td>
              <td></td>
            </tr>
            <tr className='border-b'>
              <td className='border-r text-[#909090] text-center text-[12x] font-[500]'>8</td>
              <td className='px-1 border-r py-2'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>2</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>10</span>
              </td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>1</span>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>3</span>
              </td>
            </tr>
            <tr className=' border-b'>
              <td className='border-r text-center text-[#909090] text-[12x] font-[500]'>9</td>
              <td className='px-1 py-2 border-r'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>2</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>11</span>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>1</span>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>3</span>
              </td>
              <td></td>
            </tr>
            <tr className='border-b'>
              <td className='border-r text-[#909090] text-[12x] font-[500]'>10</td>
              <td className='px-1 border-r py-2'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>11</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className='border-b'>
              <td className='border-r text-[#909090] text-[12x] font-[500]'>11</td>
              <td className='px-1 border-r py-2'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>11</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className='border-b'>
              <td className='border-r text-[#909090] text-center text-[12x] font-[500]'>12</td>
              <td className='px-1 border-r py-2'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-1'>
                    <img src={user} alt="user" className='w-[34px] h-[34px]' />
                    <ul>
                      <li className='text-[12px] font-[400] text-[#484848]'>Blaise DEFLOO</li>
                      <li className='text-[11px] font-[400] text-[#909090]'>Manager</li>
                    </ul>
                  </div>
                  <img src={browanze} alt="logo" className='w-[40px] h-[40px]' />
                </div>
              </td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>2</span>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#EF3C3C] text-white text-[14px] font[700] w-[36px] flex items-center justify-center  p-2  h-[36px] rounded-[18px]'>10</span>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>1</span>
              </td>
              <td></td>
              <td></td>
              <td className='px-2 py-2 flex items-center justify-center'>
                <span className='bg-[#F8CC23] w-[36px]  text-[#313131] text-[14px] font[700] font[700] p-2 flex items-center justify-center  h-[36px] rounded-[18px]'>3</span>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Violations