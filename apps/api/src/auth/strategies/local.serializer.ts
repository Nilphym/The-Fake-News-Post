import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../user';

@Injectable()
export class LocalSerializer extends PassportSerializer {
    constructor(@InjectRepository(User) private users: Repository<User>) {
        super();
    }

    serializeUser(user: User, done: CallableFunction) {
        done(null, user.id);
    }

    async deserializeUser(id: string, done: CallableFunction) {
        const user = await this.users.findOne({ where: { id } });

        done(null, user);
    }
}
