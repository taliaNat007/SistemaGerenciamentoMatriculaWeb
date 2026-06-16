import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
//import { Fornecedor } from "../fornecedor/fornecedor.entity";

@Entity('alunos')
export class Aluno extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 120 })
    nome!: string;
   
    @Column({ type: 'varchar', length: 11 })
    cpf!: string;
   
    @Column({ type: 'boolean', default: true })
    nivelAtual!: boolean;

    @CreateDateColumn({ name: 'dataNascimento' })
    dataNascimento!: Date;

    @CreateDateColumn({ name: 'dataCadastro' })
    dataCadastro!: Date;

}