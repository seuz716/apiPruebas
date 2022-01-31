/*
importar modulos 
*/
const bodyParser = require('body-parser');
const expres = require('express');


/*importar la configuracion
 */

const app = expres();
const port = 3500;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port, function () {
    console.log("Api ejecutandose en el puerto " + port);
})