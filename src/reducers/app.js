const defaultState = {
    token: localStorage.getItem('TOKEN'),
    user_id: localStorage.getItem('USER_ID')
}

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case "LOGIN_SUCCEEDED":
            localStorage.setItem('TOKEN', action.data.token);
            localStorage.setItem('USER_ID', action.data._id);
            return Object.assign({}, {user_id: action.data._id, token: action.data.token})
        case "LOGOUT":
            localStorage.setItem('TOKEN', undefined);
            return Object.assign({}, {token: undefined})
        default: return state
    }
}

