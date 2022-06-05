import { Request as ExpressRequest } from 'express';
import { User } from 'src/user';

export interface Request extends ExpressRequest {
    user: User;
}
