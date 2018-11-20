const  express = require('express'),
       app = express(),
       port = process.env.PORT || 3000;

const  todoRoutes = require('./routes/todos');
       
app.get('/', (req, res) => res.send('Welcome to index page'));

app.use('/api/todos', todoRoutes);

app.listen(port, () => console.log(`Server is running on ${port}`));