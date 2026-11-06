# Alento

Landing page conceitual de um spa urbano fictício: naming, marca, direção de arte, copy e front-end.

[Ver o site](https://analuvidi.github.io/AlentoLP/)

Alento quer dizer fôlego. O projeto parte dessa palavra e transforma a respiração em linguagem visual: muito espaço em branco, uma forma só (o círculo), uma cor forte usada com economia e movimentos lentos.

## Decisões de design

- **Logo.** Wordmark em Spectral ExtraLight, vetorizado. O "o" final vira um crescente coral, que exagera o contraste de traço da própria serifa. Funciona a partir de 16 px como favicon.
- **Hero.** A foto começa como um círculo que respira devagar e se abre até ocupar a tela conforme a rolagem, como quem enche o pulmão.
- **Pausa de um minuto.** Exercício guiado com seis ciclos de 4 s para dentro e 6 s para fora. O visitante sente a proposta antes de ler sobre ela.
- **Tempo em escala.** A barra da visita é proporcional aos minutos reais (10, 60 e 20), o que mostra de relance que o tratamento vem com folga.
- **Tratamentos como cardápio.** Lista com duração e preço à vista, sem cards. "Reservar" já preenche o formulário.
- **Cor.** Coral como acento, sobre papel e rosa claro. Texto sobre coral é sempre tinta escura, porque papel sobre coral não atinge o contraste mínimo.
- **Tipografia.** Spectral nos títulos e Hanken Grotesk nos textos, hospedadas no projeto via Fontsource.

## Acessibilidade e usabilidade

- Contraste AA nos textos, foco visível e link para pular ao conteúdo.
- Alvos de toque de pelo menos 44 px nos controles principais.
- Formulário com rótulos visíveis, máscara de telefone, erros junto ao campo e foco no primeiro erro.
- `prefers-reduced-motion`: o hero fica parado, com a altura de uma tela, e as transições são desligadas.
- Layout testado de 375 px a 1920 px, inclusive em telas baixas.

## Executar

```sh
npm install
npm run dev
```

Build: `npm run build`. Prévia de produção: `npm run preview`.

Cada envio para `main` publica o site no GitHub Pages pelo workflow em `.github/workflows/deploy.yml`.

## Organização

- `src/data.js`: tratamentos, etapas da visita, depoimentos e perguntas.
- `src/components/`: uma seção por arquivo. `logoPaths.js` guarda o logo vetorizado.
- `src/styles.css`: tokens de cor e tipo no início, depois uma seção de CSS por componente.
- `public/brand/`: logo, versão clara, símbolo e imagem de compartilhamento.
- `public/media/`: fotos em WebP.

## Créditos

Alento é uma marca fictícia, e preços, horários e depoimentos são ilustrativos. O formulário não envia dados.

Fotos do [Unsplash](https://unsplash.com/license), recortadas e com a cor ajustada para formar uma série:

| Arquivo        | ID da foto                     |
| -------------- | ------------------------------ |
| `banho.webp`   | `photo-1507652313519-d4e9174996dd` |
| `patio.webp`   | `photo-1560750588-73207b1ef5b8`    |
| `massagem.webp` | `photo-1519823551278-64ac92734fb1` |
| `rosto.webp`   | `photo-1616394584738-fc6e612e71b9` |
| `corpo.webp`   | `photo-1544161515-4ab6ce6db874`    |
| `pedras.webp`  | `photo-1600334089648-b0d9d3028eb2` |

Fontes sob a SIL Open Font License.
