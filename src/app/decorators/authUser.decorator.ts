import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { IAuthUser } from "../interfaces/authUser.interface";

export const AuthUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): IAuthUser => {
    const request = context.switchToHttp().getRequest();
    return request?.verifiedUser;  // safely access verifiedUser
  }
);
