import { Injectable } from "@nestjs/common";
import { Aluno } from "./aluno.entity";
import { CreateAlunoDto } from "./dtos/create-aluno.dto";
import { UpdateAlunoDto } from "./dtos/update-aluno.dto";

@Injectable()
export class AlunoService {     
    async findAll(): Promise<Aluno[]> {
        // return Aluno.find({
        //     select: {
        //         id: true,
        //         nome: true,
        //         preco: true,
        //         ativo: true,
        //         criadoEm: true
        //     }
        // });
        return Aluno.find({ relations: ['fornecedor'] });
    }

    async findOne(id: number): Promise<Aluno | null> {
        return Aluno.findOne({
            where: { id },
            relations: ['fornecedor']         
        });
    }

    async create(dados: CreateAlunoDto): Promise<Aluno> {
        const aluno = Aluno.create({ ...dados, fornecedor: { id: dados.fornecedor } });

        return aluno.save();
    }

    async update(id: number, dados: UpdateAlunoDto): Promise<Aluno | null> {
        const aluno = await this.findOne(id);

        if(!aluno) {
            return null;
        }

        Object.assign(aluno, { ...dados, fornecedor: { id: dados.fornecedor }});

        return aluno.save(); 
    }

    async remove(id: number): Promise<Aluno | null> {
        const aluno = await this.findOne(id);

        if(!aluno) {
            return null;
        }

        return aluno.remove();
    }
}