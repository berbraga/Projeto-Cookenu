import app from './app'

import { signup } from './endpoints/signup'
import { getUser } from './endpoints/getUser';
import { Login } from './endpoints/Login';
import { getUserByToken } from './endpoints/UserByToken';
// import { getUser } from './endpoints/getUser';


import dotenv from 'dotenv'


dotenv.config()

// cadastro => só precisa informar: o e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 caracteres.

// login => Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação.

// Os endpoints de login e cadastro devem retornar um token.

// Informações do próprio perfil => A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco (id e email)

// Criar receitas => O usuário deve poder criar uma receita. A receita deve ter os seguintes atributos: título, descrição/modo de preparo e data de criação

// Seguir usuário => Um usuário deve poder seguir outros usuários. Para isso, ele deve fornecer o id do usuário que deseja seguir. Atente-se que essa funcionalidade se assemelha ao do instagram: um usuário seguir outro, não significa que "esse outro" está seguindo o primeiro.

// Feed => Um usuário deve poder visualizar as receitas criadas pelos usuários que ele segue. As receitas devem estar ordenadas pela data de criação.


// const idGenerator = new IdGenerator();
// const id = idGenerator.generateId();

// const a: authenticationData = { id: id, role: 'bernardo' } // o que 'e o role ????

// const t = new Authenticator();
// const token = t.generateToken(a)
// console.log('================');
// console.log(token);
// console.log('================');
// console.log(id);
// console.log('================');

console.log('bernardo ==========================================');

app.post('/signup', signup);
app.get('/user', getUser)
app.post('/login', Login)

app.post('/recipe', Login)

app.get('/user/profile', getUserByToken)
app.get('/user/:id', getUserByToken)





// token de controle
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhNTQ4YTJlLTA4NDktNDUyNy05N2YzLWRlNDE1ZGU3MTNmNyIsInJvbGUiOiJub3JtYSIsImlhdCI6MTY1NjcwMDIxMywiZXhwIjoxNjU3MzU1NDEzfQ.- F9Vms1dqfp25 - YBaAYZSFx3orhW8kAD_W0AziswV0A



