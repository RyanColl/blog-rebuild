import React from "react";
import './Blog.css'
import { useParams } from "react-router-dom";
import { blogList } from "../Services/Services";
import Banner from "./Banner/Banner";
import Posts from "./Posts/Posts";
const Blog = (props: any) => {
    const id = useParams()
    const [src, setSrc] = React.useState('')
    const width = window.innerWidth;
    const height = window.innerHeight;
    React.useEffect(() => {
        window.scrollTo(0, 0)
        blogList.map(blogPost => {
            if(id !== {}) {
                //@ts-ignore
                if(parseInt(id.id) === blogPost.id) {
                  setSrc(blogPost.imgUrl)
                }
            }
        })  
    }, [])
    
    console.log(src)
    return(
        <>
            {src !== '' && <img className='to-be-animated' src={src} style={{top: height/3.1, left: width/2.1}} />}
            <div id='blog' className='blog'>
                <Banner />
                <Posts />
            
            </div>
        </>
    )
}
export default Blog;