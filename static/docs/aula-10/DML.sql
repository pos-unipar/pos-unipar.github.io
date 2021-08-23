-- 1 - Liste a data do pedido, data de entrega, nome do cliente e id dos produtos realizados empresa 01 no ano de 2021.
SELECT 
    pedidos.data_pedido, --data do pedido
    pedidos.data_entrega, --data de entrega
    clientes.nome, --nome do cliente
    pedidos.id_produto --id dos produtos
FROM 
    pedidos
    JOIN clientes ON pedidos.id_cliente = clientes.id_cliente
WHERE 
    pedidos.id_empresa = 1 -- empresa 1
    AND pedidos.data_pedido BETWEEN '01-01-2021' AND '31-12-2021'; -- Ano de 2021

--------------------------------------------------------------------------------------------------------------------------------------------------
-- 2 - Liste o Id do pedido, id do produto, data do pedido e o nome do produto, dos pedidos realizados entre 01/07/2021 e 31/07/2021.
SELECT 
    pedidos.id_pedido, --id do pedido
    pedidos.id_produto, --id do produto
    pedidos.data_pedido, --data do pedido
    produtos.produto --nome do produto
FROM 
    pedidos
    JOIN produtos ON pedidos.id_produto = produtos.id_produto
WHERE 
    pedidos.data_pedido BETWEEN '2021-07-01' AND '2021-07-31'; --realização entre 01/07/2021 e 31/07/2021

--------------------------------------------------------------------------------------------------------------------------------------------------
-- 3 - Liste os pedidos sem data de entrega definida, indicando id, data do pedido, nome do cliente e há quantos dias foi realizado.
SELECT 
    pedidos.id_pedido, --id do pedido (Eu acho que é isso que queria pois não foi espesificado)
    to_char(pedidos.data_pedido, 'YYYY-MM-DD'), --data do pedido
    clientes.nome, 
    (current_date - pedidos.data_pedido) AS dias 
FROM 
    pedidos 
    JOIN clientes ON pedidos.id_cliente = clientes.id_cliente
WHERE 
    pedidos.data_entrega IS NULL; --sem data de entrega definida

--------------------------------------------------------------------------------------------------------------------------------------------------
-- 4 - A equipe do marketing solicitou uma listagem dos 100 clientes que mais fizeram pedidos com os seus dados disponíveis no banco. 
SELECT 
    clientes.*,
    COUNT(pedidos.id_pedido) AS pedidos 
FROM 
    pedidos 
    JOIN clientes ON pedidos.id_cliente = clientes.id_cliente
GROUP BY 
    clientes.id_cliente 
ORDER BY 
    pedidos DESC 
LIMIT 100; --só 100 clientes

--------------------------------------------------------------------------------------------------------------------------------------------------
-- 5 - Em seguida, a equipe do marketing solicitou quais os produtos esses 100 clientes (questão 4) compraram nos últimos 730 dias. 
WITH clientes_quantidade AS (
    SELECT 
        clientes.id_cliente,
        COUNT(pedidos.id_pedido) AS pedidos 
    FROM 
        pedidos 
        JOIN clientes ON pedidos.id_cliente = clientes.id_cliente
    GROUP BY 
        clientes.id_cliente 
    ORDER BY 
        pedidos DESC 
    LIMIT 100
)
SELECT 
    produtos.produto, 
    COUNT(pedidos.id_produto) AS quantidade 
FROM
	pedidos
	INNER JOIN produtos ON produtos.id_produto = pedidos.id_produto
WHERE
	pedidos.data_pedido >= current_date - 730 AND
	pedidos.id_cliente IN (
		SELECT 
			id_cliente 
		FROM 
			clientes_quantidade
        )
GROUP BY 
    produtos.produto
ORDER BY 
	quantidade DESC 

--------------------------------------------------------------------------------------------------------------------------------------------------
-- 6 - O gerente de compras da empresa precisa conferir algumas informações de produtos para corrigir os relatórios de compras. 
-- Ele solicitou uma listagem com os produtos sem categoria e as categorias que não estão sendo utilizada em nenhum produto. FULL OUTER JOIN
SELECT 
    produtos.id_produto, --id do produto
    produtos.produto, --nome do produto
    produtos_categorias.id_categoria, --id da categoria do produto
    produtos_categorias.categoria --categoria do produto
FROM 
    produtos 
    -- Utilizar "FULL OUTER JOIN" traz tudo que não tem entre as duas tabelas
    FULL OUTER JOIN produtos_categorias AS produtos_categorias ON produtos.id_categoria = produtos_categorias.id_categoria
WHERE 
    produtos.id_categoria IS NULL OR produtos_categorias.categoria IS NULL;


