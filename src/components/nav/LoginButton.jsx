import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
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

export default function LoginButton() {
    return (
        <StyledButton> Login</StyledButton>
    )
}
