import {
    Body,
    Controller,
    HttpCode,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBody,
    ApiConflictResponse,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import {
    LoginGuard,
    Request,
    AuthService,
    ReqUser,
    CookieGuard,
    LoginDto,
    RegisterDto,
} from '.';
import { User } from '../user/user.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('@me')
    @HttpCode(200)
    @UseGuards(CookieGuard)
    @ApiOkResponse({ type: User })
    me(@ReqUser() user: User) {
        return user;
    }

    @Post('login')
    @HttpCode(200)
    @UseGuards(LoginGuard)
    @ApiBody({ type: LoginDto })
    @ApiOkResponse({ description: 'Successfully logged in', type: User })
    @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
    login(@ReqUser() user: User) {
        return user;
    }

    @Post('register')
    @ApiCreatedResponse({ description: 'Account created', type: User })
    @ApiConflictResponse({
        description: 'Account with that email address already exists',
    })
    register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }

    @Post('logout')
    @HttpCode(200)
    @ApiOkResponse({ description: 'Successfully logged out' })
    logout(@Req() request: Request) {
        request.logout();
    }
}