--------------------------------------------------------------------------------------------------------------------------------------------------
-- 7 - A empresa deseja fazer uma ação de recuperação dos clientes. 
-- O setor de marketing solicitou uma listagem com os dados disponíveis no sistema 
-- dos clientes que nunca compraram (clientes sem nenhum pedido)
SELECT 
    clientes.*
FROM 
    clientes 
    LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
WHERE
	pedidos.id_cliente IS NULL OR --clientes sem pedido
    (pedidos.id_cliente IS NOT NULL AND (current_date - pedidos.data_pedido) >= 365) --clientes que não compraram em 1 ano
--------------------------------------------------------------------------------------------------------------------------------------------------
-- 8 - A equipe do marketing solicitou ao departamento uma listagem com os produtos mais vendidos por categoria.
SELECT 
    produtos_categorias.categoria, 
    produtos.produto, 
    SUM(pedidos.qtd) AS quantidade 
FROM 
    pedidos 
    JOIN produtos ON pedidos.id_produto = produtos.id_produto
    JOIN produtos_categorias ON produtos.id_categoria = produtos_categorias.id_categoria
GROUP BY produtos_categorias.categoria, produtos.produto 
ORDER BY quantidade DESC

--------------------------------------------------------------------------------------------------------------------------------------------------
-- >>Pessoal da gestão de clientes e crediário esta fazendo uma análise da base de clientes, e solicitou as seguintes informações:
-- 9 - Quantos clientes existem na base por categoria
SELECT 
	grupos_clientes.id_grupo,
    grupos_clientes.grupo, 
    COUNT(clientes.id_cliente) AS quantidade 
FROM 
    clientes 
    JOIN grupos_clientes ON clientes.id_grupo = grupos_clientes.id_grupo
GROUP BY
	grupos_clientes.id_grupo,
	grupos_clientes.grupo
ORDER BY
	quantidade DESC;

--------------------------------------------------------------------------------------------------------------------------------------------------
-- >>Pessoal da gestão de clientes e crediário esta fazendo uma análise da base de clientes, e solicitou as seguintes informações:
-- 10 - Quantos clientes existem na base por estado e exiba os 5 primeiros
SELECT 
    clientes.estado, 
    COUNT(clientes.id_cliente) AS quantidade 
FROM 
    clientes 
GROUP BY
    clientes.estado
ORDER BY
    quantidade DESC
LIMIT 5;

--------------------------------------------------------------------------------------------------------------------------------------------------
-- >>Pessoal da gestão de clientes e crediário esta fazendo uma análise da base de clientes, e solicitou as seguintes informações:
-- 11 - Quantos clientes existem na base por cidade e exiba somente as que tiverem mais de 10 clientes
SELECT 
    clientes.cidade, 
    COUNT(clientes.id_cliente) AS quantidade 
FROM 
    clientes 
GROUP BY
    clientes.cidade
HAVING
    COUNT(clientes.id_cliente) >= 10
ORDER BY
    quantidade DESC;

--------------------------------------------------------------------------------------------------------------------------------------------------
-- 12 - Quantos clientes existem na base por categoria e destes quantos nunca compraram
WITH clientes_by_grupo_quantidade AS (
	SELECT
		grupos_clientes.id_grupo,
		grupos_clientes.grupo,
		COUNT(clientes.id_cliente) AS quantidade 
	FROM
		clientes
		INNER JOIN grupos_clientes ON grupos_clientes.id_grupo = clientes.id_grupo
	GROUP BY
		grupos_clientes.id_grupo,
		grupos_clientes.grupo
),
clientes_sem_predido_by_grupo_quantidade AS (
	SELECT
		grupos_clientes.id_grupo,
		grupos_clientes.grupo,
		COUNT(clientes.id_cliente) AS quantidade 
	FROM
		clientes
		INNER JOIN grupos_clientes ON grupos_clientes.id_grupo = clientes.id_grupo
		LEFT JOIN pedidos ON pedidos.id_cliente = clientes.id_cliente
	WHERE
		pedidos.id_pedido IS NULL
	GROUP BY
		grupos_clientes.id_grupo,
		grupos_clientes.grupo
	ORDER BY
		quantidade DESC
)
SELECT
	grupos_clientes.*,
	COALESCE(cbgq.quantidade, 0) AS quantidade_clientes_total ,
	COALESCE(cspbgq.quantidade, 0) AS quantidade_clientes_sem_pedidos
FROM
	grupos_clientes
	LEFT JOIN clientes_by_grupo_quantidade cbgq ON cbgq.id_grupo = grupos_clientes.id_grupo
	LEFT JOIN clientes_sem_predido_by_grupo_quantidade cspbgq ON cspbgq.id_grupo = grupos_clientes.id_grupo
