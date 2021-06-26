import Modal from "./modal.js"

// Toda vez que eu colocar modal ela vai estar rodando a função modal
const modal = Modal()

// Selecionando conteudo da modal

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

//Pegar todos botoes com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

// Quando o botao for clicado ele roda o modal.open
checkButtons.forEach(button => {
  button.addEventListener("click", handleClick)
})

// Quando o botao delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button =>{
  button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
  event.preventDefault()
  const text = check ? "Marcar como lida" : "Excluir"
  const slug = check ? "check" : "delete"
  const roomId = document.querySelector("#room-id").dataset.id
  // Pegando o Id
  const questionId = event.target.dataset.id

  const form = document.querySelector(".modal form")
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta?`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
  check? modalButton.classList.remove("red") : modalButton.classList.add("red")

  modal.open()
}
