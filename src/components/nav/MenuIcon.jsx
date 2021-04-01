import React from 'react';
import { FaBars } from 'react-icons/fa';

export default function MenuIcon({ showIcon, toggle }) {
    const wrapperStyles = {
        display: showIcon.display,
        position: 'relative',
        top: '5px',
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '1.8em',
        color: '#9e9aa7'
    }

    return (
        <div style={wrapperStyles} onClick={toggle}>
            <FaBars />
        </div>
    )
}
