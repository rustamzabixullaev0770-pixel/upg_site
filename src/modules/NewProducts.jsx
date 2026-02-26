import React from 'react'
import ProductCard from '../ProductCard'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function NewProducts({items = []}) {
  return (
    <div className='mt-12 px-6'>
        <div>
            <h4 className='my-6 text-3xl font-bold'>Yangi mahsulotlar</h4>
        </div>
      <div className='grid grid-cols-5 gap-6'>
        {
        items.filter(items => items.category == "yangi").map( items => (
            <ProductCard item = {items} />
        ))
      }
      </div>
    </div>
  )
}
