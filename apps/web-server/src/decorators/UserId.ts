import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { Request, Response } from "express";

interface User {
    sub: string
  }

export type UserId = string

export const UserId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request: Request = ctx.switchToHttp().getRequest()
        const response: Response = ctx.switchToHttp().getResponse()
        const user = request.user as User

        if(!user) {
            response.status(401).send()
        }

        return user.sub
    }
)