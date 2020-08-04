const express = require('express');
const morgan = require('morgan');
const Joi = require('joi');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

//Sample JSON Data
movies = [
    {id:1, name:'dil bechara', genre:'drama'},
    {id:2, name:'avatar', genre:'scifi'},
    {id:3, name:'the one', genre:'action'},
    {id:4, name:'jobs', genre:'biography'}
];

//Route handlers
app.get('/movies', (req, res)=>{
    res.send(movies);
});

//get movie name by genre
app.get('/movies/genre/:genre', (req, res)=>{
    const movie = movies.find(m => m.genre === req.params.genre);
    if(!movie) res.status(404).send('No Movies available');
    else{
        res.send(movie);    
    }
});

//get genre by movie name
app.get('/movies/movie/:name', (req, res)=>{
    const movie = movies.find(m => m.name === req.params.name);
    if(!movie) res.status(404).send('No Movies available');
    else{
        res.send(movie);
    }
});

//add movie using name and genre
app.post('/movies', (req, res)=>{

    const schema = {
        name: Joi.string().required(),
        genre: Joi.string().required()
    }

    const { error } = Joi.validate(req.body, schema);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    else{
        const movie = {
            id: movies.length + 1,
            name: req.body.name,
            genre: req.body.genre
        }
        movies.push(movie);
        res.send(movie);
    }       
    
});


//Port Listener
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening to port ${port}`));