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