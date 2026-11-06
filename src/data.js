// Alento é uma marca fictícia. Preços, horários e depoimentos são ilustrativos.

// Arquivos de public/ passam por aqui para funcionar em qualquer subpasta.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const hours = "Terça a sábado, das 9h às 20h";

export const navigation = [
  ["Tratamentos", "tratamentos"],
  ["A visita", "visita"],
  ["Perguntas", "perguntas"],
];

export const treatments = [
  {
    id: "massagens",
    name: "Massagens",
    image: asset("media/massagem.webp"),
    width: 1400,
    height: 2100,
    alt: "Mãos de terapeuta massageando as costas de uma pessoa deitada",
    items: [
      {
        id: "relaxante",
        name: "Massagem relaxante",
        note: "Pressão leve a média, para soltar o corpo sem dor.",
        minutes: 60,
        price: 220,
      },
      {
        id: "pedras",
        name: "Pedras quentes",
        note: "Calor lento nas costas e nas pernas.",
        minutes: 80,
        price: 290,
      },
      {
        id: "aromaterapia",
        name: "Aromaterapia",
        note: "Massagem suave com óleos essenciais à sua escolha.",
        minutes: 60,
        price: 240,
      },
      {
        id: "reflexologia",
        name: "Reflexologia podal",
        note: "Pontos de pressão nos pés, com escalda-pés antes.",
        minutes: 45,
        price: 170,
      },
    ],
  },
  {
    id: "pele",
    name: "Pele",
    image: asset("media/rosto.webp"),
    width: 1400,
    height: 933,
    alt: "Pessoa de olhos fechados com máscara facial clara",
    items: [
      {
        id: "limpeza",
        name: "Limpeza de pele",
        note: "Extração cuidadosa e máscara calmante.",
        minutes: 75,
        price: 260,
      },
      {
        id: "hidratacao",
        name: "Hidratação facial",
        note: "Máscara nutritiva e massagem no rosto.",
        minutes: 50,
        price: 210,
      },
    ],
  },
  {
    id: "corpo",
    name: "Corpo e banho",
    image: asset("media/corpo.webp"),
    width: 1400,
    height: 933,
    alt: "Óleo morno sendo despejado na mão de terapeuta sobre as costas de uma pessoa",
    items: [
      {
        id: "imersao",
        name: "Banho de imersão",
        note: "Sais, luz baixa e ninguém batendo na porta.",
        minutes: 45,
        price: 180,
      },
      {
        id: "esfoliacao",
        name: "Esfoliação corporal",
        note: "Corpo inteiro, com óleo morno no final.",
        minutes: 60,
        price: 230,
      },
      {
        id: "sauna",
        name: "Sauna e descanso",
        note: "Sauna seca, ducha fria e chá na sala de repouso.",
        minutes: 60,
        price: 150,
      },
    ],
  },
];

// Minutos reais de uma visita: a barra da seção é desenhada em escala.
export const visit = [
  {
    id: "chegar",
    minutes: 10,
    title: "Chegar",
    text: "Chá e uma conversa rápida.",
  },
  {
    id: "tratamento",
    minutes: 60,
    title: "Tratamento",
    text: "Sala só sua. Você diz se prefere conversa ou silêncio.",
  },
  {
    id: "descanso",
    minutes: 20,
    title: "Não fazer nada",
    text: "Sala de descanso, sem relógio à vista. Já está no preço.",
  },
];

export const voices = [
  {
    id: "renata",
    text: "Dormi na maca. Acordei com a terapeuta dizendo, baixinho, que não tinha pressa nenhuma.",
    author: "Renata M.",
    detail: "massagem relaxante",
  },
  {
    id: "clarice",
    text: "Fui porque ganhei de presente da minha irmã. Voltei sozinha três semanas depois.",
    author: "Clarice T.",
    detail: "pedras quentes",
  },
  {
    id: "davi",
    text: "Minha agenda continua igual. Mas agora consigo olhar para ela sem travar o pescoço.",
    author: "Davi A.",
    detail: "aromaterapia",
  },
];

export const faqs = [
  {
    question: "Preciso chegar antes?",
    answer:
      "Dez minutos antes já basta. Esse tempo faz parte da visita e não desconta do seu tratamento.",
  },
  {
    question: "Posso remarcar ou cancelar?",
    answer:
      "Pode, sem custo, até 24 horas antes. Depois disso cobramos metade do valor, porque a sala ficou reservada para você.",
  },
  {
    question: "Posso fazer tratamentos durante a gravidez?",
    answer:
      "Alguns, sim. Avise ao agendar e confirme com quem acompanha seu pré-natal, para a gente adaptar o que for preciso.",
  },
  {
    question: "O que preciso levar?",
    answer: "Nada. Roupão, toalhas e chinelos ficam por nossa conta.",
  },
  {
    question: "Dá para dar de presente?",
    answer:
      "Dá. Você escolhe um tratamento ou um valor, e a pessoa marca quando quiser, em até seis meses.",
  },
];
