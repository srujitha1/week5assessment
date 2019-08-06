let express = require('express');
let nodemon = require('nodemon');
let mongoose = require('mongoose');
let apiroutes = require('./api-route');
let bodyParser = require('body-parser');
let swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
var cors = require('cors');

let app = express();

app.use(cors()) ;
mongoose.connect('mongodb://localhost/movies', {useNewUrlParser: true});

app.get('/',(req,res)=>{
    res.send(JSON.stringify({message:'Hello world from express'}))
});
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api',apiroutes);
let port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log('Server started');
})

var db = mongoose.connection;
if(!db){
    console.log("Error connecting db")
}
else{
    console.log('Db connected successfully');
}