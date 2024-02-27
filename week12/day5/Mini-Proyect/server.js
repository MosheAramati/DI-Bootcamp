const express = require('express');
const bp = require("body-parser");
const app = express();
const taskRoutes = require('./routes/task.routes.js');

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
