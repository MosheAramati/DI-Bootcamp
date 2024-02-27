// 🌟 Exercise 4: Todo List Using ES6 Module Syntax
// Instructions
//1. Create a directory named todoApp.

//2. Inside the todoApp directory, create two files: todo.js and app.js.

//3. In todo.js, define an ES6 module that exports a TodoList class.

//4. The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

//5. Export the TodoList class.

//6. In app.js, import the TodoList class from the todo.js module.

//7. Create an instance of the TodoList class.

//8. Add a few tasks, mark some as complete, and list all tasks.

//9. Run app.js and verify that the todo list operations are working correctly.

class TodoList {
    constructor() {
        this.tasks = [];
    }

    
    addTask(task) {
        this.tasks.push({ task: task, completed: false });
    }

    
    completeTask(taskIndex) {
        if (taskIndex >= 0) {
            this.tasks[taskIndex].completed = true;
        } else {
            console.log('Task index out of range.');
        }
    }

    listTasks() {
        console.log('Tasks:');
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}.${task.task}[${task.completed ? 'x' : ' '}] `);
        });
    }
}

const todoList = new TodoList();

// todoList.addTask('Clean');
// todoList.addTask('Home Work');
// todoList.listTasks();
// todoList.completeTask(1);
// todoList.listTasks();

export default TodoList;