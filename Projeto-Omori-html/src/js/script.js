const menu = document.querySelector("#menu");

document.addEventListener("DOMContentLoaded", () => {
  const botoesPersonagem = document.querySelectorAll(".botao");
  const personagens = document.querySelectorAll(".personagem");

  // Adicione um evento de clique a cada botão de personagem
  botoesPersonagem.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      // Remova a classe 'selecionado' de todos os botões de personagem
      botoesPersonagem.forEach((b) => b.classList.remove("selecionado"));
      // Adicione a classe 'selecionado' apenas ao botão clicado
      botao.classList.add("selecionado");

      // Remova a classe 'selecionado' de todos os personagens
      personagens.forEach((p) => p.classList.remove("selecionado"));
      // Adicione a classe 'selecionado' apenas ao personagem correspondente ao botão clicado
      personagens[index].classList.add("selecionado");
    });
  });
});
