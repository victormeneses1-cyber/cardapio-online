let carrinho = []
let total = 0

const cardapio = {

pizzas: [
{
nome:"Mussarela",
preco:18,
descricao:"Molho, mussarela, tomate cereja e orégano"
},
{
nome:"Frango com Catupiry",
preco:18,
descricao:"Molho, mussarela, frango, catupiry e orégano"
},
{
nome:"Calabresa",
preco:18,
descricao:"Molho, mussarela, calabresa e orégano"
},
{
nome:"Carne Seca",
preco:18,
descricao:"Molho, mussarela, carne seca, cebola e orégano",
img: "brotinho_de_carne_seca.jpeg"
}
],

espetinhos: [
{
nome:"Espetinho de Carne",
preco:18,
descricao:"Acompanha farofa e molho"
},
{
nome:"Espetinho de Kafta",
preco:18,
descricao:"Acompanha farofa e molho"
},
{
nome:"Espetinho de Coração",
preco:18,
descricao:"Acompanha farofa e molho"
},
{
nome:"Espetinho de Lombo",
preco:18,
descricao:"Acompanha farofa e molho"
},
{
nome:"Espetinho de Queijo Coalho",
preco:18,
descricao:"Acompanha farofa e molho"
},
{
nome:"Espetinho de Frango",
preco:15,
descricao:"Acompanha farofa e molho"
},
{
nome:"Espetinho de Linguiça",
preco:17,
descricao:"Acompanha farofa e molho"
}
],

cervejas: [
{nome:"Corona", preco:13, img:"corona.jpeg"},
{nome:"Heineken", preco:13, img:"heineken.jpeg"},
{nome:"Stella Pure Gold", preco:13, img:"Stella.jpeg"},
{nome:"Therezópolis", preco:13, img:"therezopolis.jpeg"},
{nome:"Michelob", preco:13, img:"michelob.jpeg"}
],

bebidas: [
{nome:"Coca-Cola", preco:8.5, img:"coca_cola.jpeg"},
{nome:"Sprite", preco:8.5, img:"sprite.jpeg"},
{nome:"Água com gás", preco:6.5, img:"agua_com_gas.jpeg"},
{nome:"Água sem gás", preco:6, img:"agua_sem_gas.jpeg"},
{nome:"Ice Tea", preco:8, img:"ice_tea.jpeg"},
{nome:"Matte", preco:8, img:"matte_original.jpeg"},
{nome:"Suco Del Valle",
preco:8,
opcoes:[
{nome:"Pêssego", img:"delvalle_pessego.jpeg"},
{nome:"Manga", img:"delvalle_manga.jpeg"},
{nome:"Maracujá", img:"delvalle_maracuja.jpeg"}
]
},

{nome:"Powerade",
preco:10.5,
opcoes:[
{nome:"Laranja", img:"powerade_laranja.jpeg"},
{nome:"Tangerina", img:"powerade_tangerina.jpeg"},
{nome:"Uva", img:"powerade_uva.jpeg"},
{nome:"Frutas Tropicais", img:"powerade_frutas.jpeg"},
{nome:"Mix de Frutas", img:"powerade_mix.jpeg"}
]
}
],

porcoes: [
{
nome:"Batata Frita 350g",
preco:22,
descricao:"Porção individual crocante"
},
{
nome:"Pão de Alho",
preco:6,
descricao:"Assado na brasa"
},
{
nome:"Aipim 500g",
preco:22,
descricao:"Porção crocante"
},

const professores = [
{
nome: "Caio Froes",
img: "",
habilidades: "Instrutor há +5 anos | Direção defensiva",
aulas: [
{dia:"Segunda", horario:"07:00", vagas:3},
{dia:"Segunda", horario:"08:00", vagas:0},
{dia:"Segunda", horario:"09:00", vagas:2},
{dia:"Segunda", horario:"17:00", vagas:1},
{dia:"Segunda", horario:"18:00", vagas:0},
{dia:"Segunda", horario:"19:00", vagas:0},
{dia:"Terça", horario:"17:00", vagas:0},
{dia:"Terça", horario:"17:00", vagas:0},
{dia:"Terça", horario:"18:00", vagas:1},
{dia:"Terça", horario:"19:00", vagas:0},
{dia:"Quarta", horario:"07:00", vagas:3},
{dia:"Quarta", horario:"08:00", vagas:1},
{dia:"Quarta", horario:"09:00", vagas:2},
{dia:"Quarta", horario:"17:00", vagas:0},
{dia:"Quinta", horario:"17:00", vagas:0},
{dia:"Quinta", horario:"18:00", vagas:1},
{dia:"Sexta", horario:"07:00", vagas:1},
{dia:"Sexta", horario:"08:00", vagas:3},
{dia:"Sexta", horario:"09:00", vagas:0},
{dia:"Sexta", horario:"16:00", vagas:2},
{dia:"Sexta", horario:"17:00", vagas:0},
{dia:"Sexta", horario:"18:00", vagas:0},
]
},
{
nome: "Pedro Lucca",
img: "prof_joao.jpeg",
habilidades: "Especialista iniciantes | Paciência total",
aulas: [
{dia:"Segunda", horario:"15:00", vagas:3},
{dia:"Segunda", horario:"16:00", vagas:2},
{dia:"Segunda", horario:"17:00", vagas:2},
{dia:"Terça", horario:"14:00", vagas:4},
{dia:"Terça", horario:"15:00", vagas:4},
{dia:"Terça", horario:"16:00", vagas:4},
{dia:"Terça", horario:"17:00", vagas:4},
{dia:"Quarta", horario:"15:00", vagas:3},
{dia:"Quarta", horario:"16:00", vagas:2},
{dia:"Quarta", horario:"17:00", vagas:4},
{dia:"Quinta", horario:"15:00", vagas:3},
{dia:"Quinta", horario:"16:00", vagas:3},
{dia:"Quinta", horario:"17:00", vagas:1},
{dia:"Sexta", horario:"14:00", vagas:4},
{dia:"Sexta", horario:"15:00", vagas:4},
{dia:"Sexta", horario:"16:00", vagas:4},
{dia:"Sexta", horario:"17:00", vagas:4},
]
},
{
nome: "Leonardo Briornes",
img:"",
habilidades: "Bom professor",
aulas: [
{dia:"Segunda", horario:"16:00", vagas:3},
{dia:"Quarta", horario:"09:00", vagas:3},
{dia:"Quarta", horario:"10:00", vagas:3},
{dia:"Quarta", horario:"14:00", vagas:1},
{dia:"Quarta", horario:"15:00", vagas:0},
{dia:"Quarta", horario:"17:00", vagas:1},
{dia:"Quarta", horario:"20:00", vagas:1},
{dia:"Quarta", horario:"21:00", vagas:3},
{dia:"Sexta", horario:"09:00", vagas:0},
{dia:"Sexta", horario:"10:00", vagas:0},
{dia:"Sexta", horario:"16:00", vagas:0},
]
},
{
nome: "Luiz Marabezi",
img:"",
habilidades: "Bom professor",
aulas: [
{dia:"Segunda", horario:"19:00", vagas:2},
{dia:"Segunda", horario:"07:00", vagas:2},
{dia:"Terça", horario:"07:00", vagas:0},
{dia:"Terça", horario:"08:00", vagas:2},
{dia:"Terça", horario:"09:00", vagas:4},
{dia:"Terça", horario:"10:00", vagas:4},
{dia:"Quarta", horario:"09:00", vagas:1},
{dia:"Quarta", horario:"11:00", vagas:3},
{dia:"Quinta", horario:"07:00", vagas:0},
{dia:"Quinta", horario:"08:00", vagas:2},
{dia:"Sexta", horario:"09:00", vagas:1},
{dia:"Sexta", horario:"11:00", vagas:3},
{dia:"Sexta", horario:"17:00", vagas:3},
{dia:"Sexta", horario:"20:00", vagas:0},
]
}

// MOSTRAR PRODUTOS
function mostrar(categoria){

document.getElementById("inicio").style.display = "none"

let menu = document.getElementById("menu")
menu.innerHTML = ""

cardapio[categoria].forEach(item => {

menu.innerHTML += `
<div class="card">
<h3>${item.nome}</h3>
${item.img ? `<img src="${item.img}" style="width:100%; border-radius:10px; margin:10px 0;">` : ""}

${item.descricao ? `<p>${item.descricao}</p>` : ""}

<p class="preco">R$ ${item.preco.toFixed(2)}</p>

${item.opcoes 
? `<button onclick="mostrarOpcoes('${categoria}', '${item.nome}')">Escolher</button>`
: `<button onclick="addItem('${item.nome}', ${item.preco})">Adicionar</button>`
}

</div>
`
})
}

function mostrarOpcoes(categoria, nomeProduto){

let produto = cardapio[categoria].find(item => item.nome === nomeProduto)

let menu = document.getElementById("menu")
menu.innerHTML = `
<button onclick="mostrar('${categoria}')">⬅ Voltar</button>
<h2>${produto.nome}</h2>
`

produto.opcoes.forEach(op => {
menu.innerHTML += `
<div class="card">

${op.img ? `<img src="${op.img}" style="width:100%; height:150px; object-fit:cover; border-radius:10px;">` : ""}

<h3>${op.nome}</h3>

<p class="preco">R$ ${produto.preco.toFixed(2)}</p>

<button onclick="addItem('${produto.nome} - ${op.nome}', ${produto.preco})">
Adicionar
</button>

</div>
`
})

}
// ADICIONAR ITEM
function addItem(nome, preco){

let nomeCliente = document.getElementById("nome").value

if(nomeCliente === ""){
alert("Digite seu nome!")
return
}

carrinho.push({nome, preco})
total += preco

renderCarrinho()
}

// RENDERIZAR CARRINHO
function renderCarrinho(){

let carrinhoHTML = ""

carrinho.forEach((item, index) => {
carrinhoHTML += `
<p>
${item.nome} - R$ ${item.preco.toFixed(2)}
<button onclick="removerItem(${index})">❌</button>
</p>
`
})

document.getElementById("carrinho").innerHTML = carrinhoHTML
document.getElementById("total").innerText = total.toFixed(2)

}

// REMOVER ITEM
function removerItem(index){

total -= carrinho[index].preco
carrinho.splice(index, 1)

renderCarrinho()
}

function voltarInicio(){
document.getElementById("menu").innerHTML = ""
document.getElementById("inicio").style.display = "block"
}

function abrirCardapio(){
document.getElementById("inicio").style.display = "none"
document.querySelector(".sidebar").style.display = "block"
}

// ENVIAR PEDIDO
function enviarPedido(){

let nomeCliente = document.getElementById("nome").value

if(nomeCliente === ""){
alert("Digite seu nome!")
return
}

let mensagem = "Pedido Arena%0A%0A"
mensagem += "Cliente: "+nomeCliente+"%0A"
mensagem += "Itens:%0A"

carrinho.forEach(item=>{
mensagem += "- "+item.nome+"%0A"
})

mensagem += "%0ATotal: R$ "+total.toFixed(2)

// SALVAR HISTÓRICO
let historico = JSON.parse(localStorage.getItem("pedidos")) || []

historico.push({
cliente: nomeCliente,
itens: carrinho,
total: total,
data: new Date().toLocaleDateString()
})

localStorage.setItem("pedidos", JSON.stringify(historico))

// LIMPAR CARRINHO
carrinho = []
total = 0
renderCarrinho()

// ENVIAR WHATSAPP
window.open("https://wa.me/5521968892544?text="+mensagem)

}

// HISTÓRICO
function verHistorico(){

document.getElementById("inicio").style.display = "none"

let historico = JSON.parse(localStorage.getItem("pedidos")) || []

let tela = document.getElementById("menu")

tela.innerHTML = `
<div class="historico-container">

<button onclick="voltarInicio()" class="btn-voltar">⬅ Voltar</button>

<h1>📋 Histórico de Pedidos</h1>

<div id="listaHistorico"></div>

</div>
`

let lista = document.getElementById("listaHistorico") 

let agrupado = {}

historico.forEach(pedido => {
if(!agrupado[pedido.data]){
agrupado[pedido.data] = []
}
agrupado[pedido.data].push(pedido)
})

for(let data in agrupado){

lista.innerHTML += `<h2>📅 ${data}</h2>`

agrupado[data].forEach(pedido => {

lista.innerHTML += `
<div class="card">
<h3>${pedido.cliente}</h3>

${pedido.itens.map(item => `<p>- ${item.nome}</p>`).join("")}

<p class="preco">Total: R$ ${pedido.total.toFixed(2)}</p>
</div>
`

})

}

}
function toggleCarrinho(){
let carrinhoBox = document.querySelector(".carrinho")
carrinhoBox.classList.toggle("ativo")
}

function verProfessor(index){

let prof = professores[index]
let menu = document.getElementById("menu")

menu.innerHTML = `
<button onclick="abrirAulas()" class="btn-voltar">⬅ Voltar</button>

<h2>${prof.nome}</h2>
<p>${prof.habilidades}</p>

<div class="aulas-container">
`

prof.aulas.forEach((aula, i) => {

menu.innerHTML += `
<div class="card">

<h3>${aula.dia}</h3>
<p>${aula.horario}</p>

<button 
class="${aula.vagas > 0 ? 'btn-verde' : 'btn-vermelho'}"
onclick="reservarAula(${index}, ${i})"
${aula.vagas === 0 ? "disabled" : ""}>

${aula.vagas > 0 
? `Reservar (${aula.vagas} vagas)`
: "Lotado ❌"}

</button>

</div>
`

})

menu.innerHTML += `</div>`

}

function reservarAula(profIndex, aulaIndex){

let aula = professores[profIndex].aulas[aulaIndex]

if(aula.vagas > 0){
aula.vagas--
alert("Aula reservada com sucesso!")
verProfessor(profIndex)
}else{
alert("Essa aula está lotada!")
}

}
