import React, {useState, useEffect} from 'react'
import {Container, InnerWrap, StyledButton,StyledInput} from '../style/styled'
import {GeneratePins} from './generatePins'
import {useDispatch} from 'react-redux'
import {ADD_PINS} from '../store/pin/action'

interface pinNode {
    id: string,
    pins: string[]
    
}

const Home = () => {

    const [pinValue, setPinValue] = useState<pinNode>({id:'',pins:[]})
    const dispatch = useDispatch()
    const uniqid = require('uniqid')
    
    useEffect(() => {
        handleGenerate()
    },[])

    const handleGenerate = () => {
        const pins:Array<string> = GeneratePins(5)
        const id = uniqid('pins-')
        setPinValue({...pinValue,pins,id})
    }

    return(
        <Container>
            <InnerWrap>
         
                {pinValue.pins.map((pin, index) => {
                    return <StyledInput key={uniqid()} value={pin} data-testid={'inputPin'+ index} readOnly/>
                })}
          
                <StyledButton onClick={handleGenerate} data-testid="btnGenerate">GENERATE</StyledButton>
                <StyledButton onClick={() => dispatch({type:ADD_PINS, payload:{id:pinValue.id, pins:pinValue.pins}})} data-testid="btnSave">SAVE</StyledButton>
               
            </InnerWrap>
        </Container>
    )
}

export default Home