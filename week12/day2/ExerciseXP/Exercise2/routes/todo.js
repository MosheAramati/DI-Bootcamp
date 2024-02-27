const express = require('express')
const router = express.Router()

const todos = []

// get all todo items
router.get('/todo', (req, res) => {
  res.json(todos);
});

// add new todo
router.post('/todo', (req, res) => {
  const {task} = req.body
  const newTodo = {id: todos.length + 1, task};
  todos.push(newTodo);
  res.status(201).json(todos)
});

//update todo
router.put('/todo/:id',(req,res)=>{
    const {id}= req.params;
    const {task}= req.body;
    const todoUpdate = todos.find(todo => todo.id === parseInt(id))
    if(!todoUpdate){
        return res.status(404).json({message:'to-do not found'})
    }
    todoUpdate.task = task
    res.json(todoUpdate)
    res.json(todos)
})

// Delete a to-do item by ID
router.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    todos.splice(index, 1);
    res.json({ message: 'Todo deleted successfully' });
  });

module.exports = router