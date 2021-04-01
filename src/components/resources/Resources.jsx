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

export default function Resources() {
    return (
        <WrapperDiv>
            <h2 style={{ textAlign: 'center' }}>Resources page</h2>
            <p style={{ maxWidth: '550px', margin: '2em auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minima quia, recusandae fugiat consequuntur itaque labore et saepe nostrum aliquam ipsa iste earum sit tenetur non autem numquam blanditiis placeat!</p>

        </WrapperDiv>
    )
}
