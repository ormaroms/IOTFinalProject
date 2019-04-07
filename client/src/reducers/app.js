const defaultState = {
}

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case "LOGIN_SUCCEEDED":
            return Object.assign({}, action.data)
        default: return state
    }
}

