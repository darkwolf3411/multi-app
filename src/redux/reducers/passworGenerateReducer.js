import generator from 'generate-password'

const GET_PASSWORDS = 'GET_PASSWORDS'
const SET_AMOUNT = 'SET_AMOUNT'
const SET_USE_NUMBERS = "SET_USE_NUMBERS"
const SET_LENGTH_PASSWORD =  "SET_LENGTH_PASSWORD"
const SET_USE_UPPERCASE = "SET_USE_UPPERCASE"
const SET_USE_SYMBOLS = "SET_USE_SYMBOLS"

let initialState = {
    amount: 1,
    useNumbers: false,
    lengthPassword: 6,
    useUppercase: false,
    useSymbols: false,
    passwords: []
}

const generatePasswordReducer = ( state = initialState, action ) => {
    switch (action.type) {
    case SET_AMOUNT:
        return {
            ...state,
            amount: action.amount
        }
    case SET_USE_NUMBERS:
        return {
            ...state,
            useNumbers: !state.useNumbers
        }
    case SET_LENGTH_PASSWORD:
        return {
            ...state,
            lengthPassword: action.lenght
        }
    case SET_USE_UPPERCASE:
        return {
            ...state,
            useUppercase: !state.useUppercase
        }
    case SET_USE_SYMBOLS:
        return {
            ...state,
            useSymbols: !state.useSymbols
        }
    case GET_PASSWORDS:
        return {
            ...state,
            passwords: generator.generateMultiple(state.amount,{
                length: state.lengthPassword,
                uppercase: state.useUppercase,
                symbols: state.useSymbols,
                numbers: state.useNumbers,
            })
        }
        default:
            return state
    }
}

export const getPasswords = () => ({
    type: GET_PASSWORDS
})
export const setAmount = (amount) => ({
    type: SET_AMOUNT,
    amount
})
export const setUseNumbers = () => ({
    type: SET_USE_NUMBERS
})
export const setLengthPassword = (lenght) => ({
    type: SET_LENGTH_PASSWORD,
    lenght
})
export const setUseUppercase = () => ({
    type: SET_USE_UPPERCASE
})
export const setUseSymbols = () => ({
    type: SET_USE_SYMBOLS
})

export default generatePasswordReducer