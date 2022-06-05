import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../user';
import { AuthController, AuthService, LocalStrategy, LocalSerializer } from '.';

@Module({
    imports: [PassportModule, TypeOrmModule.forFeature([User])],
    providers: [AuthService, LocalStrategy, LocalSerializer],
    controllers: [AuthController],
})
export class AuthModule {}
