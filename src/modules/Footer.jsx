import React from 'react'
import logo from '.././assets/logo.png'
import { FaLocationDot, FaTiktok } from 'react-icons/fa6'
import {MdSms } from 'react-icons/md'
import { IoIosTime, IoLogoYoutube } from 'react-icons/io'
import { FaInstagramSquare, FaTelegramPlane } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='bg-[#F1F1F1] px-12 py-16'>
            <div className='flex gap-10'>
                <div>
                    <img className='w-60 h-6' src={logo} alt="logo" />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-lg font-bold'>Kompaniya</p>
                    <ul className='flex flex-col gap-2'>
                        <li>Kontaktlar</li>
                        <li>Biz haqimizda</li>
                        <li>Nima uchun biz?</li>
                        <li>Ommaviy taklif</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-lg font-bold'>Xizmatlar</p>
                    <ul className='flex flex-col gap-2'>
                        <li>Yangilash</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-lg font-bold'>Qollab quvvatlash</p>
                    <ul className='flex flex-col gap-2'>
                        <li>Yetkazib berish</li>
                        <li>To'lov usuli</li>
                        <li>TSS</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-lg font-bold'>Qollab quvvatlash</p>
                    <ul className='flex flex-col gap-2'>
                        <li>Bloggerlar</li>
                        <li>O'yin klublar</li>
                        <li>eSports</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <div>
                        <p className='flex items-center gap-2 text-lg font-bold'><MdSms />Telefonlar</p>
                        <p>+ 998 (93) 512 99 46</p>
                        <p>+ 998 (99) 336 86 83</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-2 text-lg font-bold'><FaLocationDot />Manzil</p>
                        <p>Toshkent, Navoiy ko'chasi 37</p>
                        <p>Toshkent, Malika savdo markazi, 24-do'kon</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-2 text-lg font-bold'><IoIosTime />Ish vaqti</p>
                        <p>Har kuni soat 10:00 dan 20:00 gacha</p>
                    </div>
                </div>
            </div>
            <hr className='border-[#ff0096] my-12'/>
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <FaInstagramSquare className='text-5xl text-pink-700' />
                    <div className='text-lg text-[#ff0096]'>
                        <p>Instagram</p>
                        <p>212 ming obunachi</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <IoLogoYoutube className='text-5xl text-red-600' />
                    <div className='text-lg text-[#ff0096]'>
                        <p>YouTube</p>
                        <p>142 ming obunachi</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <FaTelegramPlane className='text-5xl text-blue-700' />
                    <div className='text-lg text-[#ff0096]'>
                        <p>Telegram</p>
                        <p>24,1 ming obunachi</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <FaTiktok className='text-5xl' />
                    <div className='text-lg text-[#ff0096]'>
                        <p>TikTok</p>
                        <p>30 ming obunachi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
