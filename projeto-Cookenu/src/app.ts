import cors from "cors";
import express, { Express } from "express";
import { AddressInfo } from "net";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
})

export default app