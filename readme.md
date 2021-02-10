# webdriverio-test

Testes automatizados utilizando Chai e WebdriverIO. 
Projeto base para testes Web.

# Intalação

npm install

# Frameworks

- **webdriverIO**: Framework utilizado para realizar as automações mobile e web utilizando a linguagem Java Script;
- **Chai**: Chai é utilizado para as verificações dos testes realizados;
- **Mocha**: Mocha é a utilizado para o padrão BDD do projeto.

# Libs

- **superagent**: O Superagent é uma lib para prover as integrações com API;
- **moment**: Moment é lib para prover manipulações de datas/horas;
- **pg**: Pg é uma lib para prover conexão com banco de dados postgres;
- **eslit**: ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript;
- **allure**: O Allure é uma lib para prover relatórios de execução de testes.

# Execução dos testes

npm run nome_suite_test

**Ex.:** npm run login

OS arquivos que serão executados através do comando 'npm run nome_suite_test', estão localizados no arquivo 'wdio.config.js'

# Geração do relatório allure reports

## Windows

npx allure generate allure-results/ --clean

npx allure open

## Mac

allure generate allure-results/ -- clean && allure open
ou
allure open
