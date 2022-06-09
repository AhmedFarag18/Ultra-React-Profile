import styled from 'styled-components'

export const SocialSection = styled.div`
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const Social = styled.div`
    flex: 1 1 calc(100% / 3);
    width:  calc(100% / 3);
    float: left;
    box-sizing: border-box;
    padding: 50px;
    
    background: ${ props => props.item === 1 ? '#3b5998' : ''};
    background: ${ props => props.item === 2 ? '#498cbf' : ''};
    background: ${ props => props.item === 3 ? '#cc2127' : ''};
    @media (max-width:991px) {
    flex: 1 1 calc(100% / 1);
    width:  calc(100% / 1);
    }
`

export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 27px;
`

export const SocialDesc = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float:left
`

export const Span = styled.span`
    display: block;
    margin-bottom: 8px
`

export const SpanInfo = styled.span`
    font-weight: normal
`

