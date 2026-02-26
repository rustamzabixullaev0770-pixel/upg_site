import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Btn2({text2}) {
  return (
    <button className="w-full mt-3 bg-[#ff0096] hover:bg-pink-600 text-white py-2 rounded flex items-center justify-center gap-2 transition">
        {text2} <FaArrowRightLong />
    </button>
  )
}
