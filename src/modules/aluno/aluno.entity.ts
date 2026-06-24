import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('alunos')
export class Aluno extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 120 })
    nome!: string;
   
    @Column({ unique: true, type: 'varchar', length: 11 })
    cpf!: string;
   
    @Column({ nullable: true })
    nivelAtual?: string;

    @Column({ type: 'date'})
    dataNascimento!: Date;

    @CreateDateColumn()
    dataCadastro!: Date;

}