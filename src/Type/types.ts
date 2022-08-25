

export type authenticationData = {
    id: string
    role: string // role == tipo do usuario
}

export type userController = {
    name: string,
    email: string,
    password: string
}

export type userLogin = {
    email: string
    password: string
}