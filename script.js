let carrinho = [];
let total = 0;

const cardapio = {
    pizzas: [
        { nome: "Mussarela", preco: 18, descricao: "Molho, mussarela, tomate cereja e orégano" },
        { nome: "Frango com Catupiry", preco: 18, descricao: "Molho, mussarela, frango, catupiry e orégano" },
        { nome: "Calabresa", preco: 18, descricao: "Molho, mussarela, calabresa e orégano" },
        { nome: "Carne Seca", preco: 18, descricao: "Molho, mussarela, carne seca, cebola e orégano", img: "brotinho_de_carne_seca.jpeg" }
    ],
    espetinhos: [
        { nome: "Espetinho de Carne", preco: 18, descricao: "Acompanha farofa e molho" },
        { nome: "Espetinho de Kafta", preco: 18, descricao: "Acompanha farofa e molho" },
        { nome: "Espetinho de Coração", preco: 18, descricao: "Acompanha farofa e molho" },
        { nome: "Espetinho de Lombo", preco: 18, descricao: "Acompanha farofa e molho" },
        { nome: "Espetinho de Queijo Coalho", preco: 18, descricao: "Acompanha farofa e molho" },
        { nome: "Espetinho de Frango", preco: 15, descricao: "Acompanha farofa e molho" },
        { nome: "Espetinho de Linguiça", preco: 17, descricao: "Acompanha farofa e molho" }
    ],
    cervejas: [
        { nome: "Corona", preco: 13, img: "corona.jpeg" },
        { nome: "Heineken", preco: 13, img: "heineken.jpeg" },
        { nome: "Stella Pure Gold", preco: 13, img: "Stella.jpeg" },
        { nome: "Therezópolis", preco: 13, img: "therezopolis.jpeg" },
        { nome: "Michelob", preco: 13, img: "michelob.jpeg" }
    ],
    bebidas: [
        { nome: "Coca-Cola", preco: 8.5, img: "coca_cola.jpeg" },
        { nome: "Sprite", preco: 8.5, img: "sprite.jpeg" },
        { nome: "Água com gás", preco: 6.5, img: "agua_com_gas.jpeg" },
        { nome: "Água sem gás", preco: 6, img: "agua_sem_gas.jpeg" },
        { nome: "Ice Tea", preco: 8, img: "ice_tea.jpeg" },
        { nome: "Matte", preco: 8, img: "matte_original.jpeg" },
        {
            nome: "Suco Del Valle", preco: 8, opcoes: [
                { nome: "Pêssego", img: "delvalle_pessego.jpeg" },
                { nome: "Manga", img: "delvalle_manga.jpeg" },
                { nome: "Maracujá", img: "delvalle_maracuja.jpeg" }
            ]
        },
        {
            nome: "Powerade", preco: 10.5, opcoes: [
                { nome: "Laranja", img: "powerade_laranja.jpeg" },
                { nome: "Tangerina", img: "powerade_tangerina.jpeg" },
                { nome: "Uva", img: "powerade_uva.jpeg" },
                { nome: "Frutas Tropicais", img: "powerade_frutas.jpeg" },
                { nome: "Mix de Frutas", img: "powerade_mix.jpeg" }
            ]
        }
    ],
    porcoes: [
        { nome: "Batata Frita 350g", preco: 22, descricao: "Porção individual crocante" },
        { nome: "Pão de Alho", preco: 6, descricao: "Assado na brasa" },
        { nome: "Aipim 500g", preco: 22, descricao: "Porção crocante" }
    ]
};

