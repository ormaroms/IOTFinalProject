

const defaultState = {
    lightStatus: false,
    gasStatus: false,
    arduinoID: "1",
}

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case "STATUS_DATA_FETCHED":
            return Object.assign({}, action.data)
        default: return state
    }
}

