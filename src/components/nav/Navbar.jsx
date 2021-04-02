import { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MenuIcon from './MenuIcon';
import MobileMenu from './MobileMenu';

const WrapperDiv = styled.div`
    padding: 15px;
    margin: 0 auto;
    max-width: 1115px;

    @media screen and (max-width: 1023px){
        max-width: 550px
    }
`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function Navbar({ showMenuBool }) {
    const [open, setOpen] = useState(false);

    function handleToggle(e) {
        e.preventDefault();
        setOpen(!open);
    }

    function closeMenu() {
        setOpen(false);
    }

    const showMenuAsList = {
        display: showMenuBool ? 'flex' : 'none'
    }
    const showMenuAsIcon = {
        display: showMenuBool ? 'none' : 'block'
    }
    const isMobile = {
        display: showMenuBool ? 'none' : 'flex'
    }
    const isOpen = {
        top: open ? '5em' : '-80%'
    }

    return (
        <WrapperDiv>
            <StyledHeader>
                <Logo />
                <MobileMenu isOpen={isOpen} isMobile={isMobile} close={closeMenu} />
                <MenuIcon toggle={handleToggle} showIcon={showMenuAsIcon} />
                <DesktopMenu showList={showMenuAsList} />
            </StyledHeader>
        </WrapperDiv>
    )
}
