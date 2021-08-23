---
id: disciplina-3
title: Banco de Dados
hide_title: false
hide_table_of_contents: false
sidebar_label: Banco de Dados
description: Banco de Dados
keywords:
  - banco de dados
  - disciplina
  - fernando
slug: /banco-de-dados
---

**Professor**: [Fernando](/professores/fernando)

## Assuntos abordados

- Banco de dados relacional;
- Banco de dados não relacional;

## Calendário

- [31/07/2021 - Aula 01](/blog/9)
  - Revisão Modelagem e conceitos fundamentais (Projeto, MER, DER, chaves, atributos, tipos)
  - SQL (DDL, DML)
  - JOINS (Inner, Cross, Left, Right e Full joins)
- [14/08/2021 - Aula 02](/blog/10)
  - DML
  - INSERT, UPDATE e DELETE.
- [28/08/2021 - Aula 03](#)


## Materiais utilizados na disciplina
- 31/07/2021
  - [Máterial em PDF](/docs/aula-9/Aula-01.01-BDs-31_07.pdf) - Slide 01 da Aula 1
  - [Máterial em PDF](/docs/aula-9/Aula-01.02-BDs-31_07.pdf) - Slide 02 da Aula 1
  - Material complementar
    - [Máterial em PDF 01](/docs/aula-9/ARTIGO_TRADUCAO_RelationalModel.pdf) - ARTIGO_TRADUCAO_RelationalModel.pdf
    - [Máterial em PDF 02](/docs/aula-9/ARTIGO_TRADUCAO-A_Comparative_Analysis_of_Entity-Relationship_Diagrams.pdf) - ARTIGO_TRADUCAO-A_Comparative_Analysis_of_Entity-Relationship_Diagrams.pdf
    - [Máterial em PDF 03](/docs/aula-9/ARTIGO-A_Comparative_Analysis_of_Entity-Relationship_Diagrams.pdf) - ARTIGO-A_Comparative_Analysis_of_Entity-Relationship_Diagrams.pdf
    - [Máterial em PDF 04](/docs/aula-9/ARTIGO-Codd1970_RelationalModel.pdf) - ARTIGO-Codd1970_RelationalModel.pdf
- 14/08/2021
  - [Máterial em PDF](/docs/aula-10/Aula-02.01-BDs-14_08.pdf) - Slide 01 da Aula 2
  - [Máterial em PDF](/docs/aula-10/Aula-02.02-BDs-14_08.pdf) - Slide 02 da Aula 2

## Atividades solicitadas para serem entregues


### Atividade 1 

> [Formulário online](https://docs.google.com/forms/d/17hIuwtWFqHDxC8TTlHgei17IzcSJO8xCUaR4cGdGqaQ/viewform)

<details><summary>Transcrição</summary>
<p>
<small>
A partir dos conceitos estudados, com base no material de apoio e consultas, pede-se a elaboração de um modelo físico (entidades, atributos, tipos e relacionamentos) de um banco de dados com tema livre.

A atividade pode ser feita em grupos de até 5 pessoas. 

Defina um tema no grupo, ou seja um “Minimundo”, descreva esse minimundo e implemente usando o StarUML (New File From Template -> 
Data Model) o modelo físico adequado.

Como não teremos os modelos conceituais nem o lógico para auxiliar, escolha um tema que vocês tenham domínio para permitir a construção adequada do modelo. 
</small>
</p>
</details>  
<br />

```Entregue durante a aula```

Download do projeto entregue: [Grupo-03.zip](/docs/aula-9/Grupo-03.zip)

### Atividade 2 

> [Formulário online](https://docs.google.com/forms/d/e/1FAIpQLScXz4f0UvfNa8bTgN0TFvtIILmeUa4ThopJGGDHKKDiHfDu6g/viewform)

<details><summary>Transcrição</summary>
<p>
<small>
INSTRUÇÕES: 

CONSIDERE O SEGUINTE MINIMUNDO:

A empresa de agronegócio AgriTray deseja construir um sistema para que os funcionários de campo registrem internamente relatos positivos ou de aprendizados obtidos em atendimento aos agricultores. A ideia é criar uma base de conhecimento com base nas experiências de campo dos seus veterinários, agrônomos e técnicos. O sistema deve funcionar como uma rede social onde o usuário terá um perfil com nome e função (ex: José - Agrônomo). Esse perfil poderá fazer posts de textos, fotos e vídeos curtos, sempre identificando o local do registro, área ou segmento dentro da empresa (suíno, aves, grãos, etc) e definindo tags sobre o conteúdo, como por exemplo #ração, #tratamento_virose, #gripe, #aumento_produção, etc. Um usuário poderá ver todos os posts e marcar os seus preferidos para ver depois. 

A partir do minimundo acima, faça:
1 - Construa um projeto físico de banco de dados relacional que atenda os requisitos. Dados não apresentados podem ser complementados com seu conhecimento sobre o tema ou pesquisas complementares. Implemente as principais entidades envolvido para resolver o problema principal. 

2 - Escreva o código DDL para a construção do banco, criando as restrições de Chave primária, Chave estrangeira e Checks para cada campo necessário

3 - Escreva um código e entregue em um arquivo único, identificando cada item:  
  3.1 - Drope (exclua) e construa novamente ao menos uma tabela  
  3.2 - Altere o tipo de dado de três campos em quaisquer tabelas  
  3.3 - Altere/adicione a restrição (CHECK) de outros três campos em quaisquer tabelas  
  3.4 - Altere o nome das colunas que são PK para "ID_nome da coluna"  
  3.5 - Adicione duas colunas em quaisquer tabelas

Use a documentação do PostgreSQL 13 e os materiais da aula.
https://www.postgresql.org/docs/13/ddl.html

Obs: alguns itens 3 não vimos em sala. Irei colocar no slide SQL ao longo da semana. Porém podem usar a documentação a fim de sanar dúvidas. 

Obs2: Para fazer a modelagem e o como resolver o desafio proposto, utilize a criatividade sobre como a melhor forma de organizar os dados, pensando na recuperação das informações ali contidas.
</small>
</p>
</details>  
<br />

```Entregue até 14/08/2021```

Download do projeto entregue: [Grupo-03-Atividade02-1.DDL.zip](/docs/aula-9/Grupo-03-Atividade02-1.DDL.zip)  
Download do projeto entregue: [Grupo-03-Atividade02-2.DDL.sql](/docs/aula-9/Grupo-03-Atividade02-2.DDL.sql)  
Download do projeto entregue: [Grupo-03-Atividade02-3.DDL.sql](/docs/aula-9/Grupo-03-Atividade02-3.DDL.sql)  


### Atividade 3 

> [Formulário online](https://docs.google.com/forms/d/e/1FAIpQLSfevDwHQGIxbBlHYIPDucF6SiD4H0bVx5qI3_b-3KSTKF9goQ/viewform)

<details><summary>Transcrição</summary>
<p>
<small>
INSTRUÇÕES:

A partir dos modelos criados nas atividades anteriores, escolha um deles e crie os comandos DML para:
- Inserir dados
- Alterar dados
- Excluir dados

Busque utilizar variações na clausula WHERE, Sub Consultas, etc, conforme os exemplos em sala.

Para entregar, Anexo o script ou scripts no formulário
</small>
</p>
</details>  
<br />

```Entregue durante a aula```

Download do projeto entregue: [Grupo-03-Atividade03.DDL.sql](/docs/aula-10/Grupo-03-Atividade03.DDL.sql)  

### Atividade 4 

> [Formulário online](https://docs.google.com/forms/d/e/1FAIpQLScEAt5uRqNFKcbLUT8A2VYQur6ii42i698qlY7QdEiUeXGTVw/viewform)

<details><summary>Transcrição</summary>
<p>
<small>
A partir do banco criado na atividade anterior, execute as tarefas abaixo. .

Para entregar, Respondo no próprio formulário as questões iniciais e anexe o script ou scripts na questão relacionada ao  banco criado.
</small>
</p>
</details>  
<br />

```Entregue até 28/08/2021```

Download do projeto entregue: [Grupo-03-Atividade04.DDL.sql](/docs/aula-10/Grupo-03-Atividade04.DDL.sql)  

### Atividade 5 

> [Formulário online](https://docs.google.com/forms/d/e/1FAIpQLScscLZGmlNnnaihODIXOh1PMXbdqcDeTEm25DoRI-aVF0cTOw/viewform)

<details><summary>Transcrição</summary>
<p>
<small>
CRIE AS SEGUINTES CONSULTAS (QUERIES):
1 - Liste a data do pedido, data de entrega, nome do cliente e id dos produtos realizados empresa 01 no ano de 2021.

2 - Liste o Id do pedido, id do produto, data do pedido e o nome do produto, dos pedidos realizados entre 01/07/2021 e 31/07/2021.

3 - Liste os pedidos sem data de entrega definida, indicando id, data do pedido, nome do cliente e há quantos dias foi realizado.

4 - A equipe do marketing solicitou uma listagem dos 100 clientes com mais quantidade de pedidos, listando as informações do cliente disponíveis no banco.

5 - Em seguida, a equipe do marketing solicitou quais os produtos esses 100 clientes (questão 4) compraram nos últimos 730 dias. 

6 - O gerente de compras da empresa precisa conferir algumas informações de produtos para corrigir os relatórios de compras. Ele solicitou uma listagem com os produtos sem categoria e as categorias que não estão sendo utilizada em nenhum produto. 

7 - A empresa deseja fazer uma ação de recuperação dos clientes. O setor de marketing solicitou uma listagem com os dados disponíveis no sistema dos clientes que nunca compraram e os que já compraram porém a última compra foi a mais de 365 dias.

8 - A equipe do marketing solicitou ao departamento uma listagem com os produtos mais vendidos por categoria.

Pessoal da gestão de clientes e crediário esta fazendo uma análise da base de clientes, e solicitou as seguintes informações:

9 - Quantos clientes existem na base por categoria

10 - Quantos clientes existem na base por estado e exiba os 5 primeiros

11 - Quantos clientes existem na base por cidade e exiba somente as que tiverem mais de 10 clientes

12 - Quantos clientes existem na base por categoria e destes quantos nunca compraram

13 - Quantos clientes existem na base por cidade e destes, quantos nunca compraram 
  
14 - A gerência de loja solicitou uma tela que trouxesse as informações principais dos produtos e seu preço atual. 

15 - Crie uma consulta que retorne o id do pedido, data que foi feito, produto, quantidade, o valor praticado nessa época e o valor total do pedido 
</small>
</p>
</details>  
<br />

```Entregue até 29/08/2021```

Download do arquivo entregue: [DML.sql](/docs/aula-10/DML.sql)  