import React from "react";
import './BlogPost.css'
import { useParams } from "react-router-dom";
import { blogList, Blogs } from "../../Services/Services";
import { resolveSoa } from "dns/promises";

const BlogPost = (props: any) => {
    console.log('here')
    const [src, setSrc] = React.useState('')
    const [blogOpacity, setBlogOpacity] = React.useState(0)
    const id = useParams()
    React.useEffect(() => {
        window.scrollTo(0, 0)
        blogList.map(blogPost => {
            //@ts-ignore
            console.log(id.id, ' ', blogPost.id )
            if(id !== {}) {
                //@ts-ignore
                if(parseInt(id.id) === blogPost.id) {
                  setSrc(blogPost.imgUrl)
                }
            }
        })
        threeSeconds().then(result => setBlogOpacity(1))  
    }, [])  
    console.log(src)
    const width = window.innerWidth;
    const height = window.innerHeight;
    return(
        <>
        {src !== '' && <img className='to-be-animated' src={src} style={{top: height/3.1, left: width/2.6}} />}
        <div id='blog-post' className='blog-post' style={{opacity: blogOpacity}}>
            {/* @ts-ignore */}
            {Blogs.filter(blog => blog.id === parseInt(id.id)).map(blog => {
                return(
                <div key={blog.id}>
                    <div className="blog-banner">
                        <span className="blog-title">{blog.title}</span>
                        <span className="blog-title-underline"></span>
                    </div>
                    <div className="blog-content">
                        <div className={`blog-section-one`}>
                            <span className='blog-intro'>{blog.content[0]}</span>
                            <div className="blog-img"><img src={src} /></div>
                        </div>
                        {blog.content.length > 1 && blog.content.map((text, i) => {
                            if(i > 0) return <><span className={`blog-section-${i+1}`}>{text}</span><br></br><br></br></>  
                        })}
                    </div>
                </div>
                );
            })}
        </div>
        </>
    )
}
export default BlogPost;

const threeSeconds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 2800)
    })
}