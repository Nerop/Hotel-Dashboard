const http = require("http");
const mysql = require('mysql');
const fs = require('fs');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hotel'
});

function getSQL(callback) {
    connection.connect();
    let json = '';
    let query = 'SELECT * FROM clients';
    connection.query(query, function (err, results, fields) {
        if (err)
            return callback(err, null);

        console.log('The query-result is: ', results[0]);
        fs.writeFile('table.json', JSON.stringify(results), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        json = JSON.stringify(results);

        connection.end();
        console.log('JSON-result:', json);
        callback(null, json);
    });
}

http.createServer(function (req, res) {
    getSQL(function (err, result) {
        res.writeHead(200, {
            'Content-Type': 'x-application/json'
        });
        res.end(result);
    });
}).listen(3000);
