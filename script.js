const tarefaInput = document.getElementById("tarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");

adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      adicionarTarefa();
  }
});

function adicionarTarefa() { 
  const tarefaTexto = tarefaInput.value;
  if (tarefaTexto.trim() !== "") {
      const novaTarefa = document.createElement("li");
      novaTarefa.innerHTML = `
          ${tarefaTexto} <button class="excluir">Excluir</button>
      `;
      listaTarefas.appendChild(novaTarefa);
      tarefaInput.value = "";
  }
}


listaTarefas.addEventListener("click", function (e) {
  if (e.target.classList.contains("excluir")) {
      e.target.parentElement.remove();
  }
});
