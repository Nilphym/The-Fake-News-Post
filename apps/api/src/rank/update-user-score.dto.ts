import { IsBoolean, IsString, Length } from 'class-validator';

export class UpdateUserScoreDto {
    @IsBoolean()
    is_public?: boolean;

    @IsString()
    @Length(3, 64)
    username?: string;
}
