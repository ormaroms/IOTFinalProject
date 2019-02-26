export const STATUS_DATA_FETCHED = "STATUS_DATA_FETCHED"

export function statusDataFectched(data) {
    return { type: STATUS_DATA_FETCHED , data: data }
}