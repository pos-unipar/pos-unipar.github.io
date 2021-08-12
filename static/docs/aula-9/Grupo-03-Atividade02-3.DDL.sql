-- 3.1 - Drope (exclua) e construa novamente ao menos uma tabela
-- Deletar a tabela
DROP TABLE public.funcao CASCADE;
-- Criar a tabela
CREATE TABLE public.funcao (
    id_funcao SERIAL NOT NULL,
    nome varchar(255),
    descricao varchar(255),
    PRIMARY KEY (id_funcao)
);
ALTER TABLE public.usuario ADD CONSTRAINT FK_usuario__funcao_id FOREIGN KEY (funcao_id) REFERENCES public.funcao(id_funcao);

-- 3.2 - Altere o tipo de dado de três campos em quaisquer tabelas
-- Tabela usuario
ALTER TABLE public.usuario ALTER COLUMN nome TYPE text;
-- Tabela funcao
ALTER TABLE public.funcao ALTER COLUMN nome TYPE text;
-- Tabela setor_empresa
ALTER TABLE public.setor_empresa ALTER COLUMN nome TYPE text;

-- 3.3 - Altere/adicione a restrição (CHECK) de outros três campos em quaisquer tabelas
ALTER TABLE public.usuario
    ADD CONSTRAINT CHECK_nome CHECK ((char_length(nome) > 10) AND (char_length(nome) <= 255))
    NOT VALID;
ALTER TABLE public.funcao
    ADD CONSTRAINT CHECK_nome CHECK ((char_length(nome) > 10) AND (char_length(nome) <= 255))
    NOT VALID;
ALTER TABLE public.setor_empresa
    ADD CONSTRAINT CHECK_nome CHECK ((char_length(nome) > 10) AND (char_length(nome) <= 255))
    NOT VALID;

-- 3.4 - Altere o nome das colunas que são PK para "ID_<nome da coluna>"
-- Tabela tag
ALTER TABLE public.tag RENAME id_tag TO id_tag_da_tabela;
ALTER TABLE public.tag RENAME id_tag_da_tabela TO id_tag;
-- tabela usuario
ALTER TABLE public.usuario RENAME id_usuario TO id_usuario_da_tabela;
ALTER TABLE public.usuario RENAME id_usuario_da_tabela TO id_usuario;
-- tabela funcionario
ALTER TABLE public.funcao RENAME id_funcao TO id_funcao_ID_nome_da_coluna;
ALTER TABLE public.funcao RENAME id_funcao_ID_nome_da_coluna TO "ID_<nome da coluna>";

-- 3.5 - Adicione duas colunas em quaisquer tabelas
ALTER TABLE public.usuario ADD COLUMN data_nascimento date;
ALTER TABLE public.tag ADD COLUMN descricao text;