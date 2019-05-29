

export function statusDataFetched(data) {
    return { type: "STATUS_DATA_FETCHED" , data: data }
}

export function resetStatus() {
    return { type: "STATUS_RESET"}
}