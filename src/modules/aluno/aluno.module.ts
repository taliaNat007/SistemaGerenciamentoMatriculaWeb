import { Module } from "@nestjs/common";
import { AlunoController } from "./aluno.controller";
import { AlunoService } from "./aluno.service";
import { FornecedorService } from "../fornecedor/fornecedor.service";

@Module({
    imports: [],
    controllers: [AlunoController],
    providers: [AlunoService, FornecedorService],
    exports: [AlunoService]
})
export class AlunoModule {}