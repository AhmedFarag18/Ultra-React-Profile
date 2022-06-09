import React from 'react'
import {NavbarSection,Anchor,ListItem,Logo,LogoText,UlList,NavbarLink} from "./style"



const Navbar = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Portfolio</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><NavbarLink to="/">Home</NavbarLink></ListItem>
                    <ListItem><Anchor href="/">Work</Anchor></ListItem>
                    <ListItem><Anchor href="/">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="/">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="/">About</Anchor></ListItem>
                    <ListItem><NavbarLink to="/contact">Contact</NavbarLink></ListItem>
                </UlList>
                
            </div>
        </NavbarSection>
    )
}

export default Navbar