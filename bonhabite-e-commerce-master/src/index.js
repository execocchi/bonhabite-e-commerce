const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const session = require ('express-session')
const cookieParser = require('cookie-parser');

//Requerir el middleware que controla si el usuario está o no Logueado
const acceso = require('./middlewares/acceso');


const webRoutes = require('./routes/webRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes')
const adminRoutes= require("./routes/adminRoutes")
const productRoutes = require("./routes/productRoutes")

app.use(cookieParser());

//Uso del Middleware de session
app.use(session({
    secret : 'topSecret',   
    resave : true,  //cada vez que entra se reconozca el usuario
    saveUninitialized : true
}));

app.use(acceso);

//Aquí requiero el Middleware que controla si el usuario está o no Logueado


app.use(express.static('public'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Middleware para determinar metodos HTTP distintos a los aceptados por los formularios (GET - POST)
app.use(methodOverride('_method'));

app.use(webRoutes);
app.use(usuariosRoutes);
app.use(adminRoutes);
app.use(productRoutes);



app.set ("view engine","ejs");	


app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));