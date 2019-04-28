

export function arduionsListLoaded(data) {
    return { type: "ARDUIONS_LIST_LOADED" , data: data }
}

export function addDeviceSucceeded(data) {
    return { type: "ADD_DEVICE_SUCCEEDED" , data: data }
}