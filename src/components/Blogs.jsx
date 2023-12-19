import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
  //consume
  const {posts,loading}=useContext(AppContext);
  return (
    <div className='mt-[66px] w-11/12 max-w-[670px] h-full py-8 gap-y-7 flex flex-col mb-[70px] mx-auto'>
      {
        loading?
        (<Spinner/>):
        (
          posts.length === 0?(
            <div className="min-h-[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">No Blogs Found !</p>
          </div>):
          (posts.map((post)=>(
            <BlogDetails key={post.id} post={post}/> 
          )))
        )
      }
    </div>
  )
}

export default Blogs