import { IdGenerator } from './../Services/GenerateId';
import { authenticationData, userController, userLogin } from "../Type/types";
import UserModel from '../Model/UserModel';
import { userRole } from '../Type/Enum/EnumUser';
import { UserDataBase } from '../Data/UserDataBase';
import { Authenticator } from '../Services/GenerateToken';





export default class UserBissiness {

    public async Signup(userController: userController) {
        const { name, email, password } = userController

        if (!name || !email || !password) {
            console.log("passou aqui");
            throw new Error(' insira completo: name, email, password ')
        }
        if (password.length < 6) {
            throw new Error(' falta caracter no password , deve conter no minimo 6 caracteres ')
        }

        const gId = new IdGenerator()

        const id = gId.generateId()
        const role: userRole = userRole.NORMAL

        const userModel = new UserModel(id, name, password, email, role)

        const userDB = new UserDataBase()

        await userDB.createUser(userModel)
        // console.log('passou bussiness');

        const au: authenticationData = { id, role }
        const dotoken = new Authenticator()

        const token = dotoken.generateToken(au)

        return token


    }

    public async Login(userControl: userLogin) {

        const { email, password } = userControl

        if (!email || !password) {
            throw new Error('Digite o email e/ou senha')
        }
        const userDB = new UserDataBase()
        const userSearch = await userDB.getUserByEmail(email)
        console.log(userSearch);


        if (!userSearch.email) {
            throw new Error('usuario nao existe')
        }
        if (password !== userSearch.password) {
            throw new Error('senha incorreta')
        }
        if (email !== userSearch.email) {
            throw new Error('senha incorreta')
        }
        console.log({ id: userSearch.id_usuario, role: userSearch.role });
        const au: authenticationData = { id: userSearch.id_usuario, role: userSearch.role }
        const dotoken = new Authenticator()

        const token = dotoken.generateToken(au)

        return token


    }



    public async GetUser() {

        const userDB = new UserDataBase()

        const result = await userDB.getUser()

        return result


    }
    public async GetOtherUser(authorization: string) {

        if (!authorization) {
            throw new Error('porfafor insira uma authorization')
        }

        const dotoken = new Authenticator()
        const info: authenticationData = dotoken.getTokenData(authorization)

        console.log(info.role);

        const userDB = new UserDataBase()

        const result = await userDB.getUserById(info.id)

        return result


    }


}