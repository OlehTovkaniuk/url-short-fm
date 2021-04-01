import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    padding: 15px;
    margin: 0 auto;
    max-width: 1115px;
    @media screen and (max-width: 1023px){
        max-width: 550px
    }
`;

export default function Home() {
    return (
        <WrapperDiv>
            <h1>Homepage</h1>
            <p>Lorem ipsum</p>
        </WrapperDiv>
    )
}
