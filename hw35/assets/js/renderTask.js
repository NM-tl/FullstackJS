export const renderTodos = (arr) => {
  const todoList = document.getElementById('todo-list');
  const doneCounter = document.getElementById('done');
  const allCounter = document.getElementById('all');
  todoList.innerHTML = '';
  let doneCount = 0;

  arr.forEach((todo) => {
      if (todo.done) {
          doneCount++;
          return;
      }

      const todoItem = document.createElement('li');
      todoItem.className = `border border-slate-200 rounded-xl flex flex-col gap-3`;
      todoItem.innerHTML = `
          <div class="flex justify-between w-full border-b border-slate-200 p-4 flex-col gap-3 sm:flex-row items-start sm:items-center">
              <div class="flex items-center gap-4">
                  <div class="badge badge-warning badge-sm"></div>
                  <h2 class="text-lg font-semibold">${todo.title}</h2>
                  <span class="badge badge-neutral border-0 text-black bg-slate-300">${todo.date}</span>
              </div>
              <div class="flex gap-3 items-center">
                  <button class="done p-2 border border-slate-200 rounded-full flex items-center justify-center transition-all hover:scale-105 hover:border-0 hover:bg-success hover:text-white" data-id="${todo.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>                
                  </button>
                  <button class="edit p-2 border border-slate-200 rounded-full flex items-center justify-center transition-all hover:scale-105" data-id="${todo.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>                
                  </button>
                  <button class="remove bg-error p-2 rounded-full flex items-center justify-center text-white transition-all hover:scale-105" data-id="${todo.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>                
                  </button>
              </div>
          </div>
          <p class="px-4 pb-4 text-slate-500 content">${todo.content}</p>
      `;
      todoList.appendChild(todoItem);
  });

  allCounter.textContent = arr.filter(todo => !todo.done).length;;
  doneCounter.textContent = doneCount;
};