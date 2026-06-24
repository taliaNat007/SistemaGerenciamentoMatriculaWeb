import { Module } from "@nestjs/common";
import { AvaliacaoController } from "./avaliacao.controller";
import { AvaliacaoService } from "./avaliacao.service";
import { AlunoModule } from "../aluno/aluno.module";

@Module({
    imports: [AlunoModule],
    controllers: [AvaliacaoController],
    providers: [AvaliacaoService]
})
export class AvaliacaoModule {}