const professores = [
    {
        nome: "Caio Froes", img: "caio.jpeg", habilidades: "Instrutor há +5 anos",
        video: "1jWEIN_ubYs",
        aulas: [
            {dia:"Segunda", horario:"07:00 as 08:00", vagas:3}, {dia:"Segunda", horario:"08:00 as 09:00", vagas:0},
            {dia:"Segunda", horario:"09:00 as 10:00", vagas:2}, {dia:"Segunda", horario:"17:00 as 18:00", vagas:1},
            {dia:"Segunda", horario:"18:00 as 19:00", vagas:0}, {dia:"Segunda", horario:"19:00 as 20:00", vagas:0},
            {dia:"Terça", horario:"17:00 as 18:00", vagas:0}, {dia:"Terça", horario:"18:00 as 19:00", vagas:1},
            {dia:"Terça", horario:"19:00 as 20:00", vagas:0}, {dia:"Quarta", horario:"07:00 as 08:00", vagas:3},
            {dia:"Quarta", horario:"08:00 as 09:00", vagas:1}, {dia:"Quarta", horario:"09:00 as 10:00", vagas:2},
            {dia:"Quarta", horario:"17:00 as 18:00", vagas:0}, {dia:"Quinta", horario:"17:00 as 18:00", vagas:0},
            {dia:"Quinta", horario:"18:00 as 19:00", vagas:1}, {dia:"Sexta", horario:"07:00 as 08:00", vagas:1},
            {dia:"Sexta", horario:"08:00 as 09:00", vagas:3}, {dia:"Sexta", horario:"09:00 as 10:00", vagas:0},
            {dia:"Sexta", horario:"16:00 as 17:00", vagas:2}, {dia:"Sexta", horario:"17:00 as 18:00", vagas:0},
            {dia:"Sexta", horario:"18:00 as 19:00", vagas:0}
        ]
    },
    {
        nome: "Pedro Lucca", img: "pedro.jpeg", habilidades: "Especialista iniciantes",
        aulas: [
            {dia:"Segunda", horario:"15:00 as 16:00", vagas:3}, {dia:"Segunda", horario:"16:00 as 17:00", vagas:2},
            {dia:"Segunda", horario:"17:00 as 18:00", vagas:2}, {dia:"Terça", horario:"14:00 as 15:00", vagas:4},
            {dia:"Terça", horario:"15:00 as 16:00", vagas:4}, {dia:"Terça", horario:"16:00 as 17:00", vagas:4},
            {dia:"Terça", horario:"17:00 as 18:00", vagas:4}, {dia:"Quarta", horario:"15:00 as 16:00", vagas:3},
            {dia:"Quarta", horario:"16:00 as 17:00", vagas:2}, {dia:"Quarta", horario:"17:00 as 18:00", vagas:4},
            {dia:"Quinta", horario:"15:00 as 16:00", vagas:3}, {dia:"Quinta", horario:"16:00 as 17:00", vagas:3},
            {dia:"Quinta", horario:"17:00 as 18:00", vagas:1}, {dia:"Sexta", horario:"14:00 as 15:00", vagas:4},
            {dia:"Sexta", horario:"15:00 as 16:00", vagas:4}, {dia:"Sexta", horario:"16:00 as 17:00", vagas:4},
            {dia:"Sexta", horario:"17:00 as 18:00", vagas:4}
        ]
    },
    {
        nome: "Leonardo Briornes", img: "Leonardo.jpeg", habilidades: "Bom professor",
        aulas: [
            {dia:"Segunda", horario:"16:00 as 17:00", vagas:3}, {dia:"Quarta", horario:"09:00 as 10:00", vagas:3},
            {dia:"Quarta", horario:"10:00 as 11:00", vagas:3}, {dia:"Quarta", horario:"14:00 as 15:00", vagas:1},
            {dia:"Quarta", horario:"15:00 as 16:00", vagas:0}, {dia:"Quarta", horario:"17:00 as 18:00", vagas:1},
            {dia:"Quarta", horario:"20:00 as 21:00", vagas:1}, {dia:"Quarta", horario:"21:00 as 22:00", vagas:3},
            {dia:"Sexta", horario:"09:00 as 10:00", vagas:0}, {dia:"Sexta", horario:"10:00 as 11:00", vagas:0},
            {dia:"Sexta", horario:"16:00 as 17:00", vagas:0}
        ]
    },
    {
        nome: "Luiz Marabezi", img: "marabezi.jpeg", habilidades: "Bom professor",
        aulas: [
            {dia:"Segunda", horario:"19:00 as 20:00", vagas:2}, {dia:"Segunda", horario:"20:00 as 21:00", vagas:2},
            {dia:"Terça", horario:"07:00 as 08:00", vagas:0}, {dia:"Terça", horario:"08:00 as 09:00", vagas:2},
            {dia:"Terça", horario:"09:00 as 10:00", vagas:4}, {dia:"Terça", horario:"10:00 as 11:00", vagas:4},
            {dia:"Quarta", horario:"09:00 as 10:00", vagas:1}, {dia:"Quarta", horario:"11:00 as 12:00", vagas:3},
            {dia:"Quinta", horario:"07:00 as 08:00", vagas:0}, {dia:"Quinta", horario:"08:00 as 09:00", vagas:2},
            {dia:"Sexta", horario:"09:00 as 10:00", vagas:1}, {dia:"Sexta", horario:"11:00 as 12:00", vagas:3},
            {dia:"Sexta", horario:"17:00 as 18:00", vagas:3}, {dia:"Sexta", horario:"20:00 as 21:00", vagas:0}
        ]
    }
];

