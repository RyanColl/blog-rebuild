import React from "react";
import './Nav.css'
import {Link} from 'react-router-dom'
const linksArray = [
    {
        id: 1,
        location: 'home',
        pressed: true
    },
    {
        id: 2,
        location: 'blog',
        pressed: false
    },
    {
        id: 3,
        location: 'work',
        pressed: false
    },
    {
        id: 4,
        location: 'tools',
        pressed: false
    },
    {
        id: 5,
        location: 'about',
        pressed: false
    },
    
]

const Nav = (props: any) => {
    const [links, setLinks] = React.useState(linksArray)
    return(
        <div id='nav' className='navbar'>
            <div className='title'><h3>REACTIVE SOLUTIONS</h3></div>
            <div className='links'>
                {links.map(link => {
                    return(<div className={`link-btn ${link.pressed && 'link-pressed'}`}>
                        <Link to={`/${link.location}`}><span>{link.location.toUpperCase()}</span></Link>
                        {link.pressed && <span className='underline'></span>}
                    </div>)
                })}
            </div>
        </div>
    )
}
export default Nav;