import styled from 'styled-components'

export const ContactSection = styled.div`
    padding: 50px 0;
    text-align: center
`

export const ContactTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;
    color: #eb5424;
    @media (max-width:575px) {
      font-size: 40px
    }
`

export const Span = styled.span`
    font-weight: normal;
    color: black;
`

export const Form = styled.form`
    width: 70%;
    margin: auto;
    
    @media (max-width:575px) {
      width: 90%
    }
`

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 15px;
    border: 2px solid #ccc;
    margin-bottom: 10px;
    color:#eb5424;
    border-radius: 10px;
`

export const FormInput = styled.div`
    overflow: hidden
`
export const InputText = styled(Input)`
    float: left;
    width: 49%;
      @media (max-width:667px) {
      width: 100% !important
    }
`
export const InputEmail = styled(Input)`
    float: right;
    width: 49%;
      @media (max-width:667px) {
      width: 100% !important
    }
`

export const InputExp = styled(Input)`
    width: 100%;
`
export const TextArea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #f5f5f5;
    padding: 20px;
    color: #eb5424;
    border-radius: 10px;

`

export const InputSubmit = styled(Input)`
    background: #eb5424;
      border: 1px solid #eb5424;
    margin-top: 10px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: all .5s;
    &:hover {
      background: transparent;
      color:#eb5424;
      border: 1px solid #eb5424;
    }
`
