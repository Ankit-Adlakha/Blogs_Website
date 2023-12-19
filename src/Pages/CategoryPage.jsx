import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation=useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1)
  return (
    <div className='py-24'>
        <Header/>
        <div className='max-w-[720px] px-[25px] mx-auto flex gap-3 items-center'>
            <button onClick={()=>navigation(-1)} className='rounded-md border-2 px-4 py-1'>
                back
            </button>
            <h2 className='font-bold'>
                Blogs On <span>{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage