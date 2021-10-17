import React from "react";
import BlogDisplay from "./Blogs/BlogDisplay";
import WelcomeTitle from "./Title/WelcomeTitle";
import './Welcome.css'

const Welcome = (props: any) => {
    return(
        <div id='welcome-page' className='welcome-page'>
            <WelcomeTitle />
            <BlogDisplay />
        </div>
    )
}
export default Welcome;