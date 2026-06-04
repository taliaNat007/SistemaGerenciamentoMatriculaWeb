CREATE DATABASE gerenciamentoaluno;
USE gerenciamentoaluno;
select * from alunos;

ALTER TABLE alunos 
MODIFY COLUMN nivelAtual VARCHAR(50);
select * from fornecedores;
insert into alunos (nome, nivelAtual, dataCadastro, fornecedor_id, cpf, dataNascimento)
Values 
	('Natalia', 'iniciante', now(), 1, '05810263224', '2003-05-28');
    
INSERT INTO fornecedores (nome, ativo, criado_em, atualizado_em)
VALUES
    ('Tech Distribuidora Ltda', true, NOW(), NOW()),
    ('Amazonia Equipamentos', true, NOW(), NOW()),
    ('Rondônia Informática', true, NOW(), NOW()),
    ('Central Suprimentos', true, NOW(), NOW()),
    ('Fornecedor Alpha', true, NOW(), NOW()),
    ('Fornecedor Beta', false, NOW(), NOW()),
    ('Comercial Norte', true, NOW(), NOW()),
    ('Global Services', true, NOW(), NOW()),
    ('Mega Atacado', false, NOW(), NOW()),
    ('Portal Tecnologia', true, NOW(), NOW());