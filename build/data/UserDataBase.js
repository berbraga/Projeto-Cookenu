"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataBase = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class UserDataBase extends BaseDataBase_1.BaseDataBase {
    async createUser(id, name, email, password, token, role) {
        try {
            await BaseDataBase_1.BaseDataBase.connection('Usuario').insert({
                id_usuario: id,
                nome: name,
                email: email,
                role: role,
                senha: password,
                token: token
            });
        }
        catch (err) {
            throw new Error(err.sqlMessage || err.message);
        }
    }
    async getUser() {
        try {
            const result = await BaseDataBase_1.BaseDataBase.connection('Usuario');
            return result;
        }
        catch (error) {
            throw new Error('deu erro no getUser Class');
        }
    }
    async getTokenUser(email) {
        try {
            const result = await BaseDataBase_1.BaseDataBase.connection('Usuario').where({ email: email });
            console.log('================');
            console.log(result[0]);
            console.log('================');
            return result[0];
        }
        catch (err) {
            throw new Error(err.sqlMessage || err.message);
        }
    }
    async getUserByToken(token) {
        try {
            const result = await BaseDataBase_1.BaseDataBase.connection('Usuario').where({ token: token });
            return result[0];
        }
        catch (err) {
            throw new Error(err.sqlMessage || err.message);
        }
    }
    async getUserByTokenID(token, id) {
        try {
            const result = await BaseDataBase_1.BaseDataBase.connection('Usuario').where({
                token: token,
                id_usuario: id
            });
            return result[0];
        }
        catch (err) {
            throw new Error(err.sqlMessage || err.message);
        }
    }
}
exports.UserDataBase = UserDataBase;
//# sourceMappingURL=UserDataBase.js.map