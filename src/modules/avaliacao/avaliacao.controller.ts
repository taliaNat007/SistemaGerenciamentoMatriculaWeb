import {
    Body,
    Controller,
    Get,
    Post,
    Redirect,
    Render,
    Param,
    HttpCode
} from "@nestjs/common";

import { AvaliacaoService } from "./avaliacao.service";

@Controller('avaliacoes')
export class AvaliacaoController {

    constructor(
        private avalicaoService: AvaliacaoService
    ) {}

    @Get()
    @Render('avaliacao/inicial')
    async inicial(): Promise<object> {

        const avaliacoes = await this.avalicaoService.findAll();

        return {
            titulo: 'Consulta de Avaliações',
            avaliacoes
        };
    }

    @Get('criar')
    @Render('avaliacao/formulario')
    async formularioCriar(): Promise<object> {

        return {
            titulo: 'Nova Avaliação'
        };
    }

    @Post('criar')
    @Redirect('/avaliacoes')
    async formularioCriarSalvar(
        @Body() dados: any
    ): Promise<void> {

        await this.avalicaoService.create(dados);
    }

    @Get(':id/editar')
    @Render('avaliacao/formulario')
    async formEditar(
        @Param('id') id: number
    ): Promise<object> {

        const avaliacao = await this.avalicaoService.findOne(id);

        if (!avaliacao) {
            throw new Error('Avalição não encontrada!');
        }

        return {
            titulo: 'Edição de Avaliação',
            avaliacao
        };
    }

    @Post(':id/editar')
    @Redirect('/avaliacoes')
    async formEditarSalvar(
        @Param('id') id: number,
        @Body() dados: any
    ): Promise<void> {

        await this.avalicaoService.update(id, dados);
    }

    @Get(':id/excluir')
    @Render('avaliacao/remover')
    async formExcluir(
        @Param('id') id: number
    ): Promise<object> {

        const avaliacao = await this.avalicaoService.findOne(id);

        if (!avaliacao) {
            throw new Error('Avalição não encontrada!');
        }

        return {
            titulo: 'Exclusão de Avaliação',
            avaliacao
        };
    }

    @Post(':id/excluir')
    @Redirect('/avaliacoes')
    async formExcluirSalvar(
        @Param('id') id: number
    ): Promise<void> {

        await this.avalicaoService.remove(id);
    }

    @Post(':id/remover')
    @HttpCode(204)
    async remove(
        @Param('id') id: number
    ): Promise<void> {

        await this.avalicaoService.remove(id);
    }
}