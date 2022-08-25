"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, senha, token, email, id, role) {
        this.name = name;
        this.senha = senha;
        this.token = token;
        this.email = email;
        this.id_usuario = id;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getSenha() {
        return this.senha;
    }
    getToken() {
        return this.token;
    }
    getId() {
        return this.id_usuario;
    }
    getRole() {
        return this.role;
    }
    getEmail() {
        return this.email;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map