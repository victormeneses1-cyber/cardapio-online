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
        '07:00': ['Caio aula', 'GAVP', '', ''],
        '08:00': ['Caio aula', 'GAVP', '', ''],
        '09:00': ['Caio aula', '', '', ''],
        '13:00': ['Caio aula', '', '', ''],
        '14:00': ['', '', '', ''],
        '15:00': ['Pedro aula', '', '', ''],
        '16:00': ['Pedro aula', 'Leo aula', '', ''],
        '17:00': ['Pedro aula', 'Caio aula', '', ''],
        '18:00': ['🔒', 'Caio aula', 'GAVP', ''],
        '19:00': ['🔒', 'Caio aula', 'GAVP', 'Marabezi'],
        '20:00': ['🔒', '🔒', '🔒', 'Marabezi'],
        '21:00': ['🔒', '🔒', '🔒', '🔒'],
    },
    'Terça': {
        '07:00': ['Marabezi aula', '', '', ''],
        '08:00': ['Marabezi aula', '', '', ''],
        '14:00': ['', '', '', ''],
        '15:00': ['', '', '', ''],
        '16:00': ['', '', 'Fabinho aula', ''],
        '17:00': ['', 'Caio aula', 'Fabinho aula', ''],
        '18:00': ['🔒', 'Caio aula', 'Fabinho aula', ''],
        '19:00': ['🔒', 'Caio aula', 'Fabinho aula', '🔒'],
        '20:00': ['🔒', '🔒', 'Fabinho aula', '🔒'],
        '21:00': ['🔒', '🔒', 'Fabinho aula', '🔒'],
    },
    'Quarta': {
        '07:00': ['Caio aula', 'GAVP', '', ''],
        '08:00': ['Caio aula', 'GAVP', '', ''],
        '09:00': ['Caio aula', 'Marabezi aula', 'Leo aula', ''],
        '11:00': ['', 'Marabezi aula', '', ''],
        '14:00': ['Leo aula', '', '', ''],
        '15:00': ['Leo aula', 'Pedro aula', '', ''],
        '16:00': ['', 'Pedro aula', '', ''],
        '17:00': ['Caio aula', ' Leo aula', '', ''],
        '18:00': ['🔒', '🔒', '🔒', 'GAVP'],
        '19:00': ['🔒', '🔒', '🔒', 'GAVP'],
        '20:00': ['🔒', '🔒', 'Leo aula', '🔒'],
        '21:00': ['🔒', '🔒', 'Leo aula', '🔒'],
    },
    'Quinta': {
        '07:00': ['Marabezi aula', '', '', ''],
        '08:00': ['Marabezi aula', '', '', ''],
        '13:00': ['', '', '', ''],
        '14:00': ['', '', '', ''],
        '15:00': ['Pedro aula', '', '', ''],
        '16:00': ['Pedro aula', '', 'Fabinho aula', ''],
        '17:00': ['Pedro aula', 'Caio aula', 'Fabinho aula', ''],
        '18:00': ['🔒', '🔒', 'Fabinho aula', 'Caio aula'],
        '19:00': ['🔒', '', 'Fabinho aula', ''],
        '20:00': ['🔒', '🔒', '🔒', 'Fabinho aula'],
        '21:00': ['🔒', '🔒', '🔒', ''],
    },
    'Sexta': {
        '07:00': ['Caio aula', 'GAVP', '🔒', ''],
        '08:00': ['Caio aula', 'GAVP', '🔒', ''],
        '09:00': ['Caio aula', 'Marabezi aula', 'Leo aula', ''],
        '10:00': ['', '', 'Leo aula', ''],
        '11:00': ['', 'Marabezi aula', '', ''],
        '16:00': ['Caio aula', '', '', ''],
        '17:00': ['Caio aula', 'Leo aula', 'marabezi aula', ''],
        '18:00': ['Caio aula', '', '', ''],
        '19:00': ['🔒', '',  '', ''],
        '20:00': ['🔒', 'marabezi aula', '', ''],
        '21:00': ['', '', '', ''],
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
    // esconde todas as telas
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('s-quadras').classList.add('active');

    // atualiza nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('nav-quadras').classList.add('active');

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
