const defaultState = {
    token: localStorage.getItem('TOKEN')
}

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case "LOGIN_SUCCEEDED":
            localStorage.setItem('TOKEN', action.token);
            return Object.assign({}, {token: action.data.token})
        default: return state
    }
}

