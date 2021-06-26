// 1- Importar o express
const express = require("express")

// Importando o routes
const route = require("./route")

// Passando caminho com modulo path
const path = require("path")

// 2- Criar um server
const server = express()

// Configurando o midway
server.use(express.urlencoded({extended:true}))

// Informando para o node usar o route
server.use(route)

//Configurando o ejs - view engine
server.set("view engine", "ejs")

// Informando a pasta public
server.use(express.static("public"))

//Informando onde fica a pasta view, o path pega o caminho onde está o projeto, o join junta com o arquivo onde estou
server.set("views", path.join(__dirname, "views"))

// 3-Passar a porta do servidor
server.listen(3000, () => console.log("RODANDO"))