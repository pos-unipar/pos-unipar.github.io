---
id: disciplina-9
title: DevOps
hide_title: false
hide_table_of_contents: false
sidebar_label: DevOps
description: DevOps
keywords:
  - devops
  - jemerson
slug: /devops
---

**Professor**: [Jemerson](/professores/jemerson)

:::info Descrição do site da Unipar
Não tem, pois essa matéria entrou no lugar de PWA
:::

## Assuntos abordados

- DevOps;
- Conceitos;
- Terminologias;
- Certificação;
- Mercado;
- Infraestrutura Cloud e on-premise;
- Containers;
- CI/CD;
- Infraestrutura como código (IaC);
- Monitoramento e gestão de incidentes.

## Calendário

- [13/08/2022 - Aula 01](/blog/31)
  - DevOps
  - Conceitos
  - Docker
- [27/08/2022 - Aula 02](/blog/32)
  - Infraestrutura como código (IaC)
  - Terraform
  - Ansible
- [03/09/2022 - Aula 03](/blog/33)
  - Monitoramento e gestão de incidentes
  - Prometheus
  - Grafana


## Materiais utilizados na disciplina
- 13/08/2022
  - [Máterial em PDF](/docs/aula-31/DevOps-Disciplina.pdf) - Informações sobre a disciplina	
  - [Máterial em PDF](/docs/aula-31/DevOps-First.pdf) - Slide 01 da Aula 1
- 27/08/2022
  - [Máterial em PDF](/docs/aula-32/DevOps-Second.pdf) - Slide 01 da Aula 2
- 10/09/2022
  - [Máterial em PDF](/docs/aula-33/DevOps-Third.pdf) - Slide 01 da Aula 3

## Repositórios (Forks)
- [unipar-devops](https://github.com/pos-unipar/unipar-devops)
- [my-grails-app](https://github.com/pos-unipar/my-grails-app.git)

## Atividades solicitadas para serem entregues

### Atividade 1

> Página 51 do '[Máterial em PDF](/docs/aula-31/DevOps-First.pdf)'

```Entregar durante a aula 1```

Utilizar uma aplicação qualquer, de qualquer linguagem, mas uma aplicação Web, Dê preferência com alguma conectividade com algum banco de dados.
Criar um Dockerfile que construa e gere uma imagem da aplicação.

### Atividade 2

> Página 27 do '[Máterial em PDF](/docs/aula-32/DevOps-Second.pdf)'

```Entregar durante a aula 2```

Criar um segundo servidor EC2 utilizando Terraform.
Configurar os dois servidores para executar a aplicação do docker-compose.yml da atividade da aula anterior, configurando com Ansible.

### Trabalho final

> Página 12 do '[Máterial em PDF](/docs/aula-33/DevOps-Third.pdf)'

```Entregar durante a aula 3```

Continuando as atividades anteriores
- Finalizar criação do Dockerfile para a aplicação escohida
- Finalizar implantação EC2 e CI/CD
- Enviar métricas da aplicação para Prometheus

