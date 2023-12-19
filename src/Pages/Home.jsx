import React from 'react'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-1'>
        <Header/>
        <Blogs/>
        <Pagination/>

    </div>
  )
}

export default Home