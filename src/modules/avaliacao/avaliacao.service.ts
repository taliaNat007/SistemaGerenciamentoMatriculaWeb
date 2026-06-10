import { Injectable } from "@nestjs/common";
import { Avaliacao } from "./avaliacao.entity";

@Injectable()
export class AvaliacaoService {

    async findAll(): Promise<Avaliacao[]> {
        return Avaliacao.find();
    }

    async findOne(id: number): Promise<Avaliacao | null> {
        return Avaliacao.findOne({
            where: { id }
        });
    }

    async create(dados: any): Promise<Avaliacao> {

        const avaliacao = Avaliacao.create({
            nome: dados.nome,
            ativo: dados.ativo === '1'
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
    
        avaliacao.nome = dados.nome;
    
        avaliacao.ativo =
            dados.ativo === '1';
    
        await avaliacao.save();
    }
    async remove(id: number): Promise<void> {

        const avaliacao = await this.findOne(id);

        if (!avaliacao) {
            throw new Error('Avaliação não encontrado!');
        }

        await avaliacao.remove();
    }
}