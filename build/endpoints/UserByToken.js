"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByToken = void 0;
const UserDataBase_1 = require("../data/UserDataBase");
async function getUserByToken(req, res) {
    try {
        const { autorization } = req.headers;
        if (!autorization) {
            throw new Error('favor digite a autorization');
        }
        console.log('==============');
        console.log(autorization);
        console.log('==============');
        const userDB = new UserDataBase_1.UserDataBase();
        const result = await userDB.getUserByToken(String(autorization));
        const body = {
            id: result.id_usuario,
            name: result.nome,
            email: result.email
        };
        res.status(200).send(body);
    }
    catch (err) {
        res.status(400).send({ message: err.message || err.sqlMessage });
    }
}
exports.getUserByToken = getUserByToken;
//# sourceMappingURL=UserByToken.js.map