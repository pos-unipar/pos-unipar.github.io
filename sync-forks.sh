#!/bin/bash

echo "Atualizar fork: "

update_fork()
{
    URL=$1
    NOME=$2
    REMOTO=$3
    BRANCH=$4

    echo $URL
    git clone $URL $NOME
    cd ./$NOME
    git remote add upstream $REMOTO
    git fetch upstream
    git merge upstream/$BRANCH
    git push origin $BRANCH

    cd ../
    rm -rf ./$NOME
}

echo "Criar pasta 'tmp' para salvar arquivos momentaniamente"
mkdir -p ./tmp
cd ./tmp

# Projeto do Jemerson
# update_fork \
#     "https://github.com/pos-unipar/jfnandopr-pos-unipar-html-css-js-atividade.git" \
#     "jfnandopr-pos-unipar-html-css-js-atividade" \
#     "https://github.com/jfnandopr/jfnandopr-pos-unipar-html-css-js-atividade.git" \
#     "main"

# update_fork \
#     "https://github.com/pos-unipar/app-unipar.git" \
#     "app-unipar" \
#     "https://github.com/jeanjunior/app-unipar.git" \
#     "master"

# update_fork \
#     "https://github.com/pos-unipar/app-unipar2.git" \
#     "app-unipar2" \
#     "https://github.com/jeanjunior/app-unipar2.git" \
#     "main"

update_fork \
    "https://github.com/pos-unipar/app-unipar4.git" \
    "app-unipar4" \
    "https://github.com/jeanjunior/app-unipar4.git" \
    "main"

# Sair da pasta tmp pra poder deletar ela

cd ../
rm -rf ./tmp

echo "Baixar os arquivos e atualizar"
git submodule update --recursive --remote

