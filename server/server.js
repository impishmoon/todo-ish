const PORT = process.env.PORT ?? 8000;
const express = require('express');
const postgres = require('pg');
const app = express();
const pool = require('./db')

app.get('/', (req, res) => {
    res.send("hello word");
})

app.get('/todos', async (req, res) => {
    try {
        const todos = await pool.query('SELECT * FROM todos')
        res.json(todos.rows)
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))