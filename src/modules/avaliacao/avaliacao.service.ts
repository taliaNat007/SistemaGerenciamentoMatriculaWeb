import { Injectable } from "@nestjs/common";
import { Avaliacao } from "./avaliacao.entity";

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

        const avaliacao = Avaliacao.create({
            nomeMusica: dados.nomeMusica,
            nota: Number(dados.nota),
            nivelAtingido: dados.nivelAtingido === '1',
            aluno: {
                id: Number(dados.alunoId)
            } as any
        });

        return avaliacao.save();
    }

    async update(
        id: number,
        dados: any
    ): Promise<void> {

        const avaliacao = await this.findOne(id);

        if (!avaliacao) {
            throw new Error('Avaliação não encontrada!');
        }

        avaliacao.nomeMusica = dados.nomeMusica;

        avaliacao.nota = Number(
            dados.nota
        );

        avaliacao.nivelAtingido =
            dados.nivelAtingido === '1';

        avaliacao.aluno = {
            id: Number(dados.alunoId)
        } as any;

        await avaliacao.save();
    }

    async remove(id: number): Promise<void> {

        const avaliacao = await this.findOne(id);

        if (!avaliacao) {
            throw new Error('Avaliação não encontrada!');
        }

        await avaliacao.remove();
    }
}