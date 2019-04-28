

const defaultState = {
}

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case "ARDUIONS_LIST_LOADED":
            return Object.assign({}, action.data)
        default: return state
    }
}

