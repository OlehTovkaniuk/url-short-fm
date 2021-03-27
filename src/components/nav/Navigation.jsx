import React from 'react'
import styled from 'styled-components';
import ListItem from './ListItem';
import Button from '../Button';

const StyledNav = styled.nav`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 1.5em;
`;

const StyledList = styled.ul`
    display: flex;
    list-style: none;
`;

const RegistrationDiv = styled.div`
    margin-left: auto;
`;

const LoginButton = styled.button`
    background: none;
    border: none;
    padding: 10px 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.05em;
    color:#9e9aa7;
    cursor: pointer;
`;

export default function Navigation() {

    const navList = [
        { id: 1, name: 'Features', link: '/features' },
        { id: 2, name: 'Pricing', link: '/pricing' },
        { id: 3, name: 'Resourses', link: '/resourses' },
    ]

    return (
        <StyledNav>
            <StyledList>
                {navList.map(item => <ListItem name={item.name} key={item.id} link={item.link} />)}
            </StyledList>
            <RegistrationDiv>
                <LoginButton>Login</LoginButton>
                <Button text='Sign Up' />
            </RegistrationDiv>
        </StyledNav>
    )
}
