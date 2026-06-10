import { Module } from "@nestjs/common";
import { AvaliacaoController } from "./avaliacao.controller";
import { AvaliacaoService } from "./avaliacao.service";

@Module({
    imports: [],
    controllers: [AvaliacaoController],
    providers: [AvaliacaoService],
    exports: []
})
export class AvaliacaoModule {}
