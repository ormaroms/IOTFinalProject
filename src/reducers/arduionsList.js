

const defaultState = {
}

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case "ARDUIONS_LIST_LOADED":
            return Object.assign({}, action.data)
        case "DEVICE_ACTION_SUCCEEDED":
            return Object.assign({}, action.data)
        case "DEVICE_ADDITION_FIELD":
            return Object.assign({}, {errorMsg: action.error})
        case "UPDATE_ARDUINO_ID":
            return Object.assign({}, action.data)
        default: return state
    }
}

