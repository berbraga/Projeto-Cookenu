"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCreateRecipe = void 0;
const ReceitaDataase_1 = require("../data/ReceitaDataase");
const generateId_1 = require("../services/generateId");
async function postCreateRecipe(req, res) {
    try {
        const { authorization } = req.headers;
        const { title, description, id_criador } = req.body;
        if (!authorization || !title || !description || !id_criador) {
            throw new Error('favor digitar authorization ou title ou description ou id_criador');
        }
        const s = new generateId_1.IdGenerator();
        const id = s.generateId();
        const dt = new Date();
        const ano = dt.getFullYear();
        const mes = dt.getMonth();
        const dia = dt.getDay();
        const data = `${ano}-${mes}-${dia}`;
        const rcDB = new ReceitaDataase_1.ReceitaDataBase();
        await rcDB.CreateReceita(authorization, title, description, data, id, id_criador);
        res.status(200).send('receita criada');
    }
    catch (err) {
        res.status(400).send({ message: err.message || err.sqlMessage });
    }
}
exports.postCreateRecipe = postCreateRecipe;
//# sourceMappingURL=CreateRecipe.js.map