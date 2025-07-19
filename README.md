# 🧪 banco-api-testes
Objetivo
O projeto Banco API Testes tem como objetivo realizar a automação de testes para a API REST do projeto banco-api, desenvolvido como parte da Mentoria de Testes 2.0, Módulo 4: Testando e Automatizando Testes de API. Este repositório contém testes automatizados escritos em JavaScript, utilizando bibliotecas como Mocha, Supertest e Chai para validar o comportamento da API, garantindo sua funcionalidade, confiabilidade e conformidade com os requisitos especificados.
Stack Utilizada
O projeto utiliza as seguintes tecnologias e bibliotecas:

JavaScript: Linguagem de programação para escrita dos testes.
Mocha: Framework de testes para estruturar e executar os casos de teste (https://mochajs.org/).
Supertest: Biblioteca para testar endpoints HTTP da API (https://github.com/visionmedia/supertest).
Chai: Biblioteca de asserções para validação dos resultados dos testes (https://www.chaijs.com/).
Mochawesome: Gerador de relatórios de teste em formato HTML (https://github.com/adamgruber/mochawesome).
Dotenv: Biblioteca para carregar variáveis de ambiente a partir do arquivo .env (https://github.com/motdotla/dotenv).

Consulte o arquivo package.json para a lista completa de dependências e suas versões.

## 📁 Estrutura de diretórios
A estrutura de diretórios do projeto é organizada da seguinte forma:
banco-api-testes/
.
├── fixtures/
| ├── postLogin.json
| └── postTransferencias.json
├── helpers/
│ └──autenticacao.js
├── test/
│ ├── transacoes.test.js       # Testes de endpoint de transações
│ └── login.test.js           # Testes relacionados à autenticação
├── mochawesome-report/       # Diretório de relatórios gerados (após execução)
├── .env                      # Variáveis de ambiente (criado pelo usuário)
├── .gitignore
├── package.json
└── README.md

Formato do Arquivo .env
O arquivo .env deve ser criado na raiz do projeto para configurar a URL base da API a ser testada. Ele não é versionado no repositório por motivos de segurança e flexibilidade. O formato do arquivo é o seguinte:
BASE_URL=http://localhost:3000


BASE_URL: Define a URL base da API que será testada (exemplo: http://localhost:3000 para um ambiente local). Substitua pelo endereço correto da API em seu ambiente.

Para criar o arquivo, siga os passos:

Crie um arquivo chamado .env na raiz do projeto.
Adicione a variável BASE_URL com o valor correspondente à URL da API.

Comandos para Execução de Testes e Geração de Relatórios
Para executar os testes e gerar relatórios, siga os passos abaixo:

Clone o repositório:
git clone https://github.com/BadiTurnes/banco-api-testes.git
cd banco-api-testes


Instale as dependências:
npm install


Crie o arquivo .env:Crie o arquivo .env na raiz do projeto com o formato descrito acima.

Execute os testes:
npm test

Este comando executa todos os testes utilizando o Mocha e exibe os resultados no terminal.

Gere o relatório HTML com Mochawesome:
npm run test:report

Este comando executa os testes e gera um relatório em HTML no diretório mochawesome-report/. O arquivo principal será mochawesome-report/mochawesome.html.

Limpe o diretório de relatórios (opcional):Caso queira remover relatórios antigos antes de gerar novos:
npm run clean

Nota: Certifique-se de que a API do projeto banco-api esteja em execução e acessível na URL configurada no .env antes de rodar os testes.
Links para Documentação das Dependências

Mocha: Framework de testes utilizado para estruturar e executar os testes.
Supertest: Biblioteca para testar requisições HTTP.
Chai: Biblioteca de asserções para validação dos resultados.
Mochawesome: Gerador de relatórios de teste em HTML.
Dotenv: Biblioteca para gerenciamento de variáveis de ambiente.

Contribuições
Contribuições são bem-vindas! Para contribuir:

Faça um fork do repositório.
Crie uma branch para sua feature ou correção (git checkout -b minha-feature).
Commit suas alterações (git commit -m 'Adiciona minha feature').
Envie para o repositório remoto (git push origin minha-feature).
Abra um Pull Request.

## 🤝 Créditos
API testada: juliodelimas/banco-api
