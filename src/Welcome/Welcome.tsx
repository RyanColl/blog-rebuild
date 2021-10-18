import React, { useEffect } from "react";
import store from "../Redux/store";
import * as actions from "../Redux/actions";
import BlogDisplay from "./Blogs/BlogDisplay";
import WelcomeTitle from "./Title/WelcomeTitle";
import './Welcome.css'
import { pathName } from "../Services/Services";

const Welcome = (props: any) => {
    useEffect(() => {
        store.dispatch(actions.location(pathName))
    })
    return(
        <div id='welcome-page' className='welcome-page'>
            <WelcomeTitle />
            <BlogDisplay />
        </div>
    )
}
export default Welcome;