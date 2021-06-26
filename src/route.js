const express = require("express")

// Chamando o QuestionController
const QuestionController = require("./controllers/QuestionController")
const RoomController = require("./controllers/RoomController")

// Informando quem é o routes, essa variavel guarda todas as funcionalidades de rotas que o express tem
const route = express.Router()

// Definindo rotas/ parâmetros(request,response)/ render(renderizar na tela)
route.get("/", (req,res) => res.render("index",{page:"enter-room"}))
route.get("/create-pass" , (req,res) => res.render("index",{page:"create-pass"}))

route.post("/create-room", RoomController.create)
route.get("/room/:room" , RoomController.open)
route.post("/enterroom", RoomController.enter)

route.post("/question/create/:room", QuestionController.create)
route.post("/question/:room/:question/:action", QuestionController.index)

module.exports = route