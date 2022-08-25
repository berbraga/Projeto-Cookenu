"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOtherUser = void 0;
const UserDataBase_1 = require("../data/UserDataBase");
async function getOtherUser(req, res) {
    try {
        const id = req.params.id;
        const { authorization } = req.headers;
        if (!authorization || !id) {
            throw new Error('favor digite a authorization o id');
        }
        console.log('==============');
        console.log(authorization);
        console.log('==============');
        const userDB = new UserDataBase_1.UserDataBase();
        const result = await userDB.getUserByTokenID(String(authorization), String(id));
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
exports.getOtherUser = getOtherUser;
//# sourceMappingURL=getOtherUser.js.map