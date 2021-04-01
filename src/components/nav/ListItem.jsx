import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledItem = styled.li`
    margin-right: 1em;
    a {
        text-decoration: none;
        color: #9e9aa7;
    }
`;

export default function ListItem({ name, link, close }) {
    return (
        <StyledItem><Link to={link} onClick={close}>{name}</Link></StyledItem>
    )
}
