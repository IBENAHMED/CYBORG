import React from 'react'

const NavItem = (props) => {
    return (
        <li className="nav-item">
            {props.children}
        </li>
    )
}

export default NavItem
