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
    width:420px;
`
export const StyledButton = styled.button`
    border: 1px solid #3399FF;
    background-color:#FFFFFF;
    border-radius:5px;
    width:180px;
    height:30px;
    font-weight:bold;
    color:#3399FF;
     :hover{
        cursor:pointer;
        color:#FFFFFF;
        background-color:#3399FF
    }
`
