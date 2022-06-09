import styled from 'styled-components'

export const AboutSection = styled.div`
    height: 500px;
    background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.4)),url('./images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) {
        height: auto
    }
`

export const AboutInfo = styled.div`
    padding-top: 100px;
    width: 50%;
    float: right;
    
@media (max-width:991px) {
 width: 100%;
        padding: 30px 0;
        float: none
    }
`

export const InfoTitle = styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin:10px 0;
    color: #fff;
`

export const Span = styled.span`
    font-weight: normal
`

export const InfoDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-top:10px;
    margin-bottom: 20px;
    
@media (max-width:991px) {
    font-size: 30px
    }
`

export const InfoDesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
    color: #ccc;
`

export const Anchor = styled.a`
    text-decoration: none;
    color: #eb5424;
`