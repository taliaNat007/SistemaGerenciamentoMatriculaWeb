import { Injectable } from "@nestjs/common";
import { Aluno } from "./aluno.entity";
import { CreateAlunoDto } from "./dtos/create-aluno.dto";
import { UpdateAlunoDto } from "./dtos/update-aluno.dto";

@Injectable()
export class AlunoService {     
    async findAll(): Promise<Aluno[]> {
        return Aluno.find();
    }

    async findOne(id: number): Promise<Aluno | null> {
        return Aluno.findOne({
            where: { id },
        });
    }

    async create(dados: CreateAlunoDto): Promise<Aluno> {
       const aluno = Aluno.create({
        nome: dados.nome,
        cpf: dados.cpf,
        dataNascimento: dados.dataNascimento,
        nivelAtual: dados.nivelAtual,
    });

        return aluno.save();
    }

    async update(id: number, dados: UpdateAlunoDto): Promise<Aluno | null> {
        const aluno = await this.findOne(id);

        if(!aluno) {
            return null;
        }

        Object.assign(aluno, { ...dados});

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