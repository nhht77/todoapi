const  express = require('express'),
       app = express(),
       port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Welcome to index page'));

app.listen(port, () => console.log(`Server is running on ${port}`));