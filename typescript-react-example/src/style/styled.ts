import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    width: 100%;
    top: 32px;
    left: 0;
    bottom: 0;
    display:flex;
    justify-content:center;
    margin: 0 auto;
    padding:2em;
    background-color:#F5F5F5;
    border-top:2px solid #E8E8E8;
    background-size: cover;

`
export const InnerWrap = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:100px;
    flex-wrap: wrap;
    width:460px;
    height:160px;
`
export const StyledButton = styled.button`
    border: 1px solid #3399FF;
    background-color:#FFFFFF;
    border-radius:5px;
    width:180px;
    height:36px;
    font-weight:bold;
    color:#3399FF;
     :hover{
        cursor:pointer;
        color:#FFFFFF;
        background-color:#3399FF
    }
`
export const StyledInput = styled.input`
    width:80px;
    height:40px;
    text-align:center;
    border:1px solid #E8E8E8;
    font-size:1.2em;
`
export const StyledDiv = styled.div`
    display:flex;
    justify-content:center;
    align-content: flex-star;
    width:680px;
    flex-wrap: wrap;
`
export const RowDiv = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:50px;
`
export const DeleteButton = styled.button`
    border: 1px solid #990033;
    background-color:#990033;
    border-radius:5px;
    width:100px;
    height:30px;
    font-weight:bold;
    color:#FFFFFF;
     :hover{
        cursor:pointer;
        color:#FFFFFF;
        background-color:#990000
    }
`
export const StyledP = styled.p`

`