import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const { name } = useSelector(state => state.auth)
    return (
        <div className="navbar">
            <h2>Navbar</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard/user"> { name }</Link>
                </li>
                <li>              
                    <button>Salir</button>
                </li>
          </ul>
        </div>
    )
}
