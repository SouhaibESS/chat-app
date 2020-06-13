const TOKEN_KEY = 'jwt'
const SECOND = 1000 // one second in miliseconds

export const login = item  => {
    const now = new Date()
    
    const token = {
        value: item.token,
        tokenType: item.tokenType,
        expiry: now.getTime() + item.expiresIn * SECOND
    }

    localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}