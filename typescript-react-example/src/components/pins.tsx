import React, {useState, useCallback} from 'react'
import {useSelector} from 'react-redux'
import {Container, StyledDiv, RowDiv,StyledButton,StyledInput,DeleteButton} from '../style/styled'
import {useDispatch} from 'react-redux'
import {UPDATE_PIN_NAME, REMOVE_PIN} from '../store/pin/action'

interface pinName{
    id: string
    name: string
}

const Pins = () => {
    const [pin, setPin] = useState<pinName>({id:'',name:'Luck'})
    const [state, updateState] = useState({update:''});
    const pinCollection = useSelector((state:PinState) => state.pinCollection)
    const forceUpdate = useCallback(() => updateState({update:'true'}), []);
    console.log(pinCollection)
    const dispatch = useDispatch()
    const uniqid = require('uniqid')

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
        forceUpdate()
    }
    
    return(
         <Container>
            <StyledDiv>
                {pinCollection.map((singlePin) => {

                    return <RowDiv>
                                <StyledInput key={uniqid('out')} id={singlePin.id} value={singlePin.name} onChange={(e) => handleChange(e)}/>
                                {singlePin.pins.map((pin) => {
                                    return <StyledInput key={uniqid('inner')} value={pin} readOnly/>
                                })}
                                <DeleteButton key={uniqid('delete')} id={singlePin.id} onClick={(e) => handleDelete(e)}>DELETE</DeleteButton>
                            </RowDiv>
                    

                })}
            </StyledDiv>
        </Container>
        
    )
}

export default Pins