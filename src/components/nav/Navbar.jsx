import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import MenuBtn from './MenuBtn';

const WrapperDiv = styled.div`
    padding: 15px;
    margin: 0 auto;
    max-width: 1115px;
`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function Navbar() {

    return (
        <WrapperDiv>
            <StyledHeader>
                <Logo />
                <MenuBtn />
                <Navigation />
            </StyledHeader>
        </WrapperDiv>
    )
}
