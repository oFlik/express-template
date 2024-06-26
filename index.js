const app = require('./src/app');
const http = require('http');

const port = process.env.PORT || 3001;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`App running on port ${port}`);
});
