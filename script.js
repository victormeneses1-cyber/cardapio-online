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
descricao:"Molho, mussarela, carne seca, cebola e orégano"
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
{nome:"Corona", preco:13},
{nome:"Heineken", preco:13},
{nome:"Stella Pure Gold", preco:13},
{nome:"Therezópolis", preco:13},
{nome:"Michelob", preco:13}
],

bebidas: [
{nome:"Coca-Cola", preco:8.5},
{nome:"Sprite", preco:8.5},
{nome:"Água com gás", preco:6.5},
{nome:"Água sem gás", preco:6},
{nome:"Ice Tea", preco:8},
{nome:"Matte", preco:8},
{nome:"Suco Del Valle", preco:8},
{nome:"Powerade", preco:10.5}
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
descricao:"Porçao crocante"
}
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

<p class="preco">R$ ${item.preco.toFixed(2)}</p>

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

carrinho.push({nome, preco})
total += preco

renderCarrinho()
}

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

window.open("https://wa.me/5521968892544?text="+mensagem)


}
function removerItem(index){

total -= carrinho[index].preco

carrinho.splice(index, 1)

renderCarrinho()

}

