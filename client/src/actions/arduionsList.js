

export function arduionsListLoaded(data) {
    return { type: "ARDUIONS_LIST_LOADED" , data: data }
}

export function deviceActionSucceeded(data) {
    return { type: "DEVICE_ACTION_SUCCEEDED" , data: data }
}
