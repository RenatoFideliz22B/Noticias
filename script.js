const botaoAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = querySelector("header .mobile")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("menu-open")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("menu-open")
    nav.classList.remove("abrir")
}