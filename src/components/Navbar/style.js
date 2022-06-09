import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavbarSection = styled.div`
    padding: 5px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
`

export const Logo = styled.div`
    width: 50%;
    float: left;
   
    @media (max-width: 991px) {
      width: 100%;
      float: none;
    }
`

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0 15px 0;
     &::after {
        content: ".";
        color: #eb5424;
        display: inline-block;
    }

`

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding:0;
    margin: 20px 0 0 0;
    @media (max-width: 991px) {
      width: 100%;
      float: none;
      margin-top: 20px;
      display: none;
    }
`

export const ListItem = styled.li`
    display: inline-block;
    @media (max-width: 991px) {
        display: block;
        text-align: center;
    }

`
const sharedStyle = css`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 8px;
    cursor: pointer;
    &:hover,&.active {
        color: #eb5424
    }
`
export const Anchor = styled.a`
    ${sharedStyle}
`

export const NavbarLink = styled(NavLink) `
    ${sharedStyle}
`
