import { renderTodos } from './renderTask.js';
import { openModal, closeModal } from './main.js';
import { 
    saveToLocalStorage, 
    loadFromLocalStorage, 
    getCurrentDate, 
    createTodo 
} from './utils.js';

const toggleTodo = (todo) => ({ ...todo, done: !todo.done });
const deleteTodo = (todos, id) => todos.filter((todo) => todo.id !== id);
const addTodo = (todos, todo) => [...todos, todo];
const updateTodo = (todos, updatedTodo) => todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));

export const handleFormSubmit = (event) => {
    event.preventDefault();
    const todos = loadFromLocalStorage();
    const title = document.getElementById('task-title').value;
    const content = document.getElementById('task-content').value;
    const id = document.getElementById('task-id').value;
  
    if (id) {
        const updatedTodo = { id: Number(id), title, content, done: false, date: getCurrentDate() };
        saveToLocalStorage(updateTodo(todos, updatedTodo));
    } else {
        const newTodo = createTodo(title, content);
        saveToLocalStorage(addTodo(todos, newTodo));
    }
  
    renderTodos(loadFromLocalStorage());
    closeModal(); 
};
  
export const handleTodoClick = (event) => {
    const todos = loadFromLocalStorage();
    const id = Number(event.target.closest('button').dataset.id);
    const todo = todos.find((todo) => todo.id === id);

    if (event.target.closest('.done')) {
        saveToLocalStorage(updateTodo(todos, toggleTodo(todo)));
    } else if (event.target.closest('.edit')) {
        openModal(todo);
        document.getElementById('action-title').textContent = "Edit task";
    } else if (event.target.closest('.remove')) {
        saveToLocalStorage(deleteTodo(todos, id));
    }

    renderTodos(loadFromLocalStorage());
};