ORDER BY
	cbgq.quantidade DESC NULLS last,
	cspbgq.quantidade DESC NULLS last


--------------------------------------------------------------------------------------------------------------------------------------------------
-- >>Pessoal da gestão de clientes e crediário esta fazendo uma análise da base de clientes, e solicitou as seguintes informações:
-- 13 - Quantos clientes existem na base por cidade e destes, quantos nunca compraram 
WITH clientes_by_cidade_quantidade AS (
	SELECT
		clientes.cidade,
		COUNT(clientes.id_cliente) AS quantidade 
	FROM
		clientes
	GROUP BY
		clientes.cidade
),
clientes_sem_predido_by_cidade_quantidade AS (
	SELECT
		clientes.cidade,
		COUNT(clientes.id_cliente) AS quantidade 
	FROM
		clientes
		LEFT JOIN pedidos ON pedidos.id_cliente = clientes.id_cliente
	WHERE
		pedidos.id_pedido IS NULL
	GROUP BY
		clientes.cidade
	ORDER BY
		quantidade DESC
),
clientes_cidades AS (
	SELECT DISTINCT
		cidade
	FROM
		clientes
	GROUP BY
		cidade
)
SELECT 
	cc.cidade,
	COALESCE(cbcq.quantidade, 0) AS quantidade_clientes_total ,
	COALESCE(cspbcq.quantidade, 0) AS quantidade_clientes_sem_pedidos
FROM
	clientes_cidades cc
	LEFT JOIN clientes_by_cidade_quantidade cbcq ON cbcq.cidade = cc.cidade
	LEFT JOIN clientes_sem_predido_by_cidade_quantidade cspbcq ON cspbcq.cidade = cc.cidade
ORDER BY
	cbcq.quantidade DESC NULLS last,
	cspbcq.quantidade DESC NULLS last

--------------------------------------------------------------------------------------------------------------------------------------------------
-- >>Pessoal da gestão de clientes e crediário esta fazendo uma análise da base de clientes, e solicitou as seguintes informações:
-- 14 - A gerência de loja solicitou uma tela que trouxesse as informações principais dos produtos e seu preço atual. 
SELECT
	produtos.id_produto,
	produtos.produto,
	COALESCE(produtos_categorias.categoria, 'Sem categoria') AS categoria,
	COALESCE(produtos_precos.valor, 0.00) AS valor_atual,
	produtos_precos.data_inicio AS preco_vigencia_inicial,
	produtos_precos.data_fim AS preco_vigencia_final
FROM
	produtos
	LEFT JOIN produtos_categorias ON produtos_categorias.id_categoria = produtos.id_categoria
	LEFT JOIN produtos_precos ON 
		produtos_precos.id_produtos_precos = produtos.id_produto AND
		produtos_precos.data_inicio = (
            SELECT 
                MAX(pp.data_inicio) 
            FROM 
                produtos_precos pp 
            WHERE 
                pp.id_produtos_precos = produtos_precos.id_produtos_precos
        )
ORDER BY
	produtos.produto

--------------------------------------------------------------------------------------------------------------------------------------------------
-- >>Pessoal da gestão de clientes e crediário esta fazendo uma análise da base de clientes, e solicitou as seguintes informações:
-- 15 - Crie uma consulta que retorne o id do pedido, data que foi feito, produto, quantidade, o valor praticado nessa época e o valor total do pedido 
WITH detalhes_produtos AS (
	SELECT
		produtos.id_produto,
		produtos.produto,
		COALESCE(produtos_categorias.categoria, 'Sem categoria') AS categoria,
		COALESCE(produtos_precos.valor, 0.00) AS valor_atual,
		produtos_precos.data_inicio AS preco_vigencia_inicial,
		produtos_precos.data_fim AS preco_vigencia_final
	FROM
		produtos
		LEFT JOIN produtos_categorias ON produtos_categorias.id_categoria = produtos.id_categoria
		LEFT JOIN produtos_precos ON 
			produtos_precos.id_produtos_precos = produtos.id_produto AND
			produtos_precos.data_inicio = (
				SELECT 
					MAX(pp.data_inicio) 
				FROM 
					produtos_precos pp 
				WHERE 
					pp.id_produtos_precos = produtos_precos.id_produtos_precos
			)
)
SELECT
	pedidos.id_pedido,
	pedidos.data_pedido,
	dp.produto,
	pedidos.qtd AS quantidade,
	dp.valor_atual AS valor_produto,
	(dp.valor_atual * pedidos.qtd) AS valor_total
FROM
	pedidos
	INNER JOIN detalhes_produtos dp ON dp.id_produto = pedidos.id_produto