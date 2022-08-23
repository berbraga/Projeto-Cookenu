import { userController } from './Type/types';
import { app } from './app'

// import { signup } from './endpoints/signup'
// import { getUser } from './endpoints/getUser';
// import { Login } from './endpoints/Login';
// import { getUserByToken } from './endpoints/UserByToken';
// // import { getUser } from './endpoints/getUser';


import dotenv from 'dotenv'
import UserController from './Controller/UserController';


dotenv.config()


const userController = new UserController()


app.post('/signup', userController.Signup)
app.post('/login', userController.Login)

app.get('/user', userController.GetUser)
app.get('/user/other', userController.GetOtherUser)




// app.post('/signup', signup);
// app.get('/user', getUser)
// app.post('/login', Login)

// app.post('/recipe', Login)

// app.get('/user/profile', getUserByToken)
// app.get('/user/:id', getUserByToken)

