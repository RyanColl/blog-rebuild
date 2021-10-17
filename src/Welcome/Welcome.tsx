import React from "react";
import WelcomeTitle from "./Title/WelcomeTitle";
import './Welcome.css'

const Welcome = (props: any) => {
    return(
        <div id='welcome-page' className='welcome-page'>
            <WelcomeTitle />
        </div>
    )
}
export default Welcome;