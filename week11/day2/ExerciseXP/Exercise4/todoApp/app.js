import TodoList from "./todo.js"
const todoList = new TodoList();
todoList.addTask('Clean');
todoList.addTask('Home Work');
todoList.listTasks();
todoList.completeTask(1);
todoList.listTasks();
