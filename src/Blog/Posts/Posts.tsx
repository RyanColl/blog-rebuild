import React from "react";
import './Posts.css'
import { Blogs } from "../../Services/Services";
import { Link } from "react-router-dom";
const Posts = (props: any) => {
    return(
        <div id='posts' className='posts'>
            {Blogs.map((blog, i) => {
                return(<div key={i} className="post">
                    <Link to={`/blog/${blog.id}`}><span className="post-title">{blog.title}</span></Link>
                    <span className="post-date">Updated on: {new Date().toDateString()}</span>
                    <span className="post-summary">{blog.summary}</span>
                    <Link to={`/blog/${blog.id}`}><span className="read-more">KEEP READING <span className="material-icons">keyboard_double_arrow_right</span></span></Link>
                </div>)
            })}
        </div>
    )
}
export default Posts;