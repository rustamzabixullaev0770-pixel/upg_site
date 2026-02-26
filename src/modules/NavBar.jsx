import React from 'react'
import logo from '/src/assets/logo.png'
import { CiHeart, CiSearch, CiUser } from 'react-icons/ci'
import { SlBasket } from 'react-icons/sl'


export default function NavBar() {
  return (
    <div className='flex justify-between items-center px-12 py-4'>
        <div>
            <img className='w-44 h-7' src={logo} alt="logo" />
        </div>
        <div className='border w-96 h-10 border-gray-400 flex items-center p-3'>
            <input placeholder='Mahsulotlar qidirilmoqda...' className='w-full p-2 outline-none' type="text" />
            <CiSearch className='text-3xl text-gray-600' />
        </div>
        <div>
            <ul className='flex gap-12 items-center'>
                <li className='text-2xl flex flex-col items-center'><CiHeart /><p className='text-base'>Sevimlilar</p></li>
                <li className='text-2xl flex flex-col items-center'><SlBasket /><p className='text-base'>Savat</p></li>
                <li className='text-2xl border border-gray-400 px-4 py-2'><CiUser /></li>
            </ul>
        </div>
    </div>
  )
}
