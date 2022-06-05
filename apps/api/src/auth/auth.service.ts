import {
    ConflictException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashSync } from 'bcryptjs';

import { RegisterDto } from '.';
import { User } from '../user';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private users: Repository<User>) {}

    async login(username: string, password: string) {
        try {
            const user = await this.users.findOne({
                where: { username },
            });

            if (user.verifyPassword(password)) {
                return user;
            } else {
                throw new UnauthorizedException();
            }
        } catch {
            throw new UnauthorizedException();
        }
    }

    async register(dto: RegisterDto) {
        const user = this.users.create(dto);
        user.password_hash = hashSync(dto.password);

        try {
            await this.users.save(user);

            return user;
        } catch {
            throw new ConflictException(
                'Account with that email address already exists.',
            );
        }
    }
}
