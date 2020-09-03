const express = require('express');

const app = express();
const router = express.Router();

const path = require('path');

//static routing
app.use(express.static(path.join(__dirname, 'public')));

//declare routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//use routes
app.use(adminRoutes);
app.use(shopRoutes);

//other routes
router.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);