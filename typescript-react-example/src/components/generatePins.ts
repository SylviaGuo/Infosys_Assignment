// const GeneratePins = () =>{
    export const GeneratePins = (amount:number) => {
        let pinsStr:Array<string> = []
        let flag = 0
        while(flag<amount){
            const currentPin = singlePin()
            if(isUnique(pinsStr,currentPin)){
                pinsStr.push(currentPin)  
                flag ++
            }
                
        }
        return pinsStr
    }

    const singlePin = () => {
        const digits:Array<number> = []
        while(digits.length < 4){
            const number = Math.floor(Math.random()*10)
            if(!isValidDigit(digits, number))
                digits.push(number)
        }     
        return pinString(digits)
    }

    const isValidDigit = (digits: Array<number>, current: number) => {
        if (digits.length !== 0){
            //Check if the last number in the array is the same as the current number
            if(digits[digits.length-1] === current)
                return true
            //check if digits are ascending or descending
            else{
                if(digits.length === 2){
                    if(digits[1] +1 === current || digits[1] -1 === current)
                        return true
                    return false
                }

                return false
            }
        }
        return false    
    }

    //check if the pin is unique
    const isUnique = (pins:Array<string>, current:string) => {
        if(pins.includes(current))
            return false
        return true
    }

    //convert int array to a string
    const pinString = (digits:Array<number>) => {
        let pinStr = ''
        for(var i = 0; i<digits.length; i++){
            pinStr += digits[i].toString()
        }
        return pinStr
    }
// }

// export default GeneratePins