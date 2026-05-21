create database pw2_app_web;
use pw2_app_web;

create table produtos(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` TEXT,
    `preco` DECIMAL(10, 2) NOT NULL,
    `ativo` BOOLEAN DEFAULT TRUE,
    `criado_em` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `atualizado_em` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);
INSERT INTO produtos (nome, descricao, preco, ativo, criado_em, atualizado_em) VALUES
('Notebook Dell Inspiron', 'Notebook com 16GB RAM e SSD 512GB', 4500.00, true, NOW(), NOW()),
('Mouse Logitech M170', 'Mouse sem fio com conexão USB', 89.90, true, NOW(), NOW()),
('Teclado Mecânico Redragon', 'Teclado gamer RGB switch azul', 299.99, true, NOW(), NOW()),
('Monitor LG 24"', 'Monitor Full HD 24 polegadas', 899.00, true, NOW(), NOW()),
('Cadeira Gamer', 'Cadeira ergonômica com ajuste de altura', 1200.00, true, NOW(), NOW()),
('Headset HyperX Cloud', 'Headset gamer com som surround', 350.00, true, NOW(), NOW()),
('Webcam Logitech C920', 'Webcam Full HD 1080p', 499.90, true, NOW(), NOW()),
('HD Externo 1TB', 'Armazenamento portátil USB 3.0', 320.00, true, NOW(), NOW()),
('Pen Drive 64GB', 'Pen drive USB 3.0 alta velocidade', 59.90, true, NOW(), NOW()),
('Impressora HP DeskJet', 'Impressora multifuncional', 650.00, false, NOW(), NOW());

select * from produtos;

