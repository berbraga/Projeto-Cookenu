"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const UserDataBase_1 = require("../data/UserDataBase");
async function Login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Digite o email e/ou senha');
        }
        const userDB = new UserDataBase_1.UserDataBase();
        const result = await userDB.getTokenUser(email);
        console.log(result.token);
        res.send({ token: result.token });
    }
    catch (err) {
        res.status(400).send({ message: err.message || err.sqlMessage });
    }
}
exports.Login = Login;
//# sourceMappingURL=Login.js.map