
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

app.listen(app.get('port'));
console.log('Server is in port', app.get('port'));