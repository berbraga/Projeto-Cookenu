

export class User {

    private name: string;
    private senha: string;
    private token: string;
    private email: string;
    private id_usuario: string;
    private role: string;


    constructor(name: string, senha: string, token: string, email: string, id: string, role: string) {

        this.name = name;
        this.senha = senha;
        this.token = token;
        this.email = email;
        this.id_usuario = id;
        this.role = role;

    }

    public getName() {
        return this.name;
    }
    public getSenha() {
        return this.senha;
    }
    public getToken() {
        return this.token;
    }
    public getId() {
        return this.id_usuario;
    }
    public getRole() {
        return this.role;
    }
    public getEmail() {
        return this.email;
    }

}