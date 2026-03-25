let carrinho = [];
let total = 0;

const cardapio = {
    pizzas: [
        { nome: "Mussarela", preco: 18, img: "mussarela.jpg" },
        { nome: "Calabresa", preco: 18, img: "calabresa.jpg" },
        { nome: "Frango c/ Catupiry", preco: 18, img: "frango.jpg" },
        { nome: "Carne Seca", preco: 18, img: "brotinho_de_carne_seca.jpeg" }
    ],
    espetinhos: [{ nome: "Carne", preco: 18 }, { nome: "Frango", preco: 15 }],
    cervejas: [{ nome: "Heineken", preco: 13, img: "heineken.jpeg" }, { nome: "Corona", preco: 13, img: "corona.jpeg" }],
    bebidas: [{ nome: "Coca-Cola", preco: 8.5, img: "coca_cola.jpeg" }],
    porcoes: [{ nome: "Batata Frita", preco: 22 }]
};

const professores = [
    {
        nome: "Caio Froes", img: "caio.jpeg", habilidades: "Instrutor há +5 anos",
        aulas: [
            {dia:"Segunda", horario:"07:00", vagas:3}, {dia:"Segunda", horario:"17:00", vagas:1},
            {dia:"Terça", horario:"18:00", vagas:0}, {dia:"Quarta", horario:"09:00", vagas:2}
        ]
    },
    {
        nome: "Pedro Lucca", img: "pedro.jpeg", habilidades: "Especialista iniciantes",
        aulas: [
            {dia:"Segunda", horario:"15:00", vagas:3}, {dia:"Quarta", horario:"16:00", vagas:2}
        ]
    }
];

function abrirCardapio() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("secao-professores").style.display = "none";
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("menu").style.display = "grid";
    mostrar('pizzas');
}

function voltarInicio() {
    document.getElementById("container-professor").style.display = "none";
    document.getElementById("menu").innerHTML = "";
    document.getElementById("inicio").style.display = "flex";
    document.getElementById("secao-professores").style.display = "flex";
    document.getElementById("sidebar").style.display = "none";
}

function mostrar(cat) {
    let m = document.getElementById("menu");
    m.innerHTML = "";
    cardapio[cat].forEach(item => {
        m.innerHTML += `
        <div class="card">
            <img src="${item.img || ''}">
            <h3>${item.nome}</h3>
            <p>R$ ${item.preco.toFixed(2)}</p>
            <button onclick="addItem('${item.nome}', ${item.preco})">Adicionar</button>
        </div>`;
    });
}

function addItem(n, p) {
    let nomeC = document.getElementById("nome").value;
    if(!nomeC) return alert("Digite seu nome!");
    carrinho.push({nome: n, preco: p}); total += p; renderCarrinho();
}

function renderCarrinho() {
    let h = "";
    carrinho.forEach((item, i) => h += `<p>${item.nome} <button onclick="remover(${i})">❌</button></p>`);
    document.getElementById("carrinho").innerHTML = h;
    document.getElementById("total").innerText = total.toFixed(2);
}

function remover(i) { total -= carrinho[i].preco; carrinho.splice(i, 1); renderCarrinho(); }

function carregarProfessoresHome() {
    let c = document.getElementById("lista-professores-home");
    professores.forEach((p, i) => {
        c.innerHTML += `<div class="card"><img src="${p.img}"><h3>${p.nome}</h3><button onclick="verProfessor(${i})">Ver Horários</button></div>`;
    });
}

function verProfessor(index) {
    let p = professores[index];
    document.getElementById("inicio").style.display = "none";
    document.getElementById("secao-professores").style.display = "none";
    document.getElementById("container-professor").style.display = "block";
    document.getElementById("nome-prof-titulo").innerText = p.nome;
    document.getElementById("video-prof").src = p.nome.split(' ')[0].toLowerCase() + ".mp4";

    let agenda = document.getElementById("agenda-semanal");
    agenda.innerHTML = "";
    ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"].forEach(dia => {
        let aulas = p.aulas.filter(a => a.dia === dia);
        if(aulas.length > 0) {
            let html = `<div class="bloco-dia"><h3>${dia}</h3>`;
            aulas.forEach(a => {
                html += `<p>${a.horario} <button class="${a.vagas > 0 ? 'btn-verde' : 'btn-vermelho'}" onclick="reservar(${index})">${a.vagas > 0 ? 'Reservar' : 'Lotado'}</button></p>`;
            });
            agenda.innerHTML += html + "</div>";
        }
    });
}

function reservar(p) { alert("Reserva solicitada para " + professores[p].nome); }
function toggleCarrinho() { document.querySelector(".carrinho").classList.toggle("ativo"); }
function enviarPedido() { alert("Pedido enviado!"); }

carregarProfessoresHome();
