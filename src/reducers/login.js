const defaultState = {
}

export default function reduce(state = defaultState, action) {
    debugger;
    switch (action.type) {
        case "LOGIN_FAILED":
            return Object.assign({},  {errorMsg: action.error})
        default: return state
    }
}