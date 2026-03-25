let carrinho = []
let total = 0

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
}

const professores = [
    {
        nome: "Caio Froes", img: "caio.jpeg", habilidades: "Instrutor há +5 anos | Direção defensiva",
        aulas: [
            { dia: "Segunda", horario: "07:00", vagas: 3 }, { dia: "Segunda", horario: "08:00", vagas: 0 },
            { dia: "Segunda", horario: "09:00", vagas: 2 }, { dia: "Segunda", horario: "17:00", vagas: 1 },
            { dia: "Segunda", horario: "18:00", vagas: 0 }, { dia: "Segunda", horario: "19:00", vagas: 0 },
            { dia: "Terça", horario: "17:00", vagas: 0 }, { dia: "Terça", horario: "18:00", vagas: 1 },
            { dia: "Terça", horario: "19:00", vagas: 0 }, { dia: "Quarta", horario: "07:00", vagas: 3 },
            { dia: "Quarta", horario: "08:00", vagas: 1 }, { dia: "Quarta", horario: "09:00", vagas: 2 },
            { dia: "Quarta", horario: "17:00", vagas: 0 }, { dia: "Quinta", horario: "17:00", vagas: 0 },
            { dia: "Quinta", horario: "18:00", vagas: 1 }, { dia: "Sexta", horario: "07:00", vagas: 1 },
            { dia: "Sexta", horario: "08:00", vagas: 3 }, { dia: "Sexta", horario: "09:00", vagas: 0 },
            { dia: "Sexta", horario: "16:00", vagas: 2 }, { dia: "Sexta", horario: "17:00", vagas: 0 },
            { dia: "Sexta", horario: "18:00", vagas: 0 }
        ]
    },
    {
        nome: "Pedro Lucca", img: "pedro.jpeg", habilidades: "Especialista iniciantes | Paciência total",
        aulas: [
            { dia: "Segunda", horario: "15:00", vagas: 3 }, { dia: "Segunda", horario: "16:00", vagas: 2 },
            { dia: "Segunda", horario: "17:00", vagas: 2 }, { dia: "Terça", horario: "14:00", vagas: 4 },
            { dia: "Terça", horario: "15:00", vagas: 4 }, { dia: "Terça", horario: "16:00", vagas: 4 },
            { dia: "Terça", horario: "17:00", vagas: 4 }, { dia: "Quarta", horario: "15:00", vagas: 3 },
            { dia: "Quarta", horario: "16:00", vagas: 2 }, { dia: "Quarta", horario: "17:00", vagas: 4 },
            { dia: "Quinta", horario: "15:00", vagas: 3 }, { dia: "Quinta", horario: "16:00", vagas: 3 },
            { dia: "Quinta", horario: "17:00", vagas: 1 }, { dia: "Sexta", horario: "14:00", vagas: 4 },
            { dia: "Sexta", horario: "15:00", vagas: 4 }, { dia: "Sexta", horario: "16:00", vagas: 4 },
            { dia: "Sexta", horario: "17:00", vagas: 4 }
        ]
    },
    {
        nome: "Leonardo Briornes", img: "Leonardo.jpeg", habilidades: "Bom professor",
        aulas: [
            { dia: "Segunda", horario: "16:00", vagas: 3 }, { dia: "Quarta", horario: "09:00", vagas: 3 },
            { dia: "Quarta", horario: "10:00", vagas: 3 }, { dia: "Quarta", horario: "14:00", vagas: 1 },
            { dia: "Quarta", horario: "15:00", vagas: 0 }, { dia: "Quarta", horario: "17:00", vagas: 1 },
            { dia: "Quarta", horario: "20:00", vagas: 1 }, { dia: "Quarta", horario: "21:00", vagas: 3 },
            { dia: "Sexta", horario: "09:00", vagas: 0 }, { dia: "Sexta", horario: "10:00", vagas: 0 },
            { dia: "Sexta", horario: "16:00", vagas: 0 }
        ]
    },
    {
        nome: "Luiz Marabezi", img: "marabezi.jpeg", habilidades: "Bom professor",
        aulas: [
            { dia: "Segunda", horario: "19:00", vagas: 2 }, { dia: "Segunda", horario: "07:00", vagas: 2 },
            { dia: "Terça", horario: "07:00", vagas: 0 }, { dia: "Terça", horario: "08:00", vagas: 2 },
            { dia: "Terça", horario: "09:00", vagas: 4 }, { dia: "Terça", horario: "10:0
