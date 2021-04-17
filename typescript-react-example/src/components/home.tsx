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
         
                {pinValue.pins.map((pin) => {
                    return <StyledInput key={uniqid()} value={pin} readOnly/>
                })}
          
                <StyledButton onClick={handleGenerate}>GENERATE</StyledButton>
                <StyledButton onClick={() => dispatch({type:ADD_PINS, payload:{id:pinValue.id, pins:pinValue.pins}})}>SAVE</StyledButton>
               
            </InnerWrap>
        </Container>
    )
}

export default Home