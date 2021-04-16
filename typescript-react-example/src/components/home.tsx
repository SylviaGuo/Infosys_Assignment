import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Container, InnerWrap, StyledButton} from '../style/styled'
import GeneratePins from './generatePins'


const Home = () => {

    return(
        <Container>
            <InnerWrap>
                <StyledButton>GENERATE</StyledButton>
                <StyledButton>SAVE</StyledButton>
            </InnerWrap>
        </Container>
    )
}

export default Home