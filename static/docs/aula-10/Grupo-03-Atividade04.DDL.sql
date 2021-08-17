/*
  Fiz o SQL para criar o banco de dados do zero
  inserir os dados, e fazer os SQL de consulta no final
*/

CREATE TABLE public.usuario (
    id_usuario SERIAL NOT NULL,
    nome varchar(255),
    funcao_id integer,
    PRIMARY KEY (id_usuario)
);

CREATE INDEX ON public.usuario
    (funcao_id);


CREATE TABLE public.funcao (
    id_funcao SERIAL NOT NULL,
    nome varchar(255),
    descricao varchar(255),
    PRIMARY KEY (id_funcao)
);

ALTER TABLE public.funcao
    ADD UNIQUE (nome);


CREATE TABLE public.setor_empresa (
    id_setor SERIAL NOT NULL,
    nome varchar(255),
    descricao varchar(255) NOT NULL,
    PRIMARY KEY (id_setor)
);

ALTER TABLE public.setor_empresa
    ADD UNIQUE (nome);


CREATE TABLE public.tag (
    id_tag SERIAL NOT NULL,
    nome varchar(255),
    PRIMARY KEY (id_tag)
);


CREATE TABLE public.post (
    id_post SERIAL NOT NULL,
    titulo varchar(100),
    data_postagem timestamp without time zone NOT NULL CHECK (data_postagem >= now()),
    autor_id integer,
    texto varchar(255) NOT NULL,
    foto bytea NOT NULL,
    video bytea NOT NULL,
    setor_id integer,
    PRIMARY KEY (id_post)
);

CREATE INDEX ON public.post
    (autor_id);
CREATE INDEX ON public.post
    (setor_id);


CREATE TABLE public.post_tag (
    post_id integer NOT NULL,
    tag_id integer NOT NULL,
    PRIMARY KEY (post_id, tag_id)
);


CREATE TABLE public.post_favorito (
    post_id integer NOT NULL,
    usuario_id integer NOT NULL,
    PRIMARY KEY (post_id, usuario_id)
);

ALTER TABLE public.usuario ADD CONSTRAINT FK_usuario__funcao_id FOREIGN KEY (funcao_id) REFERENCES public.funcao(id_funcao);
ALTER TABLE public.post ADD CONSTRAINT FK_post__autor_id FOREIGN KEY (autor_id) REFERENCES public.usuario(id_usuario);
ALTER TABLE public.post ADD CONSTRAINT FK_post__setor_id FOREIGN KEY (setor_id) REFERENCES public.setor_empresa(id_setor);
ALTER TABLE public.post_tag ADD CONSTRAINT FK_post_tag__post_id FOREIGN KEY (post_id) REFERENCES public.post(id_post);
ALTER TABLE public.post_tag ADD CONSTRAINT FK_post_tag__tag_id FOREIGN KEY (tag_id) REFERENCES public.tag(id_tag);
ALTER TABLE public.post_favorito ADD CONSTRAINT FK_post_favorito__post_id FOREIGN KEY (post_id) REFERENCES public.post(id_post);
ALTER TABLE public.post_favorito ADD CONSTRAINT FK_post_favorito__usuario_id FOREIGN KEY (usuario_id) REFERENCES public.usuario(id_usuario);

/*
  INSERIR OS DADOS
*/

ALTER TABLE post ALTER COLUMN foto DROP NOT NULL;
ALTER TABLE post ALTER COLUMN video DROP NOT NULL;
ALTER TABLE post DROP CONSTRAINT  post_data_postagem_check;

INSERT INTO funcao(id_funcao, nome, descricao) VALUES 
(1, 'Agronomo', 'O homem e a mulher do campo'),
(2, 'Vendedor', 'Aquele que só quer a comissão'),
(3, 'CTO', 'Aquele que manda em tudo'),
(4, 'Motorista', 'Sempre na boleia do seu caminhão'),
(5, 'Deletar', 'Deletar a funcao desse cara')
;

INSERT INTO setor_empresa(id_setor, nome, descricao) VALUES
(1, 'Comercial', 'Aqui nós lidamos com numeros'),
(2, 'RH', 'Gente e Gestão'),
(3, 'Gerente', 'Aquele que manda na porra toda'),
(4, 'Logistica', 'Faço a coisa acontecer pelo Brasil')
;

INSERT INTO usuario(id_usuario, nome, funcao_id) VALUES
(1, 'João da silva', 1),
(2, 'Maria da silva', 1),
(3, 'Manoel Portugues', 2),
(4, 'Elom Musk', 3),
(5, 'Pedro de Pedro e Bino', 4),
(6, 'Bino de Pedro e Bino', 4),
(7, 'Bruno e Marrone', null)
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
(3, 3),
(1, 1)
;

/*
  SELECT DOS DADOS
*/

-- 1) Dadas as tabelas T1 e T2, unidas pelo campo id_unidade, escreva uma 
-- consulta que retorne somente os registros de T1 e T2 que tenham relação.

