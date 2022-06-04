import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class UpdateUserScoreDto {
    @ApiProperty({ example: 'Maciej' })
    @IsString()
    @Length(3, 64)
    username: string;
}
