
export function LoginSuccceeded(data) {
    return { type: "LOGIN_SUCCEEDED" , data: data }
}

export function LoginFailed (error) {
    return { type: "LOGIN_FAILED" , error: error }
}