-- Selecionar todos os usuarios e suas funcoes
SELECT * FROM usuario u INNER JOIN funcao f ON u.funcao_id = f.id_funcao;
-- OU filtrando algumas colunas
SELECT u.id_usuario, u.nome as nome, f.nome as funcao FROM usuario u INNER JOIN funcao f ON u.funcao_id = f.id_funcao;

-- 2) Dadas as tabelas T1 e T2, unidas pelo campo id_unidade, escreva uma consulta que 
-- retorne todos os registros de T1, os de T2 que tenham relação e quando não houver, retorne nulo.

-- Selecionar todos os usuarios, com ou sem funcao
SELECT * FROM usuario u LEFT JOIN funcao f ON u.funcao_id = f.id_funcao;
-- OU filtrando algumas colunas
SELECT u.id_usuario, u.nome as nome, f.nome as funcao FROM usuario u LEFT JOIN funcao f ON u.funcao_id = f.id_funcao;

-- 3) Dadas as tabelas T1 e T2, unidas pelo campo id_unidade, escreva uma consulta que retorne 
-- todos os registros de T2, os de T1 que tenham relação e quando não houver, retorne nulo.

-- Selecionando todas as funcoes
SELECT * FROM usuario u RIGHT JOIN funcao f ON u.funcao_id = f.id_funcao;
-- OU filtrando algumas colunas
SELECT u.id_usuario, u.nome as nome, f.nome as funcao FROM usuario u RIGHT JOIN funcao f ON u.funcao_id = f.id_funcao;


-- 4) Dadas as tabelas T1 e T2, unidas pelo campo id_unidade, escreva uma consulta que retorne todos os
--  registros de T1 e de T2 que não tenham relação entre si

-- Selecionando quem não tem nada a ver com a paçoca
SELECT * FROM usuario u FULL OUTER JOIN funcao f ON u.funcao_id = f.id_funcao WHERE u.funcao_id IS NULL OR f.id_funcao IS NULL;
-- OU filtrando algumas colunas
SELECT u.id_usuario, u.nome as nome, f.nome as funcao FROM usuario u FULL OUTER JOIN funcao f ON u.funcao_id = f.id_funcao WHERE u.id_usuario IS NULL OR f.id_funcao IS NULL;


-- 5) Do trabalho utilizado na atividade anterior, escreva 10 consultas indicando o que você espera retornar e logo abaixo, 
-- a consulta em si. Utilize formas variadas de JOINS, agrupamentos e condições. Faça ao menos um exemplo de cada: Inner Join, Left Join, Right Join,
--  Group By, Having, Order, Limit e sub consulta.

-- 5.1) Selecionar a quantidade de usuarios total do sistema
SELECT COUNT(*) FROM usuario;

-- 5.2) Selecionar todos os posts que tem tag (Subquery)
SELECT p.* FROM post p WHERE p.id_post IN (SELECT pt.post_id FROM post_tag pt WHERE pt.post_id = p.id_post);

-- 5.3) Selecionar a quantidade de usuarios que tem funcao diferente de NULL
SELECT COUNT(*) FROM usuario WHERE funcao_id IS NOT NULL;

-- 5.4) Quantas vezes uma tag foi utilizada
SELECT t.nome, COUNT(*) FROM post_tag pt INNER JOIN tag t ON pt.tag_id = t.id_tag GROUP BY t.id_tag;

-- 5.5) Postagens de 2021, ordenadas crescente (ORDER BY)
SELECT * FROM post WHERE data_postagem > '2021-01-01' ORDER BY data_postagem ASC;

-- 5.6) Ultima postagem (LIMIT)
SELECT * FROM post ORDER BY data_postagem DESC LIMIT 1;

-- 5.7) Juntar todas as tags em uma linha
SELECT string_agg(t.nome, ', ') FROM post_tag pt INNER JOIN tag t ON pt.tag_id = t.id_tag;

-- 5.8) Todos os usuarios sem funcao
SELECT * FROM usuario WHERE funcao_id IS NULL;

-- 5.9) Todas as tags agrupadas por post (GROUP BY)
SELECT pt.post_id, string_agg(t.nome, ', ') FROM post_tag pt INNER JOIN tag t ON pt.tag_id = t.id_tag GROUP BY pt.post_id;

-- 5.10) Todos os posts que tem mais de uma tag (HAVING)
SELECT pt.post_id, string_agg(t.nome, ', ') FROM post_tag pt INNER JOIN tag t ON pt.tag_id = t.id_tag GROUP BY pt.post_id HAVING COUNT(*) > 1; 

-- 5.11) Todos os setores de empresa e seus posts (LEFT JOIN)
SELECT s.nome, p.titulo FROM setor_empresa s LEFT JOIN post p ON s.id_setor = p.setor_id;

-- 5.12) Todos os funcionarios, mesmo que não tiver funcao(RIGHT JOIN)
SELECT f.nome, u.nome FROM funcao f RIGHT JOIN usuario u ON f.id_funcao = u.funcao_id;