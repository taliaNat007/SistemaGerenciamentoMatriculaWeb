import { Injectable } from "@nestjs/common";
import { Aluno } from "./aluno.entity";
import { CreateAlunoDto } from "./dtos/create-aluno.dto";
import { UpdateAlunoDto } from "./dtos/update-aluno.dto";
import { BadRequestException } from '@nestjs/common';
import { Like } from "typeorm";

@Injectable()
export class AlunoService {
    async findAll(
        pesquisa?: string
    ): Promise<Aluno[]> {

        if (pesquisa) {

            return Aluno.find({
                where: {
                    nome: Like(`%${pesquisa}%`)
                }
            });

        }

        return Aluno.find();
    }

    async findOne(id: number): Promise<Aluno | null> {
        return Aluno.findOne({
            where: { id },
        });
    }

    async create(dados: CreateAlunoDto): Promise<Aluno> {

        const alunoExistente = await Aluno.findOne({
            where: { cpf: dados.cpf }
        });

        if (alunoExistente) {
            throw new BadRequestException('Este CPF já está cadastrado');
        }

        const aluno = Aluno.create({
            nome: dados.nome,
            cpf: dados.cpf,
            dataNascimento: dados.dataNascimento,
            nivelAtual: dados.nivelAtual,
        });

        return await aluno.save();
    }

    async update(id: number, dados: UpdateAlunoDto): Promise<Aluno | null> {
        const aluno = await this.findOne(id);

        if (!aluno) {
            return null;
        }

        Object.assign(aluno, { ...dados });

        return aluno.save();
    }

    async remove(id: number): Promise<Aluno | null> {
        const aluno = await this.findOne(id);

        if (!aluno) {
            return null;
        }

        return aluno.remove();
    }


}