# Deliver
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/devsuperior/sds1-wmazoni/blob/master/LICENSE) 

# Sobre o projeto

Link: (Em desenvolvimento)

Deliver é um sistema completo para web e dispositivos móveis desenvolvido durante a edição da Semana DevSuperior (#sds2), um evento organizado pela DevSuperior.
Essa plataforma permite aos usuários selecionem itens e façam um pedido colocando seu endereço de entrega, a baixa da entrega e feita pelo aplicativo mobile.

## Layout mobile
![Mobile 1](https://imgur.com/5kZkGlW)

## Layout web
![Web 1](https://imgur.com/yXq1uY8)

![Web 2](https://imgur.com/eWtDDyi)

## Modelo conceitual
![Modelo Conceitual](https://github.com/devsuperior/sds2/blob/master/assets/modelo-conceitual.png)

## Camadas
![Modelo Conceitual](https://github.com/devsuperior/sds2/blob/master/assets/camadas.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo
## Implantação em produção
- Back end: (Heroku ou Railway)
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone git@github.com:VitorRiboli/deliver.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone git@github.com:VitorRiboli/deliver.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
rpm run start
```

# Autor

Vitor Riboli

https://www.linkedin.com/in/vitorriboli/