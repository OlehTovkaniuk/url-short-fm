import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import Button from '../Button';
import LoginButton from './LoginButton';
import { navList } from './navLinksArr';

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
        margin: 1em 0;
    }
`

export default function MobileMenu({ isOpen, isMobile, close }) {
    const menuBgStyles = {
        display: isMobile.display,
        position: 'absolute',
        top: isOpen.top,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'hsl(257, 27%, 26%)',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2em 0 4em',
        width: '95%',
        maxWidth: '550px',
        borderRadius: '1em',
        zIndex: 100,
        transition: '0.3s ease-in-out'
    }

    return (
        <div style={menuBgStyles}>
            <StyledList>{navList.map(item => <ListItem name={item.name} key={item.id} link={item.link} close={close} />)}</StyledList>
            <LoginButton />
            <Button text='Sign Up' />
        </div>
    )
}
