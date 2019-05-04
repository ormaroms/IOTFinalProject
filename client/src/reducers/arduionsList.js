

const defaultState = {
}

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case "ARDUIONS_LIST_LOADED":
            debugger;
            return Object.assign({}, action.data)
        case "DEVICE_ACTION_SUCCEEDED":
            debugger;
            return Object.assign({}, action.data)
        default: return state
    }
}

