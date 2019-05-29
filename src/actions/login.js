
export function LoginSuccceeded(data) {
    return { type: "LOGIN_SUCCEEDED" , data: data }
}

export function Logout() {
    return { type: "LOGOUT" }
}

export function LoginFailed (error) {
    return { type: "LOGIN_FAILED" , error: error }
}