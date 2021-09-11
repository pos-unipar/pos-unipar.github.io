/*CORREÇÃO ATIVIDAED 05 - PRATICANDO QUERIES: */

--1 - Liste a data do pedido, data de entrega, 
--nome do cliente e id dos produtos realizados empresa 01
-- no ano de 2021.
SELECT 
	p.id_pedido,
	p.data_pedido,
	pr.id_produto, 
	pr.produto
FROM
	pedidos p
	JOIN produtos pr USING (id_produto)
WHERE
	p.id_empresa = 1 AND
	EXTRACT(YEAR from p.data_pedido) = 2021

--Também pode-se utilizar:
--> BETWEEN '01/01/2021' AND '31/12/2021'
--> To_char(data_pedido, 'yyyy') = 2021



--2 - Liste o Id do pedido, id do produto, data do pedido e o 
--nome do produto, dos pedidos realizados entre 
--01/07/2021 e 31/07/2021.
SELECT 
	p.id_pedido,
	p.data_pedido,
	pr.id_produto, 
	pr.produto
FROM
	pedidos p
	JOIN produtos pr USING (id_produto)
WHERE
	p.data_pedido BETWEEN '01/07/2021' AND '31/07/2021'


--3 - Liste os pedidos sem data de entrega definida, 
--indicando id, data do pedido, nome do cliente e há quantos 
--dias foi realizado.
SELECT 
	id_pedido,
	data_pedido,
	c.nome as cliente,
	current_date - p.data_pedido as dias_realizado,
	p.data_entrega		
FROM
	pedidos p
	INNER JOIN clientes c USING (id_cliente)
WHERE
	p.data_entrega is null


--4 - A equipe do marketing solicitou uma listagem dos 
--100 clientes com mais quantidade de pedidos, 
--listando as informações do cliente disponíveis no banco.
SELECT
	C.id_cliente, 
	c.nome, 	
	c.cidade,
	COUNT(id_pedido) 
FROM
	clientes c 
	--,pedidos p
	INNER JOIN pedidos p USING (id_cliente)
	--INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
GROUP BY
	1,2,3
ORDER BY
	4 DESC
LIMIT 100

--5 - Em seguida, a equipe do marketing solicitou quais os produtos esses 100 
--clientes (questão 4) compraram nos últimos 730 dias. 
SELECT
	p.id_produto,
	pr.produto
FROM
	(SELECT
		C.id_cliente, c.nome, 	c.cidade,
		COUNT(id_pedido) 
	FROM
		clientes c 
		--,pedidos p
		INNER JOIN pedidos p USING (id_cliente)
		--INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
	WHERE
		c.id_cliente = p.id_cliente
	GROUP BY
		1,2,3
	ORDER BY
		4 DESC
	LIMIT 100) C
	INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
	INNER JOIN produtos pr using (id_produto)
WHERE
	current_date - data_pedido <= 730
GROUP BY
	1,2
	
--6 - O gerente de compras da empresa precisa conferir 
--algumas informações de produtos para corrigir os relatórios 
--de compras. Ele solicitou uma listagem com os produtos sem 
--categoria e as categorias que não estão sendo utilizada em 
--nenhum produto. 
SELECT * 
FROM PRODUTOS P 
	full JOIN produtos_categorias C USING (id_categoria) 
WHERE P.ID_CATEGORIA IS NULL or P.ID_PRODUTO IS NULL


--7 - A empresa deseja fazer uma ação de recuperação dos clientes. 
--O setor de marketing solicitou uma listagem com os dados disponíveis 
--no sistema dos clientes que nunca compraram e os que já compraram 
--porém a última compra foi a mais de 365 dias.
SELECT
	c.id_cliente,
	c.nome,
	Max(p.data_pedido) as Ultima_compra
FROM
	clientes c
	Left Join pedidos p USING (id_cliente)
GROUP BY
	1,2
HAVING
	MAX(p.data_pedido) < (current_date - 365) Or
	MAX(p.data_pedido) is null
ORDER BY
	3 DESC
	

--8 - A equipe do marketing solicitou ao departamento uma 
--listagem com os produtos mais vendidos por categoria.

--1 - COLEGA STÉFANO USANDO SUBCONSULTAS:
SELECT
	DISTINCT(PR.PRODUTO) 					AS PRODUTO, --PEGA O PRODUTO. 
	
	PR.ID_PRODUTO 							AS ID_PRODUTO, --PEGA ID_PRODUTO
    
  	(SELECT PRODUTOS_CATEGORIAS.CATEGORIA
	 FROM PEDIDOS, PRODUTOS_CATEGORIAS
	 WHERE PEDIDOS.ID_PRODUTO = PR.ID_PRODUTO
	  	   AND PR.ID_CATEGORIA = PRODUTOS_CATEGORIAS.ID_CATEGORIA
	 LIMIT 1 ) 								AS CATEGORIA, --PEGA A CATEGORIA.
  
	(SELECT SUM(PEDIDOS.QTD) 
	 FROM PEDIDOS, PRODUTOS
	 WHERE PEDIDOS.ID_PRODUTO = PRODUTOS.ID_PRODUTO
	   		AND PRODUTOS.ID_CATEGORIA = PRC.ID_CATEGORIA
	 GROUP BY PRODUTOS.PRODUTO
	 ORDER BY SUM(PEDIDOS.QTD) DESC
	 LIMIT 1) 								AS QTDE_VENDIDA --PEGA A QUANTIDADE DO PRODUTO QUE MAIS VENDEU.
	 
FROM PRODUTOS PR, produtos_categorias PRC
WHERE PR.ID_PRODUTO IN (SELECT PRODUTOS.ID_PRODUTO
							  FROM PRODUTOS
							  WHERE PRODUTOS.ID_CATEGORIA = PRC.ID_CATEGORIA
							  LIMIT 1 )
	  AND PR.ID_CATEGORIA = PRC.ID_CATEGORIA	