// NAVEGAÇÃO
function abrirCardapio() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("secao-professores").style.display = "none";
    document.getElementById("container-professor").style.display = "none";
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("menu").style.display = "grid";
    mostrar('pizzas');
}

function voltarInicio() {
    document.getElementById("menu").innerHTML = "";
    document.getElementById("inicio").style.display = "flex";
    document.getElementById("secao-professores").style.display = "flex";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("container-professor").style.display = "none";
}

// CARDÁPIO
function mostrar(categoria) {
  let menu = document.getElementById("menu");

  /* 1. Fade out rápido antes de trocar */
  menu.style.opacity = "0";

  setTimeout(() => {
    menu.innerHTML = "";
    menu.style.opacity = "1";

    cardapio[categoria].forEach((item, index) => {
      menu.innerHTML += `
      <div class="card">
        <h3>${item.nome}</h3>
        ${item.img
          ? `<img src="${item.img}"
               style="width:100%; border-radius:10px; margin:10px 0;">`
          : ""
        }
        <p class="preco">R$ ${item.preco.toFixed(2)}</p>
        ${item.opcoes
          ? `<button onclick="mostrarOpcoes('${categoria}','${item.nome}')">
               Escolher
             </button>`
          : `<button onclick="addItem('${item.nome}',${item.preco})">
               Adicionar
             </button>`
        }
      </div>`;
    });

    /* 2. Dispara animação em cascata em cada card */
    document.querySelectorAll(".card").forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("animado");
      }, i * 100); /* 100ms de delay entre cada card */
    });

  }, 200); /* aguarda o fade out terminar */
}

function mostrarOpcoes(categoria, nomeProduto) {
    let produto = cardapio[categoria].find(item => item.nome === nomeProduto);
    let menu = document.getElementById("menu");
    menu.innerHTML = `<button onclick="mostrar('${categoria}')">⬅ Voltar</button><h2>${produto.nome}</h2>`;
    produto.opcoes.forEach(op => {
        menu.innerHTML += `
        <div class="card">
            <img src="${op.img}" style="width:100%; height:150px; object-fit:cover; border-radius:10px;">
            <h3>${op.nome}</h3>
            <button onclick="addItem('${produto.nome} - ${op.nome}', ${produto.preco})">Adicionar</button>
        </div>`;
    });
}

function addItem(nome, preco) {
  let nomeCliente = document.getElementById("nome").value.trim();
  if (nomeCliente === "") {
    abrirModalNome(nome, preco);
    return;
  }
  carrinho.push({ nome, preco });
  total += preco;
  renderCarrinho();
}

