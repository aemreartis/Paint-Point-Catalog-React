const express = require('express');

const app = express();

var db = require('./database')
app.get('/api/cards', (req, res) => {
    db.query('select * from cards', (err, table) => {
        if (err.error)
            return console.log(err.error);
        console.log(`PostgreSQL connected...`);
        res.json(table);
    });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);