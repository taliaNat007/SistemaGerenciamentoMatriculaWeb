import { IsNotEmpty, MinLength, IsOptional, IsString, IsDateString } from "class-validator";

export class CreateAlunoDto {

  @IsNotEmpty({ message: 'O campo nome é obrigatório'})
  @MinLength(5, { message: 'O nome deve ter no mínimo 5 caracteres' })
  nome!: string;

  @IsNotEmpty({ message: 'O campo cpf é obrigatório'})
  @MinLength(11, { message: 'O cpf deve conter 11 caracteres' })
  cpf!: string;

  @IsOptional()
  @IsString()
  nivelAtual?: string;

  @IsNotEmpty()
  @IsDateString()
  dataNascimento!: string;
 
}