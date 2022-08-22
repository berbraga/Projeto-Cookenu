export default class UserModel {


    constructor(
        private id: string,
        private name: string,
        private password: string,
        private email: string,
        private role: string

    ) { }

    public getRole(): string {
        return this.role;
    }
    public setRole(value: string) {
        this.role = value;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(value: string) {
        this.email = value;
    }
    public getPassword(): string {
        return this.password;
    }
    public setPassword(value: string) {
        this.password = value;
    }
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }
}



