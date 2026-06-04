import { PartialType } from "@nestjs/mapped-types";
import { CreateFornecedorDto } from "./create-fornecedor.dtos";

export class UpdateFornecedorDto extends PartialType(
    CreateFornecedorDto
) {}