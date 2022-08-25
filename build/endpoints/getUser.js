"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const UserDataBase_1 = require("../data/UserDataBase");
async function getUser(req, res) {
    try {
        console.log('berardo ==-=-=-=-=-=-=');
        const userDB = new UserDataBase_1.UserDataBase();
        const result = await userDB.getUser();
        console.log(result);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({ message: err.message || err.sqlMessage });
    }
}
exports.getUser = getUser;
//# sourceMappingURL=getUser.js.map