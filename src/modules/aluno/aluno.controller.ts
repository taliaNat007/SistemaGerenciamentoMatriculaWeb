import { Body, Controller, Get, Post, Redirect, Render, Param, HttpCode } from "@nestjs/common";
import { AlunoService } from "./aluno.service";
import { ValidationView, toBoolean } from 'nest-validation-view';
import { CreateAlunoDto } from "./dtos/create-aluno.dto";
import { UpdateAlunoDto } from "./dtos/update-aluno.dto";
import { FornecedorService } from "../fornecedor/fornecedor.service";

@Controller('alunos')
export class AlunoController {

    constructor(
        private alunoService: AlunoService,
        private fornecedorService: FornecedorService
    ) {}

    @Get()
    @Render('aluno/inicial')
    async inicial(): Promise<object> {
        const listaAlunos = await this.alunoService.findAll();

        return {
            titulo: 'Consulta de Alunos',
            alunos: listaAlunos
        }
    }

    @Get('criar')
    @Render('aluno/formulario')
    async formularioCriar(): Promise<object> {
        const fornecedores = await this.fornecedorService.findAll();

        return {
            titulo: 'Novo aluno',
            fornecedores,
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
        const fornecedores = await this.fornecedorService.findAll();

        if(!aluno) {
            throw new Error('Aluno não encontrado!');            
        }
        
        return {
            titulo: 'Edição de Aluno',
            subtitulo: `Atualização do produto: ${aluno.nome}`,
            aluno,
            fornecedores,
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
    async formEditarSalvar(@Param('id') id: number, @Body() dados: UpdateAlunoDto): Promise<void>{
        await this.alunoService.update(id, dados);
    }

    @Get(':id/excluir')
    @Render('aluno/remover')
    async formExcluir(@Param('id') id: number): Promise<object> {
        const aluno = await this.alunoService.findOne(id);

        if(!aluno) {
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
    async formExcluirSalvar(@Param('id') id: number): Promise<void>{
        await this.alunoService.remove(id);
    }

    @Post(':id/remover')
    @HttpCode(204)
    async remove(@Param('id') id: number): Promise<void>{
        await this.alunoService.remove(id);
    }
}