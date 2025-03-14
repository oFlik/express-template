const fs = require('fs');
const pg = require('pg');
const url = require('url');

const config = {
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	database: 'defaultdb',
	ssl: {
		rejectUnauthorized: true,
		// ca: fs.readFileSync('./ca.pem').toString(),
		ca: process.env.CA_CERT,
	},
};

const client = new pg.Client(config);
client.connect(function (err) {
	if (err) throw err;
	client.query('SELECT VERSION()', [], function (err, result) {
		if (err) throw err;

		console.log(result.rows[0].version);
		client.end(function (err) {
			if (err) throw err;
		});
	});
});

module.exports = client;
