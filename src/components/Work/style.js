import styled from 'styled-components'

export const WorkSection = styled.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
`
export const Parent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3%;
    flex-wrap: wrap;

`

export const WorkTitle = styled.h2`
    font-size: 60px; 
`

export const Span = styled.span`
    font-weight: normal
`
export const WorkPart = styled.div`
    margin-top: 20px;
    flex: 1 1 calc(100% / 3 - 3%);
    width: calc(100% / 3 - 3%);
    height: auto;
    padding: 100px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    text-align: center;
    transition: 0.5s;

    @media(max-width: 991px) {
        flex: 1 1 calc(100% / 2 - 3%);
        width: calc(100% / 2 - 3%);
    } 
    @media (max-width: 576px) {
        flex: 1 1 calc(100% / 1 - 3%);
        width: calc(100% / 1 - 3%);
    } 

    &:hover{
        box-shadow:0 10px 40px -15px rgb(0 0 0 / 25%);
    }
    &:hover i{
        background-color: #eee;
        color: #eb5424;
        transform: rotate(360deg);
    }

`

export const Icon = styled.i`
    color: #888;
    margin-bottom: 20px;
    color: #fff;
    margin: 30px 0;
    position: relative;
    display: inline-block;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color: #eb5424;
    border-radius: 50%;
    transition: 0.5s;
`

export const PartTitle = styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`

export const Line = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const PartDesc = styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px
`