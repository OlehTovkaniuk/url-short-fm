import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import LogoImg from '../../assets/logo.svg';

const StyledLogoDiv = styled.div`
        transform: translateY(0.3em);
        cursor: pointer;
    `;

export default function Logo() {

    return (
        <StyledLogoDiv className="logo">
            <Link exact="true" to="/">
                <img src={LogoImg} alt="logo - Shortly" />
            </Link>
        </StyledLogoDiv>
    )
}
