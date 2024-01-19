import auth from "@config/auth";
import AppError from "@shared/erros/AppErrors";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
  }

export default  function authenticated(request:Request,response:Response,next:NextFunction){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError('JWT token is missing.')
    }
    const [,token] = authHeader.split(' ')

try {
 const decodeToken = verify(token,auth.jwt.secret)

 const {sub} = decodeToken as ITokenPayload;

 request.user = {
    id: sub
 }
 console.log(decodeToken)
 return next()
} catch (error) {
    throw new AppError('Invalid JWT token.')
}
}
