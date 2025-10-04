// Seletores principais
const linksMenu = document.querySelectorAll('.menu a');
const abas = document.querySelectorAll('.abas-conteudo .aba');
const legenda = document.querySelector('.cabecalho-area .legenda');
const titulo = document.querySelector('.cabecalho-area .titulo-area');

function mostrarAba(alvo) {
  abas.forEach((aba) => {
    const id = aba.dataset.aba;
    const ativa = id === alvo;
    if (ativa) {
      aba.removeAttribute('hidden');
      aba.classList.add('ativo');
    } else {
      aba.setAttribute('hidden', 'true');
      aba.classList.remove('ativo');
    }
  });

  // pega o container principal
  const cont = document.querySelector('.conteiner');
  cont.classList.remove('inicio', 'projetos', 'curriculo'); // limpa classes antigas
  cont.classList.add(alvo); // aplica a classe com o nome da aba

  // legenda/título
  if (alvo === 'inicio') {
    legenda.textContent = 'Meus serviços';
    titulo.textContent = 'O que eu faço';
  } else if (alvo === 'projetos') {
    legenda.textContent = 'Portfólio';
    titulo.textContent = 'Projetos em destaque';
  } else if (alvo === 'curriculo') {
    legenda.textContent = 'Resumo';
    titulo.textContent = 'Experiência e formação';
  }
}

// Liga os cliques do menu às abas (usando data-aba)
linksMenu.forEach((link) => {
  link.addEventListener('click', (e) => {
    const alvo = link.dataset.aba;
    if (!alvo) return; // se for outro link, ignora
    e.preventDefault();

    mostrarAba(alvo);

    // marca visual do link ativo
    linksMenu.forEach(l => l.classList.remove('ativo'));
    link.classList.add('ativo');
  });
});

// Estado inicial
mostrarAba('inicio');