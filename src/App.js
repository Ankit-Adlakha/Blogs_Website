import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import './App.css'
import { Routes,Route, useSearchParams} from "react-router-dom";
import { useLocation } from "react-router-dom";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";

export default function App() {
  const {fetchBlogPost}=useContext(AppContext);

  const [searchParams,setSearchParams]= useSearchParams();
  const location=useLocation();

  useEffect(()=>{
    const page=searchParams.get("page")??1;
    if(location.pathname.includes("tags")){
      //iska matlab tag wala page show krna h
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPost(Number(page),tag)
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPost(Number(page),null,category); 
    }
    else{
      fetchBlogPost(Number(page));
    }
  },[location.pathname,location.search])
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogID" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  );
}
