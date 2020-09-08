const express = require('express');
const bodyParser = require('body-parser');

//controllers
const errorController = require('./controllers/error');

const app = express();
const router = express.Router();

const path = require('path');

//routing for static files
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(bodyParser.urlencoded({extended:false}));

//template engine settings
app.set('view engine', 'ejs');
app.set('views', 'views');

//declare routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//use routes
app.use(adminRoutes);
app.use(shopRoutes);

//other routes
app.use(errorController.get404);

app.listen(3000);