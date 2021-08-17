ALTER TABLE post ALTER COLUMN foto DROP NOT NULL;
ALTER TABLE post ALTER COLUMN video DROP NOT NULL;
ALTER TABLE post DROP CONSTRAINT  post_data_postagem_check;

INSERT INTO funcao(nome, descricao) VALUES 
('Agronomo', 'O homem e a mulher do campo'),
('Vendedor', 'Aquele que só quer a comissão'),
('Motorista', 'Sempre na boleia do seu caminhão'),
('Deletar', 'Deletar a funcao')
;

INSERT INTO setor_empresa(id_setor, nome, descricao) VALUES
(1, 'Comercial', 'Aqui nós lidamos com numeros'),
(2, 'RH', 'Gente e Gestão'),
(3, 'Gerente', 'Aquele que manda na porra toda')
;

INSERT INTO usuario(id_usuario, nome, funcao_id) VALUES
(1, 'João da silva', 1),
(2, 'Maria da silva', 1),
(3, 'Manoel Portugues', 2),
(4, 'Elom Musk', 3)
;

INSERT INTO post(id_post, titulo, data_postagem, autor_id, texto, foto, video, setor_id) VALUES
(1, 'Post teste', '2021-01-01', 1, 'Teste de post', NULL, NULL, 2),
(2, 'Teste 2', '2021-01-01', 2, 'Teste 2', NULL, NULL, 2),
(3, 'Primeiro dia de tralho','2021-07-31', 3, 'Olá colegas de trabalho, sejam bem vindos', NULL, NULL, 2),
(4, 'A empresa faliu','2021-08-14', 4, 'A cadsa caiu, a policia vai prender todos', NULL, NULL, 3)
;

INSERT INTO tag(id_tag, nome) VALUES
(1, 'Teste'),
(2, 'Joao'),
(3, 'Teste 2'),
(4, 'Maria'),
(5, 'Primeiro dia'),
(6, 'Aviso'),
(7, 'Adeus')
;

INSERT INTO post_tag(post_id, tag_id) VALUES
(1, 1),-- Primeiro post
(1, 2),-- Primeiro post
(2, 3),-- Segundo post
(2, 4),-- Segundo post
(3, 5),-- Terceiro post
(3, 6),-- Terceiro post
(4, 7)-- Quarto post
;

INSERT INTO post_favorito(post_id, usuario_id) VALUES
(3, 1),
(3, 2),
(3, 3)
;

ALTER TABLE post ADD CONSTRAINT post_data_postagem_check CHECK (data_postagem >= now());

-- Atualizar a tabela Funcoa
UPDATE funcao SET nome = 'Agronomo 1' WHERE funcao.nome = 'Agronomo';
UPDATE funcao SET descricao = 'Comissão e happy-hour' WHERE funcao.id_funcao = 2;
UPDATE funcao SET descricao = 'Boleia e rebite' WHERE funcao.nome = 'Motorista';

-- Atualizar a tabela Setor_empresa
UPDATE setor_empresa SET nome = 'Comercial 1' WHERE setor_empresa.nome = 'Comercial';
UPDATE setor_empresa SET descricao = 'Números e chefe chato' WHERE setor_empresa.id_setor = 1;
UPDATE setor_empresa SET descricao = 'Manda e pega a estagiária' WHERE setor_empresa.nome = (
  SELECT setor_empresa.nome from setor_empresa WHERE setor_empresa.id_setor = 3
);

-- Atualizar a tabela Usuario
UPDATE usuario SET nome = 'João da Silva Santos' WHERE usuario.id_usuario = 1;
UPDATE usuario SET nome = 'Zoei o usuário sim' WHERE usuario.id_usuario > 1;

-- Atualizar a tabela Post
UPDATE post SET data_postagem = '2022-04-04' WHERE autor_id = 1;
UPDATE post SET titulo = 'sem titulo' WHERE data_postagem = '2022-04-04';
UPDATE post SET texto = 'Olá, vão se foderem' WHERE autor_id = 3;

-- Delete
DELETE FROM funcao WHERE id_funcao = 4;
DELETE FROM post_favorito WHERE post_id IS NOT NULL;

-- Atualizando um post
UPDATE post SET titulo = 'value1', texto = 'value2' WHERE autor_id = 3;
INSERT INTO post (titulo, data_postagem, autor_id, texto, setor_id)
VALUES ('Primeiro dia de tralho', '2021-07-31', 3, 'Olá colegas de trabalho, sejam bem vindos',2);

-- Delete post_tag que tem post anterior ao mes 06/2021
DELETE FROM post_tag WHERE post_id IN (
  SELECT post_id FROM post WHERE data_postagem < '2021-06-01'
);
-- Delete post anteriores ao mes 06/2021
DELETE FROM post WHERE data_postagem < '2021-06-01';