import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty({ example: 'maciej.opalinski' })
    @IsString()
    @Length(8)
    username: string;

    @ApiProperty({ example: 'admin123' })
    @IsString()
    @Length(8)
    password: string;
}
