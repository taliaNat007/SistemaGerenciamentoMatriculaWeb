import { Injectable } from "@nestjs/common";
import { Avaliacao } from "./avaliacao.entity";
import { Aluno } from "../aluno/aluno.entity";

@Injectable()
export class AvaliacaoService {

    async findAll(): Promise<Avaliacao[]> {
        return Avaliacao.find({
            relations: {
                aluno: true
            }
        });
    }

    async findOne(id: number): Promise<Avaliacao | null> {
        return Avaliacao.findOne({
            where: { id },
            relations: {
                aluno: true
            }
        });
    }

    async create(dados: any): Promise<Avaliacao> {

        const aluno = await Aluno.findOne({
            where: {
                id: Number(dados.alunoId)
            }
        });
        console.log(dados);
        if (!aluno) {
            throw new Error("Aluno não encontrado!");
        }

        const avaliacao = Avaliacao.create({
            nomeMusica: dados.nomeMusica,
            nota: Number(dados.nota),
            nivelAtingido: dados.nivelAtingido,
            aluno
        });

        await avaliacao.save();

        aluno.nivelAtual = dados.nivelAtingido;
        await aluno.save();

        return avaliacao;
    }

    async update(id: number, dados: any): Promise<void> {

        const avaliacao = await this.findOne(id);

        if (!avaliacao) {
            throw new Error("Avaliação não encontrada!");
        }

        const aluno = await Aluno.findOne({
            where: {
                id: Number(dados.alunoId)
            }
        });

        if (!aluno) {
            throw new Error("Aluno não encontrado!");
        }

        avaliacao.nomeMusica = dados.nomeMusica;

        avaliacao.nota = Number(
            dados.nota
        );

        avaliacao.nivelAtingido =
            dados.nivelAtingido;

        avaliacao.aluno = aluno;

        await avaliacao.save();

        aluno.nivelAtual = dados.nivelAtingido;
        await aluno.save();
    }

    async remove(id: number): Promise<void> {

        const avaliacao = await this.findOne(id);

        if (!avaliacao) {
            throw new Error("Avaliação não encontrada!");
        }

        await avaliacao.remove();
    }
}