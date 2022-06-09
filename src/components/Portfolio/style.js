import styled from 'styled-components'

export const PortfolioSection = styled.div`
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`

export const PortfolioTitle = styled.h2`
    text-align: center;
    font-size: 35px
`

export const Span = styled.span`
    font-weight: normal
`

export const PortfolioList = styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
`

export const PortfolioItem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    cursor: pointer;
    background: ${props => props.active ? '#eb5424' : ''};
    color: ${props => props.active ? '#fff' : '#000'};
`
export const Parent = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const ImageWrapper = styled.div`
    flex: 1 1 calc(100% / 4);
    width: calc(100% / 4);
    float: left;
    font-size: 0;
    position: relative;

    @media (max-width:991px){ 
        flex: 1 1 calc(100% / 3);
        width: calc(100% / 3);
    }
    @media (max-width:667px){ 
        flex: 1 1 calc(100% / 2);
        width: calc(100% / 2);
    }
    @media (max-width:576px){ 
        flex: 1 1 calc(100% / 1);
        width: calc(100% / 1);
    }
    &:hover > div  {
        opacity : 1
    }
`

export const Image = styled.img`
    width: 100%
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0 , 0.5);
    font-size: 15px;
    opacity: 0;
    margin:0;
    transition:  .5s;
`

export const OverlaySpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid #eb5424;
`