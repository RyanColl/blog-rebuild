import React, { useEffect, useState } from "react";
import './Nav.css'
import {Link} from 'react-router-dom'
import store from "../Redux/store";

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
    useEffect(() => {
        
        store.subscribe(() => {
            let [loc] = store.getState()
           
            let assembly = links.map(link => {
                return {
                    id: link.id,
                    location: link.location,
                    pressed: (loc.substr(1) === link.location || (loc === '/' && link.location === 'home')) ? true : false
                }
            })
            setLinks(assembly)
        })
    })
    return(
        <div id='nav' className='navbar'>
            <Link to='/'><div className='title'><h3>REACTIVE SOLUTIONS</h3></div></Link>
            <div className='links'>
                {links.map((link, i) => {
                    return(<div key={i} className={`link-btn ${link.pressed && 'link-pressed'}`}>
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