import React from "react";
import { Link } from "react-router-dom";
const WelcomeTitle = (props: any) => {
    const scrollDown = () => {
        
    }
    return(
        <div id='welcome-title' className='welcome-title'>
            <span className='welcome'>WELCOME</span>
            <span className='to'>TO</span>
            <span className='possession'>REACTIVE SOLUTIONS'</span>
            <div className='welcome-banner'><span>FULL</span><span>STACK</span><span>BLOG</span></div>
            <span className='enjoy'>Enjoy a Large Repository of Online <Link to='/blog'><b>Blogs</b></Link></span>
            <a onClick={scrollDown} href='#'><span className='featured'>FEATURED</span></a>
        </div>
    )
}
export default WelcomeTitle;