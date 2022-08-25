"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const token_1 = require("./../services/token");
const UserDataBase_1 = require("./../data/UserDataBase");
const generateId_1 = require("./../services/generateId");
const hashes_1 = require("../services/hashes");
async function signup(req, res) {
    try {
        const { name, email, password, role } = req.body;
        console.log("passou aqui3");
        if (!name || !email || !password || !role) {
            console.log("passou aqui");
            throw new Error(' insira completo: name, email, password ');
        }
        console.log("passou aqui 2");
        const idGenerator = new generateId_1.IdGenerator();
        const id = idGenerator.generateId();
        const a = { id: id, role: role };
        const t = new token_1.Authenticator();
        const token = t.generateToken(a);
        console.log('================');
        console.log(token);
        console.log(id);
        console.log('================');
        const userDB = new UserDataBase_1.UserDataBase();
        const novaSenha = new hashes_1.hashManager();
        const senha = await novaSenha.hash(password);
        console.log(senha);
        await userDB.createUser(id, name, email, String(senha), token, role);
        res.status(200).send({ "token": token });
    }
    catch (err) {
        res.status(400).send({ message: err.message || err.sqlMessage });
    }
}
exports.signup = signup;
//# sourceMappingURL=signup.js.map