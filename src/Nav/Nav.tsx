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
    const linkPress = (location: any) => {
        let assembly = links.map(link => {
            return {
                id: link.id,
                location: link.location,
                pressed: (location === link.location) ? true : false
            }
        })
        setLinks(assembly)
    }
    return(
        <div id='nav' className='navbar'>
            <div className='title'><h3>REACTIVE SOLUTIONS</h3></div>
            <div className='links'>
                {links.map(link => {
                    return(<div className={`link-btn ${link.pressed && 'link-pressed'}`}>
                        <Link 
                        onClick={() => {linkPress(link.location)}} 
                        to={link.location === 'home' ? '/' : `/${link.location}`}
                        >
                            <span>{link.location.toUpperCase()}</span>
                            {link.pressed && <span className='underline'></span>}
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}
export default Nav;