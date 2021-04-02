import React from 'react';
import styled from 'styled-components';
import Illustration from '../../assets/illustrations/illustration-working.svg';
import Button from '../Button';

const Mainer = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const WrapperImg = styled.div`

`;
const StyledImg = styled.img`
    height: 50vh;
    position: relative;
    left: 15%;
`;

const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledHeading = styled.h1`
    font-size: 2.5em;
    text-align: center;
    max-width: 80%;
    margin: 1em auto 0;
    line-height: 1em
`;

const StyledText = styled.p`
    margin: 1em 0;
    color: #9e9aa7;
    text-align: center;
`;

const StyledButton = styled(Button)`
    margin-top: 1em;
    background-color: red;
`;

export default function Showcase() {
    return (
        <Mainer>
            <WrapperImg>
                <StyledImg src={Illustration} alt="" />
            </WrapperImg>
            <WrapperContent>
                <StyledHeading>More than just shorter links</StyledHeading>
                <StyledText>
                    Build your brand’s recognition and get detailed insights
                    on how your links are performing.
                </StyledText>
                <StyledButton text="Get Started" />
            </WrapperContent>
        </Mainer>
    )
}
