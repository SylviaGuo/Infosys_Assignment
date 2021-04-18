import {render, fireEvent, cleanup} from '@testing-library/react'
import {Provider} from "react-redux"

import NavBar from './navBar'
import store from '../store'

afterEach(cleanup)

const setup = () => {
    const utils = render(
        <Provider store={store}>
                <NavBar/>
            </Provider>
    )
    const lkGenerate = utils.queryByTestId('lkGenerate')
    const lkSaved = utils.queryByTestId('lkSaved')
    const btnGenerate = utils.queryByTestId('btnGenerate')
    return {
        lkGenerate,
        lkSaved,
        btnGenerate,
        utils
    }
}

it('navBar render', () => {
    const {lkGenerate, lkSaved} = setup()
    expect (lkGenerate).toBeTruthy()
    expect (lkSaved).toBeTruthy()
})

it('navigate to saved page', async() => {
    const {lkSaved, utils} = setup()
    expect (lkSaved).toBeTruthy()
    expect(lkSaved?.textContent).toBe('Saved')

    if(lkSaved){
        await fireEvent.click(lkSaved)
    }   
    const pMsg = utils.queryByTestId('pMsg')
    expect(pMsg).toBeTruthy()
    expect(pMsg?.innerHTML).toBe('No saved pins!')
    
})

it('navigate to home page', () => {
    const {lkGenerate, utils} = setup()

    expect (lkGenerate).toBeTruthy()
    expect(lkGenerate?.textContent).toBe('Generate')
    
    if(lkGenerate){
        fireEvent.click(lkGenerate)
    }   
    const btnGenerate = utils.queryByTestId('btnGenerate')
    expect(btnGenerate).toBeTruthy()
    expect(btnGenerate?.innerHTML).toBe('GENERATE')
    
})