import {render, fireEvent, cleanup} from '@testing-library/react'
import {Provider} from "react-redux";

import App from '../App'
import store from '../store'


afterEach(cleanup)

const setup = () => {
    const utils = render(
        <Provider store={store}>
            <App/>
        </Provider>
    )
    const btnGenerate = utils.queryByTestId('btnGenerate')
    const btnSaved = utils.queryByTestId('btnSave')
    const inputPin = utils.queryByTestId('inputPin0')
    const lkSaved = utils.queryByTestId('lkSaved')
    return {
    btnGenerate,
    btnSaved,
    inputPin,
    lkSaved,
    utils
    }
}

it('check home render', () => {
    const {btnGenerate,btnSaved} = setup()
    expect (btnGenerate).toBeTruthy()
    expect (btnSaved).toBeTruthy()
})

it('generate a pin', () => {
    const {btnGenerate,inputPin, utils} = setup()
    
    expect(inputPin).toBeTruthy()
    const preValue = inputPin?.value
    expect(btnGenerate).toBeTruthy()

    if(btnGenerate)
        fireEvent.click(btnGenerate)

    const aftValue = utils.queryByTestId('inputPin0')?.value
    const result = preValue === aftValue? true:false
    expect(result).toBe(false)
    
})

it('save a pin', () => {
    const { btnSaved, inputPin, lkSaved, utils } = setup()

    expect(btnSaved).toBeTruthy()
    if(btnSaved)
        fireEvent.click(btnSaved)
    const savedValue = inputPin?.value

    expect(lkSaved).toBeTruthy()
    if(lkSaved)
        fireEvent.click(lkSaved)

    const pin0 = utils.queryByTestId('pin0')
    expect(pin0.value).toBe(savedValue)
})