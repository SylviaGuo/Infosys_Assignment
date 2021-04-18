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

it('delete a pin', () => {
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

    const btnDelete = utils.queryByTestId('btnDelete')
    expect(btnDelete).toBeTruthy()
    if(btnDelete)
        fireEvent.click(btnDelete)

    expect(utils.queryByTestId('pin0')).toBeNull()
})