let carrinho = []
let total = 0

const cardapio = {

pizzas: [
{nome:"Mussarela", preco:18, descricao:"Molho, queijo e orégano"},
{nome:"Frango", preco:18, descricao:"Frango e catupiry"},
{nome:"Calabresa", preco:18, descricao:"Calabresa e orégano"}
],

espetinhos: [
{nome:"Carne", preco:18, descricao:"Acompanha farofa e molho"},
{nome:"Frango", preco:15, descricao:"Acompanha farofa e molho"},
{nome:"Linguiça", preco:17, descricao:"Acompanha farofa e molho"}
],

cervejas: [
{nome:"Corona", preco:13},
{nome:"Heineken", preco:13}
],

bebidas: [
{nome:"Coca-Cola", preco:8.5},
{nome:"Água", preco:6}
],

porcoes: [
{nome:"Batata Frita", preco:22}
]

}

function mostrar(categoria){

document.getElementById("inicio").style.display = "none"

let menu = document.getElementById("menu")
menu.innerHTML = ""

cardapio[categoria].forEach(item => {

menu.innerHTML += `
<div class="card">
<h3>${item.nome}</h3>

${item.descricao ? `<p>${item.descricao}</p>` : ""}

<p class="preco">R$ ${item.preco}</p>

<button onclick="addItem('${item.nome}', ${item.preco})">
Adicionar
</button>

</div>
`
})
}

function addItem(nome, preco){

let nomeCliente = document.getElementById("nome").value

if(nomeCliente === ""){
alert("Digite seu nome!")
return
}

carrinho.push(nome)
total += preco

document.getElementById("carrinho").innerHTML += "<p>"+nome+"</p>"
document.getElementById("total").innerText = total.toFixed(2)
}

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
mensagem += "- "+item+"%0A"
})

mensagem += "%0ATotal: R$ "+total.toFixed(2)

window.open("https://wa.me/5521968892544?text="+mensagem)
}
