import { CreateAlunoDto } from "./create-aluno.dto";
import { IsBoolean, IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";
import { toBoolean } from 'nest-validation-view';

export class UpdateAlunoDto extends CreateAlunoDto {

  @IsBoolean()
  @IsNotEmpty({ message: 'O campo ativo é obrigatório'})
  @Transform(({ value }) => toBoolean(value, true))
  ativo!: boolean;

}