import React from 'react'

export default function PrimaryBtn({text}) {
  return (
    <button className="w-full mt-3 bg-[#ff0096] hover:bg-pink-200 hover:text-[#ff0096] hover:cursor-pointer text-white py-2 rounded flex items-center justify-center gap-2 transition">
        {text}
    </button>
  )
}
