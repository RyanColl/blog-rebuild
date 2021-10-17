import React from "react";
import './BlogDisplay.css'
import { blogList } from "../../Services/Services";
import { Link } from "react-router-dom";
import store from "../../Redux/store";
import * as actions from '../../Redux/actions'
const BlogDisplay = (props: any) => {
    const linkPress = (id: string) => {
        store.dispatch(actions.location(id))
    }
    return(
        <div id='blog-display' className='blog-display'>
            {blogList.map(blogPost => {
                return(
                    <Link onClick={() => {linkPress('/blog')}} key={blogPost.id} to={`/blog/${blogPost.id}`}>
                        <div className='blog-link'>
                            <div className='blog-link-img-title'>
                                <div className="blog-logo-div">
                                    <img className={`blog-logo-img-${blogPost.id}`} src={`${blogPost.imgUrl}`} />
                                </div>
                                <div className="blog-link-title-div"><span className='blog-link-title-text'>{blogPost.title}</span></div>
                                
                            </div>
                            <div className="blog-link-arrow"><div className="arrow"></div></div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
export default BlogDisplay;