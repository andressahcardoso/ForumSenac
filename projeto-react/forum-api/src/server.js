const app = require('./app');
require('dotenv').config()
//const port = app.get('port');

const port = process.env.PORT

// Testar API
app.listen(port, () => console.log(`Run on port ${port}!`));