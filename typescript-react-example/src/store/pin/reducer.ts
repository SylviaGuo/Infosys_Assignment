import Pins from '../../components/pins'
import {ADD_PINS, UPDATE_PIN_NAME, REMOVE_PIN} from './action'
import {Reducer} from 'redux'

const initialState: PinState = {
    pinCollection:[]
}
const PinReducer:Reducer<PinState, PinAction> = (state = initialState, action: PinAction) => {
    switch(action.type){
        case ADD_PINS:
            console.log("add pins")
            return {pinCollection:[...state.pinCollection, {id:action.payload.id, name:'Name',pins:action.payload.pins}]}
        case UPDATE_PIN_NAME:
            console.log("update name")
            console.log(action.payload.name)
            let temp = state.pinCollection.map((pin) => {
                if(pin.id === action.payload.id)
                    pin = {...pin, name: action.payload.name}
                return pin
            })
            return {...state,pinCollection:temp}
        case REMOVE_PIN:
            console.log("remove a pin")
            let pins = state.pinCollection.filter((pin) => {
                return pin.id !== action.payload.id
            })
            return{...state,pinCollection:pins}
        default:
            return {...state}
    }
}

export default PinReducer