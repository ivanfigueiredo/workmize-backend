import { Request, Response} from 'express';
import { NextFunction } from "express";
import { verify } from "jsonwebtoken"


export function verifyJWT(request: Request, response: Response, next: NextFunction){
    const token = request.headers.authorization;

    if(!token){
        return response.status(401).send({error: 'No token provided.'})
    }

    verify(token, `${process.env.KEY_AUTHORIZATION}`, function(err, decoded){
        if(err){
            return response.status(500).send({error: 'Failed to authenticate token.'})
        }

        request.params = {
            id: decoded.id,
            isAdmin: decoded.isAdmin
        }

        next();
    })
}
