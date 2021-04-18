import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Container, StyledDiv, RowDiv,StyledButton,StyledInput,DeleteButton, StyledP} from '../style/styled'
import {useDispatch} from 'react-redux'
import {UPDATE_PIN_NAME, REMOVE_PIN} from '../store/pin/action'

interface pinName{
    id: string
    name: string
}

const Pins = () => {
    const [pin, setPin] = useState<pinName>({id:'',name:'Luck'})
    const [hasPin, setHasPin] = useState<Boolean>(false)

    const pinCollection = useSelector((state:PinState) => state.pinCollection)
    console.log(pinCollection.length)

    console.log(pinCollection)
    const dispatch = useDispatch()
    const uniqid = require('uniqid')

    useEffect(() => {
        console.log("in")
        if(pinCollection.length !==0 )
            setHasPin(true)
    }, [pinCollection])

    const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
        const id = e.currentTarget.id
        const name = e.currentTarget.value
        console.log(id, name)
        setPin({id,name})
        console.log(pin)
        dispatch({type:UPDATE_PIN_NAME, payload:{id:pin.id, name:pin.name}})
    }

    const handleDelete = (e:React.MouseEvent) => {
        const id = e.currentTarget.id
        dispatch({type:REMOVE_PIN, payload:{id}})
    }
    
    return(
         <Container>
             { hasPin?(
            <StyledDiv>
                {pinCollection.map((singlePin) => {

                    return <RowDiv key={uniqid('row')}>
                                <StyledInput key={uniqid('out')} id={singlePin.id} value={singlePin.name} onChange={(e) => handleChange(e)}/>
                                {singlePin.pins.map((pin, index) => {
                                    return <StyledInput key={uniqid('inner')} data-testid={'pin' + index} value={pin} readOnly/>
                                })}
                                <DeleteButton key={uniqid('delete')} id={singlePin.id} data-testid='btnDelete' onClick={(e) => handleDelete(e)}>DELETE</DeleteButton>
                            </RowDiv>
                    

                })}
            </StyledDiv>):(
            <StyledP data-testid='pMsg'>No saved pins!</StyledP>
            )
            }
        </Container>
        
    )
}

export default Pins