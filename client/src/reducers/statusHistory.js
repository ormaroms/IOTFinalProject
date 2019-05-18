

const defaultState = {
}

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case "STATUS_HISTORY_DATA_FETCHED":
            return Object.assign({}, action.data)
        default: return state
    }
}

