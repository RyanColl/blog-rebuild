import React from "react";
import './Blog.css'
import Banner from "./Banner/Banner";
import Posts from "./Posts/Posts";
const Blog = (props: any) => {
    return(
        <>      
            <div id='blog' className='blog'>
                <Banner />
                <Posts />
            </div>
        </>
    )
}
export default Blog;