import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import BlogDetails from '../components/BlogDetails';
import Header from '../components/Header';

const BlogPage = () => {


    const newBaseUrl= "https://codehelp-apis.vercel.app/api/get-blog"
    const [blog,setBlog]=useState(null);
    const [relatedBlogs,setRelatedBlogs]=useState([]);
    const location =useLocation();
    const navigate=useNavigate();
    const {loading,setLoading}=useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data=await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

        }
        catch(error){
            console.log("Error aa gya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])
  return (
    <div className='py-24 '>
         <Header/>
         <div className='max-w-[720px] px-[25px] mx-auto'>
            <button onClick={()=>navigate(-1)} className='rounded-md border-2 px-4 py-1'>
                back
            </button>
         </div>
         {
            loading ?
            (<div>
                <p>Loading</p>
            </div>):
            blog ? 
            (<div className='flex flex-col gap-y-10 max-w-2xl mx-auto'>
                <BlogDetails post={blog}/>
                <h2 className='text-3xl font-bold'>Realted Blogs</h2>
                {
                    relatedBlogs.map((post)=>(
                        <div key={post.id}>
                            <BlogDetails post={post}/>
                        </div>
                    ))
                }
            </div>):
            <div>
                <p>No Blog Found</p>
            </div>
         }
    </div>
  )
}

export default BlogPage