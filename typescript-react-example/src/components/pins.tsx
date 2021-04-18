import React, {useState, useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'
import {Container, StyledDiv, RowDiv,StyledInput,NameInput, DeleteButton, StyledP} from '../style/styled'
import {useDispatch} from 'react-redux'
import {UPDATE_PIN_NAME, REMOVE_PIN} from '../store/pin/action'

interface pinName{
    id: string
    name: string
}


const Pins = () => {
    const [localPinCollection, setLocalPinCollection] = useState<Array<Pin>>([])
    const [hasPin, setHasPin] = useState<Boolean>(false)
    const inputRef = useRef()

    const pinCollection = useSelector((state:PinState) => state.pinCollection)
    console.log(pinCollection, localPinCollection)

    const dispatch = useDispatch()
    const uniqid = require('uniqid')

    useEffect(() => {
        setLocalPinCollection(pinCollection)
        if(pinCollection.length !==0 ){
            console.log("in",pinCollection.length)
            setHasPin(true)
        }
            
    }, [pinCollection])

    const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
        const id = e.currentTarget.id
        const name = e.currentTarget.value
        console.log(id, name)
        //update store
        dispatch({type:UPDATE_PIN_NAME, payload:{id, name}})

        //update local
        let temp = localPinCollection.map((pin) => {
            if(pin.id === id)
                pin = {...pin, name}
            return pin
        })
        setLocalPinCollection(temp)
        
    }

    const handleDelete = (e:React.MouseEvent) => {
        const id = e.currentTarget.id
        dispatch({type:REMOVE_PIN, payload:{id}})
    }
    
    return(
         <Container>
             { hasPin?(
            <StyledDiv>
                {localPinCollection.map((singlePin) => {

                    return <RowDiv key={uniqid('row')}>
                                <NameInput key={uniqid('out')} id={singlePin.id} defaultValue={singlePin.name} onBlur={(e) => handleChange(e)}/>
                                {singlePin.pins.map((pin, index) => {
                                    return <StyledInput key={uniqid('inner')} data-testid={'pin'+index} value={pin} readOnly/>
                                })}
                                <DeleteButton key={uniqid('delete')} id={singlePin.id} data-testid='btnDelete' onClick={(e) => handleDelete(e)}>DELETE</DeleteButton>
                            </RowDiv>
                })}
            </StyledDiv>):(
            <StyledP data-testid='pMsg'>No saved pins!</StyledP>)
            }
        </Container>
        
    )
}

export default Pins