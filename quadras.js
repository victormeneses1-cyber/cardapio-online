// ═══════════════════════════════════════════════
//  CONFIGURAÇÃO DAS QUADRAS - ARENA SÃO FRANCISCO
// ═══════════════════════════════════════════════

const WHATSAPP = '5521968892544';

// Horários de funcionamento
const HORA_INICIO = 7;
const HORA_FIM = 22;

// Dias da semana
const DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

// ───────────────────────────────────────────────
// HORÁRIOS OCUPADOS — edite aqui!
// Formato: 'Dia': { 'HH:00': ['Q1', 'Q2', 'Q3', 'Q4'] }
// Use o NOME de quem está ocupando, ou '' para livre
// Use '🔒' para mensalista fixo
// ───────────────────────────────────────────────
const AGENDA = {
    'Segunda': {
        '07:00': ['Caio', 'GAVP', '', ''],
        '08:00': ['Caio', '', '', ''],
        '09:00': ['Caio', '', '', ''],
        '13:00': ['Caio', '', '', ''],
        '14:00': ['Pedro', '', '', ''],
        '16:00': ['Pedro', '', '', ''],
        '17:00': ['Pedro', '', '', ''],
        '18:00': ['Rulus', 'Caio', 'GAVP', ''],
        '19:00': ['Macedo', 'PH', 'Victor', 'Luiz'],
        '20:00': ['🔒', '🔒', '🔒', '🔒'],
        '21:00': ['🔒', '🔒', '🔒', '🔒'],
    },
    'Terça': {
        '07:00': ['Pedro', '', '', ''],
        '14:00': ['GAVP', '', '', ''],
        '15:00': ['Pedro', '', '', ''],
        '16:00': ['', 'FAB', '', ''],
        '17:00': ['Caio', '', '', ''],
        '18:00': ['Fernanda', '', '', ''],
        '19:00': ['Macedo', '', '', 'Munic'],
        '20:00': ['🔒', '🔒', '🔒', '🔒'],
        '21:00': ['🔒', '🔒', '🔒', '🔒'],
    },
    'Quarta': {
        '07:00': ['Caio', 'GAVP', '', ''],
        '09:00': ['Caio', 'Luiz', '', ''],
        '13:00': ['', 'Pedro', '', ''],
        '16:00': ['Caio', '', '', ''],
        '17:00': ['Caio', '', '', ''],
        '18:00': ['Claudio', 'Reise', 'Vilca', 'GAVP'],
        '19:00': ['', 'Renato', 'Leo', 'Caio'],
        '20:00': ['🔒', '🔒', '🔒', '🔒'],
        '21:00': ['🔒', '🔒', '🔒', '🔒'],
    },
    'Quinta': {
        '07:00': ['Pedro', '', '', ''],
        '13:00': ['GAVP', '', '', ''],
        '14:00': ['Pedro', '', '', ''],
        '15:00': ['Pedro', 'Caio', '', ''],
        '16:00': ['Caio', 'Pedro', 'FAB', ''],
        '17:00': ['PH', 'PH', '', ''],
        '18:00': ['', 'Caio', '', ''],
        '19:00': ['Adone', 'FAB', '', ''],
        '20:00': ['🔒', '🔒', '🔒', '🔒'],
        '21:00': ['🔒', '🔒', '🔒', '🔒'],
    },
    'Sexta': {
        '07:00': ['Caio', 'GAVP', 'Brisa', ''],
        '08:00': ['Caio', '', '', ''],
        '09:00': ['', 'Luiz', '', ''],
        '17:00': ['Caio', 'Leo', '', ''],
        '18:00': ['Caio', '', '', ''],
        '19:00': ['Carla', '', '', ''],
        '20:00': ['🔒', '🔒', '🔒', '🔒'],
        '21:00': ['🔒', '🔒', '🔒', '🔒'],
    },
    'Sábado': {
        '20:00': ['🔒', '🔒', '🔒', '🔒'],
        '21:00': ['🔒', '🔒', '🔒', '🔒'],
    },
    'Domingo': {
        '20:00': ['🔒', '🔒', '🔒', '🔒'],
        '21:00': ['🔒', '🔒', '🔒', '🔒'],
    },
};

// ═══════════════════════════════════════════════
//  LÓGICA — não precisa editar abaixo
// ═══════════════════════════════════════════════

let diaSelecionado = 0;

function irQuadras() {
    mostrarTela('s-quadras');
    setNavAtivo('nav-quadras');
    renderDias();
    renderTabela();
}

function renderDias() {
    const scroll = document.getElementById('dias-scroll');
    scroll.innerHTML = '';
    DIAS.forEach((dia, i) => {
        const btn = document.createElement('button');
        btn.className = 'dia-btn' + (i === diaSelecionado ? ' ativo' : '');
        btn.textContent = dia;
        btn.onclick = () => {
            diaSelecionado = i;
            renderDias();
            renderTabela();
        };
        scroll.appendChild(btn);
    });
}

function renderTabela() {
    const tbody = document.getElementById('tbody-quadras');
    tbody.innerHTML = '';
    const dia = DIAS[diaSelecionado];
    const agendaDia = AGENDA[dia] || {};

    for (let h = HORA_INICIO; h < HORA_FIM; h++) {
        const hora = `${String(h).padStart(2, '0')}:00`;
        const quadras = agendaDia[hora] || ['', '', '', ''];
        const tr = document.createElement('tr');

        const tdHora = document.createElement('td');
        tdHora.className = 'td-hora';
        tdHora.textContent = hora;
        tr.appendChild(tdHora);

        for (let q = 0; q < 4; q++) {
            const td = document.createElement('td');
            const val = quadras[q] || '';

            if (val === '🔒') {
                td.className = 'cel mensalista';
                td.innerHTML = '<span class="cel-label">🔒 Mensalista</span>';
            } else if (val !== '') {
                td.className = 'cel ocupado';
                td.innerHTML = `<span class="cel-label">❌ ${val}</span>`;
            } else {
                td.className = 'cel livre';
                td.innerHTML = `<span class="cel-label">✅ Livre</span>`;
                td.style.cursor = 'pointer';
                td.onclick = () => reservarWhatsApp(dia, hora, q + 1);
            }

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
}

function reservarWhatsApp(dia, hora, quadra) {
    const msg = encodeURIComponent(
        `Olá! Gostaria de reservar a Quadra ${quadra} na ${dia}-feira às ${hora}. 🎾`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
}
