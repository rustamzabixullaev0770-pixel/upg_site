import React from 'react'
<<<<<<< HEAD
import ProductCard from '../ProductCard'
import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query';
import NewProducts from '../modules/NewProducts';
import XitProducts from '../modules/XitProducts';
import AboutPC from '../modules/AboutPC';

export default function HomePage() {
  
  const getProducts = async () => {
    try {
      const res = await axiosInstance.get("/products");
      return res.data
    } catch (error) {
      console.log(error);
      
    }
  }

  const {data} = useQuery({
    queryFn: getProducts,
    queryKey: ["products"]
  });

  

  return (
    <div className='px-5'>
      <NewProducts items = {data} />
      <XitProducts items={data} />
      <AboutPC/>
=======

export default function HomePage() {
  return (
    <div>
      Home Pages
>>>>>>> 17f07fb726140f569481bb306013f19801769e28
    </div>
  )
}
