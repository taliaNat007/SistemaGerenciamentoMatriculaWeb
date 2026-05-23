create database pw2_app_web;
use pw2_app_web;

create table alunos(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(255) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `nivel` VARCHAR(20),
    `data_cadastro` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `telefone` VARCHAR(20)

);


INSERT INTO alunos (nome, cpf, nivel, data_cadastro, telefone) VALUES
('João Silva', '12345678901', 'Iniciante', '2025-01-15 10:30:00', '(11) 99999-9999'),
('Maria Oliveira', '98765432100', 'Intermediário', '2025-02-20 14:15:00', '(11) 98888-8888'),
('Pedro Santos', '45678912300', 'Avançado', '2025-03-10 09:45:00', '(11) 97777-7777'),
('Ana Paula', '78912345611', 'Iniciante', '2025-03-10 09:45:00', '(11) 96666-6666'),
('Carlos Souza', '32165498722', 'Intermediário', '2025-03-10 09:45:00', '(11) 95555-5555');

create table fornecedores(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    ativo BOOLEAN DEFAULT true,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

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
    
ALTER TABLE produtos ADD COLUMN fornecedor_id INT;
    ALTER TABLE produtos 
ADD CONSTRAINT fk_produto_fornecedor 
FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id);

select * from fornecedores;