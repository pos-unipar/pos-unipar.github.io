DROP TABLE IF EXISTS "PRODUTO";
DROP TABLE IF EXISTS "TIPO PRODUTO";
DROP TABLE IF EXISTS "FORMULA";
DROP TABLE IF EXISTS "INGREDIENTE";
DROP TABLE IF EXISTS "UNIDADE_DE_MEDIDA";

CREATE TABLE "PRODUTO" (
    "id_produto" INTEGER NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "id_tipo_produto" INTEGER NOT NULL,
    "custo" NUMERIC(11,2) NOT NULL,
    "Id_unidade_medida" INTEGER NOT NULL,
    PRIMARY KEY ("id_produto")
);

CREATE TABLE "TIPO PRODUTO" (
    "id_tipo_produto" INTEGER NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "sigla" CHAR(2) NOT NULL,
    PRIMARY KEY ("id_tipo_produto")
);

CREATE TABLE "FORMULA" (
    "id_formula" INTEGER NOT NULL,
    "id_produto_final" INTEGER NOT NULL,
    "descicao" VARCHAR(255) NOT NULL,
    "producao" NUMERIC(11,4) NOT NULL,
    "ultima_revisao" TIMESTAMP NOT NULL,
    PRIMARY KEY ("id_formula")
);

CREATE TABLE "INGREDIENTE" (
    "id_ingrediente" INTEGER NOT NULL,
    "Id_produto" integer NOT NULL,
    "id_formula" INTEGER NOT NULL,
    "quantidade" numeric(11,4) NOT NULL,
    PRIMARY KEY ("id_ingrediente")
);

CREATE TABLE "UNIDADE_DE_MEDIDA" (
    "id_unidade_medida" iNTEGER NOT NULL,
    "unidade" VARCHAR(50) NOT NULL,
    "medida" INTEGER(4) NOT NULL,
    "sigla" CHAR(2) NOT NULL,
    PRIMARY KEY ("id_unidade_medida")
);

ALTER TABLE "PRODUTO" ADD FOREIGN KEY ("id_tipo_produto") REFERENCES "TIPO PRODUTO"("id_tipo_produto");
ALTER TABLE "PRODUTO" ADD FOREIGN KEY ("Id_unidade_medida") REFERENCES "UNIDADE_DE_MEDIDA"("id_unidade_medida");
ALTER TABLE "FORMULA" ADD FOREIGN KEY ("id_produto_final") REFERENCES "PRODUTO"("id_produto");
ALTER TABLE "INGREDIENTE" ADD FOREIGN KEY ("Id_produto") REFERENCES "PRODUTO"("id_produto");
ALTER TABLE "INGREDIENTE" ADD FOREIGN KEY ("id_formula") REFERENCES "FORMULA"("id_formula");