import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    padding: 15px;
    margin: 0 auto;
    max-width: 1115px;
`;

export default function Pricing() {
    return (
        <WrapperDiv>
            <h2 style={{ textAlign: 'center' }}>Pricing page</h2>
        </WrapperDiv>
    )
}