function abrirModalNome(nome, preco) {
  const modal = document.getElementById("modal-nome");
  modal.style.display = "flex";
  modal.dataset.nome = nome;
  modal.dataset.preco = preco;
  document.getElementById("modal-nome-input").focus();
}

function confirmarNome() {
  const input = document.getElementById("modal-nome-input");
  const erro = document.getElementById("modal-erro");
  const v = input.value.trim();

  if (!v) {
    erro.style.opacity = "1";
    input.style.borderColor = "#e74c3c";
    setTimeout(() => input.style.borderColor = "", 1500);
    return;
  }

  /* Preenche o campo nome do carrinho automaticamente */
  document.getElementById("nome").value = v;

  /* Fecha o modal */
  const modal = document.getElementById("modal-nome");
  modal.style.display = "none";

  /* Adiciona o item que estava tentando adicionar */
  const nomeProduto = modal.dataset.nome;
  const precoProduto = parseFloat(modal.dataset.preco);
  carrinho.push({ nome: nomeProduto, preco: precoProduto });
  total += precoProduto;
  renderCarrinho();

  /* Abre o carrinho automaticamente */
  document.querySelector(".carrinho").classList.add("ativo");
}

function renderCarrinho() {
    let html = "";
    carrinho.forEach((item, index) => {
        html += `<p>${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerItem(${index})">❌</button></p>`;
    });
    document.getElementById("carrinho").innerHTML = html;
    document.getElementById("total").innerText = total.toFixed(2);
}

function removerItem(index) {
    total -= carrinho[index].preco; carrinho.splice(index, 1); renderCarrinho();
}

function toggleCarrinho() { document.querySelector(".carrinho").classList.toggle("ativo"); }

// PROFESSORES
function carregarProfessoresHome() {
    let container = document.getElementById("lista-professores-home");
    if(!container) return;
    container.innerHTML = "";
    professores.forEach((prof, index) => {
        container.innerHTML += `
        <div class="card">
            <img src="${prof.img}" style="width:100%; height:160px; object-fit:cover; border-radius:10px;">
            <h3>${prof.nome}</h3>
            <button onclick="verProfessor(${index})">Ver Horários</button>
        </div>`;
    });
}

function verProfessor(index) {
    let prof = professores[index];
    document.getElementById("inicio").style.display = "none";
    document.getElementById("secao-professores").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("container-professor").style.display = "block";

    document.getElementById("nome-prof-titulo").innerText = "Aulas de " + prof.nome;
   let videoContainer = document.getElementById("video-prof");
videoContainer.innerHTML = `
    <iframe
        width="100%"
        height="280"
       src="https://www.youtube.com/embed/${prof.video}?autoplay=1&modestbranding=1&rel=0"
        frameborder="0"
        allowfullscreen
        style="border-radius:15px;">
    </iframe>`; 

    let agenda = document.getElementById("agenda-semanal");
    agenda.innerHTML = "";
    const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    diasSemana.forEach(dia => {
        let aulasDoDia = prof.aulas.filter(a => a.dia === dia);
        if (aulasDoDia.length > 0) {
            let htmlDia = `<div class="bloco-dia"><h3>📅 ${dia}</h3><div class="lista-horarios">`;
            aulasDoDia.forEach(aula => {
                htmlDia += `
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">
                        <span>${aula.horario}</span>
                        <button class="${aula.vagas > 0 ? 'btn-verde' : 'btn-vermelho'}" 
                                style="padding: 5px 10px; font-size: 11px;"
                                ${aula.vagas === 0 ? "disabled" : ""} 
                                onclick="reservarAula(${index})">
                            ${aula.vagas > 0 ? 'Agendar' : 'Lotado'}
                        </button>
                    </div>`;
            });
            htmlDia += `</div></div>`;
            agenda.innerHTML += htmlDia;
        }
    });
}

function reservarAula(p) { alert("Reserva solicitada para " + professores[p].nome); }
function enviarPedido() { alert("Pedido enviado!"); }
function verHistorico() { alert("Em breve!"); }

carregarProfessoresHome();
