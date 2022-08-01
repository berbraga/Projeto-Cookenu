import { BaseDataBase } from "./BaseDataBase";



export class ReceitaDataBase extends BaseDataBase {

    public async CreateReceita(token: string, title: string, description: string, data: string, id: string, id_user: string) {
        try {

            await BaseDataBase.connection('Receita').insert({
                id_receita: id,
                titulo: title,
                descricao: description,
                data_preparo: data,
                id_usuario: id_user
            })


        } catch (error) {
            throw new Error('deu erro no CreateReceita Class')
        }
    }

} 