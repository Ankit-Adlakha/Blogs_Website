import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {

    const navigate=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
  return (
    <div className='w-full'>
        <Header/>
        <div className='py-24 max-w-[720px] px-[25px] mx-auto'>
            <button onClick={()=>navigate(-1)} className='rounded-md border-2 px-4 py-1'>
                back
            </button>
            <h2 className='font-bold'>
                Blogs Tagged <span className='text-blue-700'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage