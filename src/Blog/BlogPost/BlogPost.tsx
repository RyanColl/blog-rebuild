import React from "react";
import './BlogPost.css'
import { useParams } from "react-router-dom";
import { blogList } from "../../Services/Services";
const BlogPost = (props: any) => {
    console.log('here')
    const [src, setSrc] = React.useState('')
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
    }, [])  
    console.log(src)
    const width = window.innerWidth;
    const height = window.innerHeight;
    return(
        <>
        {src !== '' && <img className='to-be-animated' src={src} style={{top: height/3.1, left: width/2.1}} />}
        <div id='blog-post' className='blog-post'>
            <h1>hello</h1>
        </div>
        </>
    )
}
export default BlogPost;