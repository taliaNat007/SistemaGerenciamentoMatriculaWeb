import { Injectable } from "@nestjs/common";
import { Fornecedor } from "./fornecedor.entity";

@Injectable()
export class FornecedorService {

    async findAll(): Promise<Fornecedor[]> {
        return Fornecedor.find();
    }

    async findOne(id: number): Promise<Fornecedor | null> {
        return Fornecedor.findOne({
            where: { id }
        });
    }

    async create(dados: Partial<Fornecedor>): Promise<Fornecedor> {
        const fornecedor = Fornecedor.create({
            nome: dados.nome,
            ativo: dados.ativo,
        });

        return fornecedor.save();
    }

    async update(
        id: number,
        dados: Partial<Fornecedor>
    ): Promise<void> {

        const fornecedor = await this.findOne(id);

        if (!fornecedor) {
            throw new Error('Fornecedor não encontrado!');
        }

        fornecedor.nome = dados.nome ?? fornecedor.nome;
        fornecedor.ativo = dados.ativo ?? fornecedor.ativo;

        await fornecedor.save();
    }

    async remove(id: number): Promise<void> {

        const fornecedor = await this.findOne(id);

        if (!fornecedor) {
            throw new Error('Fornecedor não encontrado!');
        }

        await fornecedor.remove();
    }
}