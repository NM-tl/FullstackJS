export const saveToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
  
export const loadFromLocalStorage = () => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
};
  
export const getCurrentDate = () => {
    const now = new Date();
    return `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()}`;
};
  
export const createTodo = (title, content) => ({
    id: Date.now(),
    title,
    content,
    done: false,
    date: getCurrentDate(),
});