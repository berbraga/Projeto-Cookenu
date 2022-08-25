"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceitaDataBase = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class ReceitaDataBase extends BaseDataBase_1.BaseDataBase {
    async CreateReceita(token, title, description, data, id, id_user) {
        try {
            await BaseDataBase_1.BaseDataBase.connection('Receita').insert({
                id_receita: id,
                titulo: title,
                descricao: description,
                data_preparo: data,
                id_usuario: id_user
            });
        }
        catch (error) {
            throw new Error('deu erro no CreateReceita Class');
        }
    }
}
exports.ReceitaDataBase = ReceitaDataBase;
//# sourceMappingURL=ReceitaDataase.js.map