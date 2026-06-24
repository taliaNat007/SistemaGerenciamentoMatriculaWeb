import { Body, Controller, Get, Post, Redirect, Render, Param, HttpCode, Query } from "@nestjs/common";
import { AlunoService } from "./aluno.service";
import { ValidationView } from 'nest-validation-view';
import { CreateAlunoDto } from "./dtos/create-aluno.dto";
import { UpdateAlunoDto } from "./dtos/update-aluno.dto";

@Controller('alunos')
export class AlunoController {

    constructor(
        private alunoService: AlunoService,
    ) { }

    @Get()
    @Render('aluno/inicial')
    async inicial(@Query('pesquisa') pesquisa: string): Promise<object> {
        const listaAlunos = await this.alunoService.findAll(pesquisa);

        return {
            titulo: 'Consulta de Alunos',
            alunos: listaAlunos,
            pesquisa
        }
    }

    @Get('criar')
    @Render('aluno/formulario')
    async formularioCriar(): Promise<object> {

        return {
            titulo: 'Novo aluno',
        };
    }

    @Post('criar')
    @Redirect('/alunos')
    @ValidationView('aluno/formulario', ({ request, errors }) => ({
        aluno: {
            ...request.body
        },
        errors,
    }))
    async formularioCriarSalvar(@Body() dados: CreateAlunoDto): Promise<void> {
        await this.alunoService.create(dados);
    }

    @Get(':id/editar')
    @Render('aluno/formulario')
    async formEditar(@Param('id') id: number): Promise<object> {
        const aluno = await this.alunoService.findOne(id);

        if (!aluno) {
            throw new Error('Aluno não encontrado!');
        }

        return {
            titulo: 'Edição de Aluno',
            subtitulo: `Atualização do aluno: ${aluno.nome}`,
            aluno,
        };
    }

    @Post(':id/editar')
    @Redirect('/alunos')
    @ValidationView('aluno/formulario', ({ request, errors }) => ({
        aluno: {
            id: request.params.id,
            ...request.body
        },
        errors,
    }))
    async formEditarSalvar(@Param('id') id: number, @Body() dados: UpdateAlunoDto): Promise<void> {
        await this.alunoService.update(id, dados);
    }

    @Get(':id/excluir')
    @Render('aluno/remover')
    async formExcluir(@Param('id') id: number): Promise<object> {
        const aluno = await this.alunoService.findOne(id);

        if (!aluno) {
            throw new Error('Aluno não encontrado!');
        }

        return {
            titulo: 'Exclusão de Aluno',
            subtitulo: `Exclusão de aluno: ${aluno.nome}`,
            aluno,
        };
    }

    @Post(':id/excluir')
    @Redirect('/alunos')
    async formExcluirSalvar(@Param('id') id: number): Promise<void> {
        await this.alunoService.remove(id);
    }

    @Post(':id/remover')
    @HttpCode(204)
    async remove(@Param('id') id: number): Promise<void> {
        await this.alunoService.remove(id);
    }

}