ORDER BY QTDE_VENDIDA DESC



--2 - USANDO ROW_NUMBER()
SELECT 
	* 
FROM 
	(SELECT *, Row_Number() OVER (PARTITION BY Categoria ORDER BY Qtde DESC) AS rank
	 FROM 
	 	(SELECT 
		 	c.categoria,
			pr.produto,
			SUM(p.Qtd) as Qtde,
			COUNT(DISTINCT P.ID_PEDIDO)  AS Pedidos
		 FROM pedidos p
			JOIN PRODUTOS PR USING (ID_PRODUTO)
			JOIN PRODUTOS_CATEGORIAS C USING (ID_CATEGORIA)
		 GROUP BY c,categoria, pr.produto
		 ) as Q1 
	 ) AS Q2
WHERE  
	rank <= 1
ORDER BY 1,2
-->Mais: https://www.postgresqltutorial.com/postgresql-row_number/

--3 - USANDO WITH
WITH PR_QTDES AS
(SELECT 
		ROW_NUMBER() OVER (PARTITION BY C.CATEGORIA ORDER BY COUNT(P.QTD) DESC) AS RANK,
 		C.CATEGORIA,
		PR.ID_PRODUTO,
		PR.PRODUTO, 
		SUM(P.QTD) AS quantidade,
 		COUNT(DISTINCT P.ID_PEDIDO) AS pedidos
	FROM
		PEDIDOS P
		JOIN PRODUTOS PR USING (ID_PRODUTO)
		JOIN PRODUTOS_CATEGORIAS C USING (ID_CATEGORIA)
	GROUP BY 2,3,4
	ORDER BY 5 DESC
) -- CARREGA OS DADOS PARA UM TABELA TEMPORÁRIA (CTE) CHAMADA PR_QTDES. DEPOIS É POSSÍVEL USÁ-LA NA(S) CONSULTA(S) ABAIXO. 
SELECT * 
FROM PR_QTDES
WHERE RANK = 1



-->>Pessoal da gestão de clientes e crediário esta fazendo uma análise da base de clientes, e solicitou as seguintes informações:

--9 - Quantos clientes existem na base por grupo
SELECT
	gc.grupo,
	COUNT(c.id_cliente) as clientes
FROM 
	clientes c
	JOIN grupos_clientes gc USING (id_grupo)
GROUP BY
	gc.grupo
ORDER BY
 	2 DESC

--10 - Quantos clientes existem na base por estado e 
--exiba somente os 5 estados com mais clientes
SELECT 
	estado,
	count(id_cliente) as clientes
FROM
	clientes
GROUP BY
	estado
ORDER BY
	2 DESC
LIMIT 5



--11 - Quantos clientes existem na base por cidade e 
--exiba somente as que tiverem mais de 10 clientes
SELECT 
	cidade || ' - ' || estado as cidade,
	count(id_cliente) as clientes
FROM
	clientes
GROUP BY
	1
HAVING 
	count(id_cliente) > 10
ORDER BY
	2 DESC


--12 - Quantos clientes existem na base por GRUPO e 
--destes quantos nunca compraram
SELECT
	gc.grupo,
	COUNT(c.id_cliente) as total_clientes,
	SUM(CASE WHEN p.id_pedido is null 
		 	   THEN 1 ELSE 0 END) 			AS nunca_compraram			
FROM 
	clientes c
	JOIN grupos_clientes gc USING (id_grupo)
	LEFT JOIN pedidos p USING (id_cliente)
GROUP BY
	gc.grupo
ORDER BY
 	2 DESC
	

--13 - Quantos clientes existem na base por cidade e destes, 
--quantos nunca compraram 
SELECT
	c.cidade,
	COUNT(c.id_cliente) as total_clientes,
	SUM(CASE WHEN p.id_pedido is null 
		 	   THEN 1 ELSE 0 END) 			AS nunca_compraram			
FROM 
	clientes c
	LEFT JOIN pedidos p USING (id_cliente)
GROUP BY
	cidade
ORDER BY
 	2 DESC
	

--14 - A gerência de loja solicitou uma tela que trouxesse 
--as informações principais dos produtos e seu preço atual. 
--: 1 - USANDO SUBCONSULTA:
SELECT
	p.id_produto,
	p.produto,
	pc.categoria,
	(SELECT valor FROM produtos_precos pp WHERE pp.id_produtos_precos = p.id_produto AND data_fim is null) as valor_atual
FROM
	produtos p
	JOIN produtos_categorias pc USING (id_categoria)
	
--: 2 - USANDO JOIN
SELECT
	p.id_produto,
	p.produto,
	pc.categoria,
	pp.valor as valor_atual,
	pp.data_inicio as ultima_alteracao
FROM
	produtos p
	JOIN produtos_categorias pc USING (id_categoria)
	JOIN produtos_precos pp ON pp.id_produtos_precos = p.id_produto AND pp.data_fim is null

--15 - Crie uma consulta que retorne o id do pedido, 
--data que foi feito, produto, quantidade, o valor praticado 
--nessa época e o valor total do pedido 
SELECT 
	pe.id_pedido, 
	pe.data_pedido, 
	pe.id_produto, 
	pr.produto, 
	pe.qtd, 
	pp.valor, 
	pp.valor * pe.qtd as valor_total_pedido
FROM pedidos pe
	INNER JOIN produtos pr on (pr.id_produto = pe.id_produto)
	LEFT JOIN produtos_precos pp on (pp.id_produtos_precos = pr.id_produto
							 and pe.data_pedido BETWEEN pp.data_inicio and COALESCE(pp.data_fim, CURRENT_DATE))
