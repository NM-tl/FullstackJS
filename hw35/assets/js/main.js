import { renderTodos } from './renderTask.js';
import { loadFromLocalStorage } from './utils.js';
import { handleFormSubmit, handleTodoClick } from './actions.js';

export const openModal = (todo = {}) => {
  document.getElementById('task-title').value = todo.title || '';
  document.getElementById('task-content').value = todo.content || '';
  document.getElementById('task-id').value = todo.id || '';
  document.getElementById('modal').classList.toggle('hidden');
  document.getElementById('overlay').classList.toggle('hidden');
};

export const closeModal = () => {
  const modal = document.getElementById('modal');
  if (!modal.classList.contains('hidden')) {
    modal.classList.toggle('hidden');
    document.getElementById('overlay').classList.toggle('hidden');
  }
};

renderTodos(loadFromLocalStorage());

document.getElementById('create').addEventListener('click', () => openModal());
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-form').addEventListener('submit', handleFormSubmit);
document.getElementById('todo-list').addEventListener('click', handleTodoClick);
document.getElementById('overlay').addEventListener('click', (event) => {if (event.target === document.getElementById('overlay')) {closeModal()}});
document.addEventListener('keydown', (event) => { if(event.key === 'Escape'){closeModal()}});
