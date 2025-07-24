function curriculo() {
    document.getElementById("curriculo")
    const link = document.createElement("a");
    link.href = "./static/pdf/curriculo.pdf";
    link.download = "curriculo.pdf";
    link.click();
}

const imgAgenda = [
  { src: './static/img/agenda-pro/inicio.png', texto: 'Tela de inicio, contendo as informações mais relevantes.' },
  { src: './static/img/agenda-pro/cadastro.png', texto: 'Área de cadastro.' },
  { src: './static/img/agenda-pro/login.png', texto: 'Local para o usuário logar e entrar no sistema.' },
  { src: './static/img/agenda-pro/newConsultation.png', texto: 'Área para realizar o agendamento de um nova consulta.' },
  { src: './static/img/agenda-pro/chat.png', texto: 'Aba que contém um chat em tempo real.' },
  { src: './static/img/favicon/github.png', texto: 'Caso queira saber mais sobre o projeto entre no GitHub do projeto: <a href="https://github.com/Gabrielle-Santiago/agendapro" target="_blank" style="color: #d50505">Click Aqui!!</a><br> Imagem criada por:Github ícones criados por Ruslan Babkin - Flaticon'}
];

const imgGame = [
    { src: './static/img/game-catalog/front-game-catalog.png', texto: 'Tela inicial, onde visualiza-se a capa que contém o nome do jogo, e botões para posseguir, retornar e mais informações.' },
    { src: './static/img/game-catalog/back-game-catalog.png', texto: 'Descrição do jogo selecionado, contém informações como nome, gênero, ano de lançamento e avaliações do público.' },
    { src: './static/img/favicon/github.png', texto: 'Caso queira saber mais sobre o projeto entre no GitHub do projeto: <a href="https://github.com/Gabrielle-Santiago/GameCatalog" target="_blank" style="color: #d50505">Click Aqui!!</a><br> Imagem criada por:Github ícones criados por Ruslan Babkin - Flaticon'}
];

const imgDelivery = [
    { src: './static/img/system-delivery/index.png', texto: 'Área inicial onde o usuário seleciona a opção de cadastro ou login.' },
    { src: './static/img/system-delivery/cadastrar-delivery.png', texto: 'Área de cadastro, onde o usuário escolhe se será vendedor(Admin) ou consumidor(User).' },
    { src: './static/img/system-delivery/login-delivery.png', texto: 'Local onde o usário confirma a identidade para prosseguir para o sistema.' },  
    { src: './static/img/system-delivery/cadastro-produto-delivery.png', texto: 'Registro do produto no sistema (Home do vendedor)' },
    { src: './static/img/system-delivery/update-produto-delivery.png', texto: 'Atualizar informações ou deletar os produtos' },
    { src: './static/img/system-delivery/home-produto.png', texto: 'Visualização dos produtos cadastrados (Home do usuário)' },
    { src: './static/img/favicon/github.png', texto: 'Caso queira saber mais sobre o projeto entre no GitHub do projeto: <a href="https://github.com/Gabrielle-Santiago/System-Delivery" target="_blank" style="color: #d50505">Click Aqui!!</a><br> Imagem criada por:Github ícones criados por Ruslan Babkin - Flaticon'}
]

let imagens = [];
let index = 0;

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalText = document.getElementById('modal-text');
const btnClose = document.getElementById('close-modal');
const btnPrev = document.getElementById('prev-img');
const btnNext = document.getElementById('next-img');

function atualizarModal() {
  modalImg.src = imagens[index].src;
  modalText.innerHTML = imagens[index].texto;
  modalImg.classList.remove('zoomed');
}

function abrirModal(arrayDeImagens) {
  imagens = arrayDeImagens;
  index = 0;
  atualizarModal();
  modal.style.display = 'flex';
}

document.getElementById('open-agenda').addEventListener('click', () => {
  abrirModal(imgAgenda);
});

document.getElementById('open-game').addEventListener('click', () => {
  abrirModal(imgGame);
});

document.getElementById('open-delivery').addEventListener('click', () => {
  abrirModal(imgDelivery);
});

btnClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

btnPrev.addEventListener('click', () => {
  index = (index - 1 + imagens.length) % imagens.length;
  atualizarModal();
});

btnNext.addEventListener('click', () => {
  index = (index + 1) % imagens.length;
  atualizarModal();
});

modalImg.addEventListener('click', () => {
  modalImg.classList.toggle('zoomed');
});
