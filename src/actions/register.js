
export function RegisterSuccceeded(data) {
    debugger;
    return { type: "REGISTER_SUCCEEDED" , data: data }
}

export function RegisterFailed (error) {
    return { type: "REGISTER_FAILED" , error: error }
}