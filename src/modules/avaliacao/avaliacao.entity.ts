import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('avaliacoes')
export class Avaliacao extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 120 })
    alunoId!: string;

    @Column({ type: 'varchar', length: 1 })
    nome!: string;

    @Column({ type: 'boolean', default: true })
    ativo!: boolean;

    @CreateDateColumn({ name: 'criado_em' })
    criadoEm!: Date;

    @UpdateDateColumn({ name: 'atualizado_em', nullable: true })
    atualizadoEm!: Date;
}
