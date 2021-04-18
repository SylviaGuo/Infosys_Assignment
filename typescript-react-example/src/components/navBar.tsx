import * as React from 'react'
import styled from 'styled-components'
import Home from './home'
import Pins from './pins'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const StyledNav= styled.nav`
    display:flex;
    width:100%;
    height:32px;
    margin: 0 auto;
`;
const StyledUl = styled.ul`
    display:flex;
    width:100%;
    heigh:auto;
    margin:0em;
    justify-content: start;
    overflow:hidden;
`
const StyledLi = styled.li`
    list-style:none;
    padding:0.4em 1em;
    border-bottom: 2px solid #FFFFFF;
    :hover{
        cursor:pointer;
        border-bottom: 2px solid #3399FF;
        background-color:#F0F0F0;
    }
`
const StyledLink = styled(Link)`
    color:#000000;
    text-decoration:none;
`

const NavBar = () => {
    return(
        <Router>
            <StyledNav>
                <StyledUl>
                    <StyledLi>
                        <StyledLink to='/' data-testid='lkGenerate'>Generate</StyledLink>
                    </StyledLi>
                    <StyledLi>
                         <StyledLink to='/pins' data-testid='lkSaved'>Saved</StyledLink>
                    </StyledLi>
                </StyledUl>
            </StyledNav>
            <Switch>
                <Route path='/' exact>
                    <Home/>
                </Route>
                <Route path='/pins'>
                    <Pins/>
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar