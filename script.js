let carrinho = [];
let total = 0;
let categoriaAtual = 'pizzas';
let profAtual = 0;
let diaAtual = '';

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
        nome: "Caio Froes", img: "caio.jpeg", habilidades: "Instrutor +5 anos",
        video: "caio.video.mp4",
        aulas: [
            {dia:"Segunda", horario:"07:00 - 08:00", vagas:3}, {dia:"Segunda", horario:"08:00 - 09:00", vagas:0},
            {dia:"Segunda", horario:"09:00 - 10:00", vagas:2}, {dia:"Segunda", horario:"17:00 - 18:00", vagas:1},
            {dia:"Segunda", horario:"18:00 - 19:00", vagas:0}, {dia:"Segunda", horario:"19:00 - 20:00", vagas:0},
            {dia:"Terça", horario:"17:00 - 18:00", vagas:0}, {dia:"Terça", horario:"18:00 - 19:00", vagas:1},
            {dia:"Terça", horario:"19:00 - 20:00", vagas:0}, {dia:"Quarta", horario:"07:00 - 08:00", vagas:3},
            {dia:"Quarta", horario:"08:00 - 09:00", vagas:1}, {dia:"Quarta", horario:"09:00 - 10:00", vagas:2},
            {dia:"Quarta", horario:"17:00 - 18:00", vagas:0}, {dia:"Quinta", horario:"17:00 - 18:00", vagas:0},
            {dia:"Quinta", horario:"18:00 - 19:00", vagas:1}, {dia:"Sexta", horario:"07:00 - 08:00", vagas:1},
            {dia:"Sexta", horario:"08:00 - 09:00", vagas:3}, {dia:"Sexta", horario:"09:00 - 10:00", vagas:0},
            {dia:"Sexta", horario:"16:00 - 17:00", vagas:2}, {dia:"Sexta", horario:"17:00 - 18:00", vagas:0},
            {dia:"Sexta", horario:"18:00 - 19:00", vagas:0}
        ]
    },
    {
        nome: "Pedro Lucca", img: "pedro.jpeg", habilidades: "Especialista iniciantes",
        video: "pedro.video.mp4",
        aulas: [
            {dia:"Segunda", horario:"15:00 - 16:00", vagas:3}, {dia:"Segunda", horario:"16:00 - 17:00", vagas:2},
            {dia:"Segunda", horario:"17:00 - 18:00", vagas:2}, {dia:"Terça", horario:"14:00 - 15:00", vagas:4},
            {dia:"Terça", horario:"15:00 - 16:00", vagas:4}, {dia:"Terça", horario:"16:00 - 17:00", vagas:4},
            {dia:"Terça", horario:"17:00 - 18:00", vagas:4}, {dia:"Quarta", horario:"15:00 - 16:00", vagas:3},
            {dia:"Quarta", horario:"16:00 - 17:00", vagas:2}, {dia:"Quarta", horario:"17:00 - 18:00", vagas:4},
            {dia:"Quinta", horario:"15:00 - 16:00", vagas:3}, {dia:"Quinta", horario:"16:00 - 17:00", vagas:3},
            {dia:"Quinta", horario:"17:00 - 18:00", vagas:1}, {dia:"Sexta", horario:"14:00 - 15:00", vagas:4},
            {dia:"Sexta", horario:"15:00 - 16:00", vagas:4}, {dia:"Sexta", horario:"16:00 - 17:00", vagas:4},
            {dia:"Sexta", horario:"17:00 - 18:00", vagas:4}
        ]
    },
    {
        nome: "Leonardo Briornes", img: "Leonardo.jpeg", habilidades: "Professor experiente",
        video: "leonardo.video.mp4",
        aulas: [
            {dia:"Segunda", horario:"16:00 - 17:00", vagas:3}, {dia:"Quarta", horario:"09:00 - 10:00", vagas:3},
            {dia:"Quarta", horario:"10:00 - 11:00", vagas:3}, {dia:"Quarta", horario:"14:00 - 15:00", vagas:1},
            {dia:"Quarta", horario:"15:00 - 16:00", vagas:0}, {dia:"Quarta", horario:"17:00 - 18:00", vagas:1},
            {dia:"Quarta", horario:"20:00 - 21:00", vagas:1}, {dia:"Quarta", horario:"21:00 - 22:00", vagas:3},
            {dia:"Sexta", horario:"09:00 - 10:00", vagas:0}, {dia:"Sexta", horario:"10:00 - 11:00", vagas:0},
            {dia:"Sexta", horario:"16:00 - 17:00", vagas:0}
        ]
    },
    {
        nome: "Luiz Marabezi", img: "marabezi.jpeg", habilidades: "Professor experiente",
        video: "luiz.video.mp4",
        aulas: [
            {dia:"Segunda", horario:"19:00 - 20:00", vagas:2}, {dia:"Segunda", horario:"20:00 - 21:00", vagas:2},
            {dia:"Terça", horario:"07:00 - 08:00", vagas:0}, {dia:"Terça", horario:"08:00 - 09:00", vagas:2},
            {dia:"Terça", horario:"09:00 - 10:00", vagas:4}, {dia:"Terça", horario:"10:00 - 11:00", vagas:4},
            {dia:"Quarta", horario:"09:00 - 10:00", vagas:1}, {dia:"Quarta", horario:"11:00 - 12:00", vagas:3},
            {dia:"Quinta", horario:"07:00 - 08:00", vagas:0}, {dia:"Quinta", horario:"08:00 - 09:00", vagas:2},
            {dia:"Sexta", horario:"09:00 - 10:00", vagas:1}, {dia:"Sexta", horario:"11:00 - 12:00", vagas:3},
            {dia:"Sexta", horario:"17:00 - 18:00", vagas:3}, {dia:"Sexta", horario:"20:00 - 21:00", vagas:0}
        ]
    }
];

// NAVEGAÇÃO
function irTela(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const mapa = { 's-home': 'nav-home', 's-cardapio': 'nav-cardapio', 's-prof': 'nav-aulas' };
    if (mapa[id]) document.getElementById(mapa[id]).classList.add('active');
    window.scrollTo(0, 0);
}

function irHome() {
    pararVideo();
    irTela('s-home');
}

function irCardapio() {
    irTela('s-cardapio');
    renderCategoria('pizzas');
}

function voltarCardapio() {
    irTela('s-cardapio');
}

// CARDÁPIO
const categorias = [
    { key: 'pizzas', label: '🍕 Pizzas' },
    { key: 'espetinhos', label: '🍢 Espetinhos' },
    { key: 'cervejas', label: '🍺 Cervejas' },
    { key: 'bebidas', label: '🥤 Bebidas' },
    { key: 'porcoes', label: '🍟 Porções' }
];

function renderCatScroll() {
    const scroll = document.getElementById('cat-scroll');
    scroll.innerHTML = '';
    categorias.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-pill' + (cat.key === categoriaAtual ? ' active' : '');
        btn.textContent = cat.label;
        btn.onclick = () => renderCategoria(cat.key);
        scroll.appendChild(btn);
    });
}

function renderCategoria(cat) {
    categoriaAtual = cat;
    renderCatScroll();
    const list = document.getElementById('items-list');
    list.innerHTML = '';
    cardapio[cat].forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'item-card';
        div.style.animationDelay = (i * 60) + 'ms';
        const imgHtml = item.img
            ? `<img src="${item.img}" class="item-img" style="object-fit:cover;">`
            : `<div class="item-img">${catEmoji(cat)}</div>`;
        const btnHtml = item.opcoes
            ? `<button class="add-btn" onclick="abrirOpcoes('${cat}','${item.nome}')" style="font-size:14px;">→</button>`
            : `<button class="add-btn" onclick="addItem('${item.nome}',${item.preco})">+</button>`;
        div.innerHTML = `
            ${imgHtml}
            <div class="item-info">
                <h3>${item.nome}</h3>
                <p>${item.descricao || ''}</p>
            </div>
            <div class="item-right">
                <span class="item-price">R$${item.preco.toFixed(2).replace('.', ',')}</span>
                ${btnHtml}
            </div>`;
        list.appendChild(div);
    });
}

function catEmoji(cat) {
    const e = { pizzas:'🍕', espetinhos:'🍢', cervejas:'🍺', bebidas:'🥤', porcoes:'🍟' };
    return e[cat] || '🍽';
}

function abrirOpcoes(cat, nomeProduto) {
    const produto = cardapio[cat].find(i => i.nome === nomeProduto);
    document.getElementById('opcoes-title').textContent = produto.nome;
    const list = document.getElementById('opcoes-list');
    list.innerHTML = '';
    produto.opcoes.forEach((op, i) => {
        const div = document.createElement('div');
        div.className = 'item-card';
        div.style.animationDelay = (i * 60) + 'ms';
        div.innerHTML = `
            <img src="${op.img}" class="item-img" style="object-fit:cover;">
            <div class="item-info"><h3>${op.nome}</h3></div>
            <div class="item-right">
                <span class="item-price">R$${produto.preco.toFixed(2).replace('.', ',')}</span>
                <button class="add-btn" onclick="addItem('${produto.nome} - ${op.nome}',${produto.preco})">+</button>
            </div>`;
        list.appendChild(div);
    });
    irTela('s-opcoes');
}

// CARRINHO
function addItem(nome, preco) {
    const nomeCliente = document.getElementById("nome").value.trim();
    if (!nomeCliente) { abrirModal(nome, preco); return; }
    carrinho.push({ nome, preco });
    total = carrinho.reduce((a, i) => a + i.preco, 0);
    atualizarBadge();
    mostrarToast(nome + ' adicionado!');
}

function atualizarBadge() {
    const badge = document.getElementById('cart-badge');
    if (carrinho.length > 0) {
        badge.style.display = 'flex';
        badge.textContent = carrinho.length;
    } else {
        badge.style.display = 'none';
    }
}

function abrirCarrinho() {
    renderCarrinho();
    document.getElementById('carrinho-panel').classList.add('show');
    document.getElementById('carrinho-overlay').classList.add('show');
    document.getElementById('nav-pedido').classList.add('active');
}

function fecharCarrinho() {
    document.getElementById('carrinho-panel').classList.remove('show');
    document.getElementById('carrinho-overlay').classList.remove('show');
    document.getElementById('nav-pedido').classList.remove('active');
}

function renderCarrinho() {
    const container = document.getElementById('carrinho-items');
    if (carrinho.length === 0) {
        container.innerHTML = '<p style="color:rgba(255,255,255,.3);font-size:13px;text-align:center;padding:20px 0;">Carrinho vazio</p>';
    } else {
        container.innerHTML = '';
        carrinho.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'carrinho-item';
            div.innerHTML = `
                <span class="carrinho-item-nome">${item.nome}</span>
                <span class="carrinho-item-preco">R$${item.preco.toFixed(2).replace('.', ',')}</span>
                <button class="carrinho-item-del" onclick="removerItem(${index})">✕</button>`;
            container.appendChild(div);
        });
    }
    document.getElementById('total-value').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
}

function removerItem(index) {
    carrinho.splice(index, 1);
    total = carrinho.reduce((a, i) => a + i.preco, 0);
    atualizarBadge();
    renderCarrinho();
}

function enviarPedido() {
    const nome = document.getElementById("nome").value.trim();
    if (!nome) { alert("Digite seu nome!"); return; }
    if (carrinho.length === 0) { alert("Carrinho vazio!"); return; }
    alert("Pedido enviado! Obrigado, " + nome + "!");
    carrinho = [];
    total = 0;
    atualizarBadge();
    fecharCarrinho();
    renderCarrinho();
}

// MODAL NOME
function abrirModal(nome, preco) {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('show');
    overlay.dataset.nome = nome;
    overlay.dataset.preco = preco;
    setTimeout(() => document.getElementById('modal-nome-input').focus(), 300);
}

function confirmarNome() {
    const input = document.getElementById('modal-nome-input');
    const erro = document.getElementById('modal-erro');
    const v = input.value.trim();
    if (!v) { erro.classList.add('show'); input.style.borderColor = '#e74c3c'; return; }
    document.getElementById('nome').value = v;
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('show');
    const nome = overlay.dataset.nome;
    const preco = parseFloat(overlay.dataset.preco);
    carrinho.push({ nome, preco });
    total = carrinho.reduce((a, i) => a + i.preco, 0);
    atualizarBadge();
    mostrarToast(nome + ' adicionado!');
    abrirCarrinho();
}

// TOAST
function mostrarToast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'toast';
        t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#238636;color:#fff;padding:10px 20px;border-radius:20px;font-family:Poppins,sans-serif;font-size:13px;font-weight:700;z-index:500;opacity:0;transition:opacity .3s;white-space:nowrap;';
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.style.opacity = '0', 2000);
}

// PROFESSORES
function carregarProfessoresHome() {
    const container = document.getElementById('lista-professores-home');
    if (!container) return;
    container.innerHTML = '';
    professores.forEach((prof, index) => {
        const div = document.createElement('div');
        div.className = 'prof-card';
        div.innerHTML = `
            <img src="${prof.img}" alt="${prof.nome}">
            <div class="prof-card-body">
                <h3>${prof.nome}</h3>
                <button onclick="verProfessor(${index})">Ver Horários</button>
            </div>`;
        container.appendChild(div);
    });
}

function verProfessor(index) {
    profAtual = index;
    const prof = professores[index];
    document.getElementById('prof-topbar-title').textContent = prof.nome;
    document.getElementById('nome-prof-titulo').textContent = prof.nome;
    document.getElementById('prof-badge').textContent = prof.habilidades;
    const video = document.getElementById('video-prof');
    video.src = prof.video;
    video.load();
    video.play().catch(() => {});
    const diasUnicos = [...new Set(prof.aulas.map(a => a.dia))];
    diaAtual = diasUnicos[0];
    renderAgendaTabs(prof, diasUnicos);
    renderHorarios(prof, diaAtual);
    irTela('s-prof');
}

function renderAgendaTabs(prof, dias) {
    const tabs = document.getElementById('agenda-tabs');
    tabs.innerHTML = '';
    dias.forEach(dia => {
        const btn = document.createElement('button');
        btn.className = 'dia-tab' + (dia === diaAtual ? ' active' : '');
        btn.textContent = dia;
        btn.onclick = () => {
            diaAtual = dia;
            document.querySelectorAll('.dia-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            renderHorarios(prof, dia);
        };
        tabs.appendChild(btn);
    });
}

function renderHorarios(prof, dia) {
    const list = document.getElementById('horarios-list');
    list.innerHTML = '';
    const aulas = prof.aulas.filter(a => a.dia === dia);
    aulas.forEach((aula, i) => {
        const div = document.createElement('div');
        div.className = 'horario-row';
        div.style.animationDelay = (i * 50) + 'ms';
        const vagasTexto = aula.vagas === 0 ? 'Sem vagas' : aula.vagas + (aula.vagas === 1 ? ' vaga' : ' vagas');
        const btn = aula.vagas > 0
            ? `<button class="btn-agendar" onclick="reservarAula(${profAtual})">Agendar</button>`
            : `<button class="btn-lotado" disabled>Lotado</button>`;
        div.innerHTML = `
            <div>
                <div class="horario-time">${aula.horario}</div>
                <div class="horario-vagas">${vagasTexto}</div>
            </div>
            ${btn}`;
        list.appendChild(div);
    });
}

function pararVideo() {
    const video = document.getElementById('video-prof');
    video.pause();
    video.src = '';
}
// ═══════════════════════════════════════════════
//  PRODUTOS - ARENA SÃO FRANCISCO
// ═══════════════════════════════════════════════

const VIDEO_RAQUETE  = 'raquete.video.mp4';
const VIDEO_BOLA     = 'bolinha.video.mp4';
const VIDEO_GRIP_ACT = 'grip.video.mp4';
const VIDEO_GRIP     = 'grip.video.mp4';

function irProdutos() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('s-produtos').classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('nav-produtos').classList.add('active');
    renderProdutosTabs();
}

function renderProdutosTabs() {
    const container = document.getElementById('produtos-container');
    container.innerHTML = `
    <div class="prod-tabs">
        <button class="prod-tab ativo" onclick="showProdTab('raquete', this)">🏓 Raquete</button>
        <button class="prod-tab" onclick="showProdTab('bola', this)">🎾 Bolas</button>
        <button class="prod-tab" onclick="showProdTab('grip', this)">✊ Grip</button>
    </div>
    <div id="prod-content"></div>
    `;
    showProdTab('raquete', document.querySelector('.prod-tab.ativo'));
}

function showProdTab(tab, btn) {
    document.querySelectorAll('.prod-tab').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    const content = document.getElementById('prod-content');
    content.innerHTML = '';

    if (tab === 'raquete') renderRaquete(content);
    else if (tab === 'bola') renderBola(content);
    else if (tab === 'grip') renderGrip(content);
}

// ── RAQUETE ──────────────────────────────────────
function renderRaquete(el) {
    el.innerHTML = `
    <div class="raquete-scene" id="raquete-scene">
        <div class="raquete-bg-glow"></div>
       <video src="${VIDEO_RAQUETE}" class="raquete-img" id="raquete-img"
  autoplay muted loop playsinline></video>
        <div class="raquete-info-box" id="raquete-info-box">
            <div class="raquete-nome">Drop Shot<br><span>Quantum BT</span></div>
            <div class="raquete-specs" id="raquete-specs"></div>
            <div class="raquete-preco" id="raquete-preco" style="display:none">
                <div class="preco-oferta-label">⚡ OFERTA EXCLUSIVA POR TEMPO LIMITADO</div>
                <div class="preco-de">De <s>R$ 1.850</s></div>
                <div class="preco-por">R$ 1.399<sup>,00</sup></div>
                <button class="btn-comprar-raquete" onclick="comprarRaquete()">Reservar via WhatsApp 🎾</button>
            </div>
        </div>
    </div>
    `;

    const specs = [
        { icon: '📐', label: 'Perfil', val: '22mm — Toque confortável e elástico' },
        { icon: '⚖️', label: 'Peso', val: '310g–330g — Agilidade e potência' },
        { icon: '🎯', label: 'Balanço', val: 'Médio — Versatilidade total em quadra' },
    ];

    setTimeout(() => {
        const img = document.getElementById('raquete-img');
        img && img.classList.add('raquete-enter');
    }, 100);

    let i = 0;
    const specsEl = document.getElementById('raquete-specs');

    function showNextSpec() {
        if (i >= specs.length) {
            setTimeout(() => {
                const precoEl = document.getElementById('raquete-preco');
                if (precoEl) {
                    precoEl.style.display = 'block';
                    precoEl.classList.add('preco-reveal');
                }
            }, 400);
            return;
        }
        const s = specs[i];
        const div = document.createElement('div');
        div.className = 'spec-item spec-anim';
        div.innerHTML = `<span class="spec-icon">${s.icon}</span><div><strong>${s.label}</strong><br>${s.val}</div>`;
        specsEl.appendChild(div);
        i++;
        setTimeout(showNextSpec, 900);
    }

    setTimeout(showNextSpec, 1200);
}

function comprarRaquete() {
    const msg = encodeURIComponent('Olá! Tenho interesse na raquete Drop Shot Quantum BT por R$: 1.399.99 🎾');
    window.open(`https://wa.me/5521968892544?text=${msg}`, '_blank');
}

// ── BOLA ──────────────────────────────────────
function renderBola(el) {
    el.innerHTML = `
    <div class="bola-scene" id="bola-scene">
        <div class="bola-chuva" id="bola-chuva"></div>
        <div class="bola-hero">
            <video src="${VIDEO_BOLA}" class="bola-main-img" id="bola-img"
  autoplay muted loop playsinline></video>
            <div class="bola-hero-info">
                <div class="bola-titulo">Bola Penalty<br><span>Beach Tennis</span></div>
                <div class="bola-desc">Pressurizada, resistente e com excelente resposta para beach tennis e quadras rápidas.</div>
                <div class="bola-preco-box">
                    <span class="bola-preco">R$ 50,00</span>
                    <span class="bola-unidade">/ tubo</span>
                </div>
                <button class="btn-comprar-bola" onclick="comprarBola()">Pedir via WhatsApp 🎾</button>
            </div>
        </div>
    </div>
    `;

    // chuva de bolas
    const chuva = document.getElementById('bola-chuva');
    for (let i = 0; i < 18; i++) {
       const b = document.createElement('video');
b.src = VIDEO_BOLA;
b.autoplay = true;
b.muted = true;
b.loop = true;
b.setAttribute('playsinline', '');
b.className = 'bola-cai';
b.style.cssText = `left:${Math.random()*100}%;animation-delay:${Math.random()*1.5}s;animation-duration:${0.8+Math.random()*0.8}s;width:${28+Math.random()*24}px;opacity:${0.5+Math.random()*0.5};`;
chuva.appendChild(b);
    }

    setTimeout(() => {
        const heroImg = document.getElementById('bola-hero-img');
        if (heroImg) heroImg.classList.add('bola-rola');
    }, 1800);
}

function comprarBola() {
    const msg = encodeURIComponent('Olá! Tenho interesse em comprar bolas Penalty Beach Tennis. 🎾');
    window.open(`https://wa.me/5521968892544?text=${msg}`, '_blank');
}

// ── GRIP ──────────────────────────────────────
function renderGrip(el) {
    el.innerHTML = `
    <div class="grip-scene" id="grip-scene">
        <div class="grip-bg-glow"></div>
        <div class="grip-action-wrap" id="grip-action-wrap">
            <video src="${VIDEO_GRIP_ACT}" class="grip-action-img" id="grip-action-img" autoplay muted loop playsinline></video>
            <div class="grip-action-overlay"></div>
        </div>
        <div class="grip-product-wrap" id="grip-product-wrap">
            <video src="${VIDEO_GRIP}" class="grip-produto-img" id="grip-produto-img" autoplay muted loop playsinline></video>
            <div class="grip-info">
                <div class="grip-titulo">Grip Wilson<br><span>Overgrip Premium</span></div>
                <div class="grip-desc">Absorção máxima de suor, conforto total e durabilidade profissional. O favorito dos atletas.</div>
                <div class="grip-preco-box">
                    <span class="grip-preco">R$ 25,00</span>
                    <span class="grip-unidade">/ unidade</span>
                </div>
                <button class="btn-comprar-grip" onclick="comprarGrip()">Pedir via WhatsApp 🎾</button>
            </div>
        </div>
    </div>
    `;

    setTimeout(() => {
        const act = document.getElementById('grip-action-img');
        if (act) act.classList.add('grip-sai');
    }, 200);

    setTimeout(() => {
        const prod = document.getElementById('grip-produto-img');
        if (prod) prod.classList.add('grip-rola-abre');
    }, 1400);

    setTimeout(() => {
        const info = document.querySelector('.grip-info');
        if (info) info.classList.add('grip-info-show');
    }, 2200);
}

function comprarGrip() {
    const msg = encodeURIComponent('Olá! Tenho interesse no Grip Wilson Overgrip por R5. 🎾');
    window.open(`https://wa.me/5521968892544?text=${msg}`, '_blank');
}

function reservarAula(p) { alert("Reserva solicitada para " + professores[p].nome); }
function verHistorico() { alert("Em breve!"); }

carregarProfessoresHome();
renderCatScroll();
