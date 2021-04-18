interface Pin{
    id: string
    name: string
    pins: Array<string>
}

type PinState = {
    pinCollection: Pin[]
}

type PinAction = {
    type: string
    payload: Pin
}