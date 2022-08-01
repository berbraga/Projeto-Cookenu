import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

import dotenv from "dotenv";
dotenv.config()

export class Authenticator {

    generateToken(info: authenticationData): string {

        const token = jwt.sign(
            {
                id: info.id,
                role: info.role
            },
            process.env.JWT_KEY as string,
            { expiresIn: process.env.JWT_EXPIRATION_TIME }
        )
        return token;
    }

    getTokenData(token: string): authenticationData {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload as authenticationData

    }
}