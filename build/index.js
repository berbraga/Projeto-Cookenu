"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const signup_1 = require("./endpoints/signup");
const getUser_1 = require("./endpoints/getUser");
const Login_1 = require("./endpoints/Login");
const UserByToken_1 = require("./endpoints/UserByToken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log('bernardo ==========================================');
app_1.default.post('/signup', signup_1.signup);
app_1.default.get('/user', getUser_1.getUser);
app_1.default.post('/login', Login_1.Login);
app_1.default.post('/recipe', Login_1.Login);
app_1.default.get('/user/profile', UserByToken_1.getUserByToken);
app_1.default.get('/user/:id', UserByToken_1.getUserByToken);
//# sourceMappingURL=index.js.map