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

import { FornecedorService } from "./fornecedor.service";

@Controller('fornecedores')
export class FornecedorController {

    constructor(
        private fornecedorService: FornecedorService
    ) {}

    @Get()
    @Render('fornecedor/inicial')
    async inicial(): Promise<object> {

        const fornecedores = await this.fornecedorService.findAll();

        return {
            titulo: 'Consulta de Fornecedores',
            fornecedores
        };
    }

    @Get('criar')
    @Render('fornecedor/formulario')
    async formularioCriar(): Promise<object> {

        return {
            titulo: 'Novo Fornecedor'
        };
    }

    @Post('criar')
    @Redirect('/fornecedores')
    async formularioCriarSalvar(
        @Body() dados: any
    ): Promise<void> {

        await this.fornecedorService.create(dados);
    }

    @Get(':id/editar')
    @Render('fornecedor/formulario')
    async formEditar(
        @Param('id') id: number
    ): Promise<object> {

        const fornecedor = await this.fornecedorService.findOne(id);

        if (!fornecedor) {
            throw new Error('Fornecedor não encontrado!');
        }

        return {
            titulo: 'Edição de Fornecedor',
            fornecedor
        };
    }

    @Post(':id/editar')
    @Redirect('/fornecedores')
    async formEditarSalvar(
        @Param('id') id: number,
        @Body() dados: any
    ): Promise<void> {

        await this.fornecedorService.update(id, dados);
    }

    @Get(':id/excluir')
    @Render('fornecedor/remover')
    async formExcluir(
        @Param('id') id: number
    ): Promise<object> {

        const fornecedor = await this.fornecedorService.findOne(id);

        if (!fornecedor) {
            throw new Error('Fornecedor não encontrado!');
        }

        return {
            titulo: 'Exclusão de Fornecedor',
            fornecedor
        };
    }

    @Post(':id/excluir')
    @Redirect('/fornecedores')
    async formExcluirSalvar(
        @Param('id') id: number
    ): Promise<void> {

        await this.fornecedorService.remove(id);
    }

    @Post(':id/remover')
    @HttpCode(204)
    async remove(
        @Param('id') id: number
    ): Promise<void> {

        await this.fornecedorService.remove(id);
    }
}