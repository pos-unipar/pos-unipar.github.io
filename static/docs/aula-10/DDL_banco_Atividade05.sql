CREATE TABLE public.clientes (
    id_cliente serial NOT NULL,
    nome varchar(60) NOT NULL,
    id_grupo INT NOT NULL,
    cidade varchar(60) NOT NULL,
    estado varchar(30) NOT NULL,
    PRIMARY KEY (id_cliente)
);

CREATE INDEX ON public.clientes
    (id_grupo);


CREATE TABLE public.grupos_clientes (
    id_grupo int NOT NULL,
    grupo varchar(60) NOT NULL,
    PRIMARY KEY (id_grupo)
);


CREATE TABLE public.pedidos (
    id_pedido int NOT NULL,
    data_pedido date NOT NULL,
    data_entrega date,
    id_vendedor int NOT NULL,
    id_empresa int NOT NULL,
    id_cliente int NOT NULL,
    qtd int NOT NULL,
    id_produto int NOT NULL,
    PRIMARY KEY (id_pedido)
);

CREATE INDEX ON public.pedidos
    (id_vendedor);
CREATE INDEX ON public.pedidos
    (id_empresa);
CREATE INDEX ON public.pedidos
    (id_cliente);


CREATE TABLE public.produtos (
    id_produto int NOT NULL,
    produto varchar(60) NOT NULL,
    id_categoria int,
    PRIMARY KEY (id_produto)
);

CREATE INDEX ON public.produtos
    (id_categoria);


CREATE TABLE public.produtos_precos (
    id_produtos_precos int NOT NULL,
    data_inicio date NOT NULL,
    data_fim date,
    valor numeric(15,2) NOT NULL,
    PRIMARY KEY (id_produtos_precos, data_inicio)
);


CREATE TABLE public.produtos_categorias (
    id_categoria int NOT NULL,
    categoria varchar(60) NOT NULL,
    PRIMARY KEY (id_categoria)
);


CREATE TABLE public.empresas (
    id_empresa int NOT NULL,
    unidade varchar(60) NOT NULL,
    PRIMARY KEY (id_empresa)
);


CREATE TABLE public.vendedores (
    id_vendedor INT NOT NULL,
    nome varchar(60) NOT NULL,
    PRIMARY KEY (id_vendedor)
);


ALTER TABLE public.clientes ADD CONSTRAINT FK_clientes__id_grupo FOREIGN KEY (id_grupo) REFERENCES public.grupos_clientes(id_grupo);
ALTER TABLE public.pedidos ADD CONSTRAINT FK_pedidos__id_empresa FOREIGN KEY (id_empresa) REFERENCES public.empresas(id_empresa);
ALTER TABLE public.pedidos ADD CONSTRAINT FK_pedidos__id_cliente FOREIGN KEY (id_cliente) REFERENCES public.clientes(id_cliente);
ALTER TABLE public.produtos ADD CONSTRAINT FK_produtos__id_categoria FOREIGN KEY (id_categoria) REFERENCES public.produtos_categorias(id_categoria);