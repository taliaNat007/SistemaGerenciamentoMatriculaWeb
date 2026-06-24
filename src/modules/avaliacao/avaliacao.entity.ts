import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Aluno } from "../aluno/aluno.entity";

@Entity('avaliacoes')
export class Avaliacao extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 120 })
    nomeMusica!: string;

    @Column({ type: 'double' })
    nota!: number;

    @Column({ name: 'nivel_atingido', type: 'varchar', length: 50, nullable: true })
    nivelAtingido?: string;

    @CreateDateColumn({ name: 'data_avaliacao' })
    dataAvaliacao!: Date;

    @ManyToOne(() => Aluno)
    @JoinColumn({
        name: 'aluno_id'
    })
    aluno!: Aluno;
}