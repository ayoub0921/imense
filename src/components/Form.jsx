import React  from 'react'
import square from '../icons/Vector (4).png'
import { AiOutlineSearch } from 'react-icons/ai'

const Form = () => {



    return (
        <form action="">
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiOutlineSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input type="search" id="default-search" className="field-input" placeholder="Search workers ..." required />
            </div>
            <select disabled id="cat" className="bg-gray-50 border w-[200px] rounded-[2px] h-[34px] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>All Contractors</option>
                <option value="cat1">cat1</option>
                <option value="cat2">cat2</option>
                <option value="cat3">cat3</option>
                <option value="cat4">cat4</option>
            </select>
            <div className='bg-white w-[34px] h-[30px] rounded-[2px] flex items-center justify-center'>
                <img src={square} alt="square" />
            </div>
        </form>
    )
}

export default Form