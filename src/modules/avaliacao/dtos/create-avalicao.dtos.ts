import { Transform } from 'class-transformer';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength
} from 'class-validator';

export class CreateAvaliacaoDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(120)
    nomeMusica!: string;

    @Transform(({ value }) => Number(value))
    @IsNumber()
    nota!: number;

    @IsString()
    @IsNotEmpty()
    nivelAtingido!: string;

    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    alunoId!: number;
}