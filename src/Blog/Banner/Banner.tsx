import React from "react";
import './Banner.css'

const Banner = (props: any) => {
    return(
        <div id='banner' className='banner'>
            <span className="banner-title">The Reactive Solutions Full Stack Blog</span>
            <span className="banner-under-title">Articles About Full Stack Applications</span>
            <span className="banner-underline"></span>
        </div>
    )
}
export default Banner;