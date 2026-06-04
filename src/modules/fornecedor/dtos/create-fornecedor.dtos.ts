import { IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Transform } from "class-transformer";

export class CreateFornecedorDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(120)
    nome!: string;

    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    ativo!: boolean;
}