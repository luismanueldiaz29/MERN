require('dotenv').config();

const app = require('./app');
require('./database/mongoose');

async function main(){
    await app.listen(app.get('PORT'))
    console.log(`App listen in http://localhost:`+app.get('PORT'))
}

main();