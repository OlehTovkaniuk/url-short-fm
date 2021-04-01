import React from 'react'
import styled from 'styled-components';
import ListItem from './ListItem';
import Button from '../Button';
import { navList } from './navLinksArr';
import LoginButton from './LoginButton';

const StyledList = styled.ul`
    display: flex;
    list-style: none;
`;

const RegistrationDiv = styled.div`
    margin-left: auto;
`;

export default function DesktopMenu({ showList }) {

    const navStyles = {
        display: showList.display,
        flex: 1,
        alignItems: 'center',
        marginLeft: '1.5em'

    }

    return (
        <nav style={navStyles}>
            <StyledList>
                {navList.map(item => <ListItem name={item.name} key={item.id} link={item.link} />)}
            </StyledList>
            <RegistrationDiv>
                <LoginButton onClick={() => console.log(1)} />
                <Button text='Sign Up' />
            </RegistrationDiv>
        </nav>
    )
}
