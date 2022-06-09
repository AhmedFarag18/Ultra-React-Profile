import styled  from 'styled-components';

export const HomeSection = styled.div`
    height: 600px;
    background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('./images/Home/home1.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`

export const HomeInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media (max-width: 768px) {
        font-size: 40px;
        color: #fff;
    }
`

export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    @media (max-width: 575px) {
        font-size: 30px;
    }
`

export const HomeInfo = styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`

export const HomeDesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #bbb;
    margin-bottom: 20px;
    @media (max-width: 768px) {
font-size: 15px;
  }
`

export const Span = styled.span`
    color:#fff
`

export const HomeBtn = styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    transition: all .5s ease;

    &:hover {
        background: #fff;
        color: #eb5424
    }
`