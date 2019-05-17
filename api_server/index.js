const express = require('express');
const app = express();
const cors = require('cors');


const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'mariadb',
  user: 'root',
  password: 'password',
  database: 'todoapp'
});

app.use(cors());


app.get('/api/tasks', (req, res) => {
  // connection.connect();

  connection.query('select * from tasks', function(error, results, fields) {
    if (error) throw error;


    return res.json(results);
  });

  // connection.end();
});

app.listen(5000, () => console.log('Api server listening on port 5000!'));