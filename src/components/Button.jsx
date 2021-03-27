import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 24px;
    background-color: #2acfcf;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.05em;
    border: none;
    border-radius: 20px;
    box-shadow: none;
    cursor: pointer;
    white-space: nowrap;
`;

export default function Button({ text }) {
    return (
        <StyledButton>{text}</StyledButton>
    )
}
