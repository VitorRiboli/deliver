# Deliver
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/devsuperior/sds1-wmazoni/blob/master/LICENSE) 

# Sobre o projeto

Link: (Em desenvolvimento)

Deliver é um sistema completo para web e dispositivos móveis desenvolvido durante a edição da Semana DevSuperior (#sds2), um evento organizado pela DevSuperior.
Essa plataforma permite aos usuários selecionem itens e façam um pedido colocando seu endereço de entrega, a baixa da entrega e feita pelo aplicativo mobile.

## Layout mobile
![Mobile 1](https://github.com/VitorRiboli/deliver/blob/main/assets/mobile.png)

## Layout web
![Web 1](https://github.com/VitorRiboli/deliver/blob/main/assets/home.png)

![Web 2](https://github.com/VitorRiboli/deliver/blob/main/assets/list.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/VitorRiboli/deliver/blob/main/assets/modelo-conceitual.png)

## Camadas
![Modelo Conceitual](https://github.com/VitorRiboli/deliver/blob/main/assets/camadas.png)

## Casos de Uso
casos de uso:

Primeiro Cenário: Registrar Pedido

1[OUT]: O sistema mostra uma listagem com nome, preço, descrição e foto de todos produtos.
 Ordenados por nome.

2[IN]: O cliente seleciona os produtos desejados e informa a localização de entrega do pedido.

3[OUT]: O sistema informa o código do pedido.

Segundo Cenário: Entregar pedido

1[OUT]: O sistema informa uma listagem contendo código, valor total, tempo, itens, dos pedidos pendentes.
 Ordenados por ordem do mais antigo para o mais recente.

2[IN]: O entregador seleciona um pedido.

3[OUT]: O sistema informa um mapa com a rota até a localização de entrega.

4[IN]: O entregador informa a entrega do pedido.

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