const input = document.getElementById('taskInput')
const inputDesc = document.getElementById('taskInputDesc')
const botao = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

// Carregar tarefas salvas
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []


// Função para criar uma tarefa
function criarTarefa(texto) {
  const li = document.createElement('li')
  li.classList.add('tarefa')

  // Cria um span com o texto da tarefa
  const span = document.createElement('span')
  span.textContent = texto
  li.appendChild(span)

  // Cria um botão de excluir
  const botaoExcluir = document.createElement('button')
  botaoExcluir.innerHTML = '<i data-lucide="trash-2"></i>'
  botaoExcluir.classList.add('btn-excluir')

  li.appendChild(botaoExcluir)
  taskList.appendChild(li)

  lucide.createIcons()

  //Remover tarefa

  botaoExcluir.addEventListener('click', () => {
    li.remove()
  })

  // Evento de clique para excluir a tarefa
  botaoExcluir.addEventListener('click', () => {
    li.remove() // remove da tela

    // Remove do array e atualiza o localStorage
    const index = tarefas.indexOf(texto)
    if (index > -1) {
      tarefas.splice(index, 1)
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }
  })

  // Adiciona o botão dentro da li
  li.appendChild(botaoExcluir)

  // Adiciona a li dentro da lista UL
  taskList.appendChild(li)
}


// Mostrar tarefas salvas
tarefas.forEach(criarTarefa)


// Adicionar nova tarefa
botao.addEventListener('click', () => {
  const texto = input.value.trim() // remove espaços extras

  if (texto === '') {
    alert('Por favor, digite uma tarefa.')
    return
  }

  criarTarefa(texto)
  tarefas.push(texto)
  localStorage.setItem('tarefas', JSON.stringify(tarefas))

  input.value = '' // limpa o campo
  input.focus() // volta o cursor
  inputDesc.value = ''
})



/*Modal*/

const abrir = document.getElementById('openModal')
const modal = document.getElementById('modal')
const fechar = document.querySelector('.fechar')

abrir.addEventListener('click', ()=> {
    modal.style.display = 'flex'
})

fechar.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none'
    }
})

/*Modal Priority*/
const abrirModalPriority = document.getElementById('openModal-priority')
const modalPriority = document.getElementById('modal-priority')


abrirModalPriority.addEventListener('click', () => {
    modalPriority.style.display = 'flex'
})

window.addEventListener('click', (e) => {
    if(e.target === modalPriority){
        modalPriority.style.display = 'none'
    }
})