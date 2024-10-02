import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const CustomNavlink = ({to, children, extraClasses}) => {
    const getActiveStyles = ({ isActive }) => (
        `${extraClasses} ${isActive ? "border-b-4 border-b-brandPrimary text-brandPrimary font-medium" : 
            "text-gray-900 hover:text-green-700"} `
    )
    return (
        <NavLink 
            to={to}
            className={getActiveStyles}
        >
            { children }
        </NavLink>
    )
}

export default CustomNavlink