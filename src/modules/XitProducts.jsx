import React from 'react'
import ProductCard from '../ProductCard'

export default function XitProducts({items = []}) {
  return (
    <div className='mt-12 px-6'>
        <div>
            <h4 className='my-6 text-3xl font-bold'>Xit mahsulotlar</h4>
        </div>
      <div className='grid grid-cols-5 gap-6'>
        {
        items.filter(items => items.category == "xit").map( items => (
            <ProductCard item = {items} />
        ))
      }
      </div>
    </div>
  )
}
