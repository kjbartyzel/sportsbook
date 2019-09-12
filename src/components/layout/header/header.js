import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
box-shadow: inset 0 -1px 0 rgba(255,255,255, 0.12);
background-color: #272c33;
margin-bottom: 30px;
@media(max-width: 768px){
    margin-bottom: 0;
}
`;
const HeaderInnerWrapper = styled.div`
max-width: 1440px;
margin: 0 auto;
`;

const LogoWrapper = styled.div`
min-height: 80px;
position: relative;
> a {
    position:absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
}
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderInnerWrapper>
                <LogoWrapper>
                    <Link to='/'>Sportsbook</Link>
                </LogoWrapper>
            </HeaderInnerWrapper>
        </HeaderWrapper>
    )
}

export default Header;