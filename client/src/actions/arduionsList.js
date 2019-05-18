

export function arduionsListLoaded(data) {
    return { type: "ARDUIONS_LIST_LOADED" , data: data }
}

export function deviceActionSucceeded(data) {
    return { type: "DEVICE_ACTION_SUCCEEDED" , data: data }
}

export function deviceAdditoinField(error) {
    return { type: "DEVICE_ADDITION_FIELD" , error: error }
}

