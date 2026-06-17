import { Type, Transform } from "class-transformer";
import { IsNotEmpty, MinLength, IsNumber, Min, IsOptional, IsString, IsDateString, IsBoolean } from "class-validator";

const toDecimalNumber = (value: unknown): unknown => {
  const normalizedValue: unknown = Array.isArray(value)
    ? (value as unknown[])[value.length - 1]
    : value;

  if (typeof normalizedValue === 'string') {
    return Number(normalizedValue.replace(',', '.'));
  }

  return normalizedValue;
};

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