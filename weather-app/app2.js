const express = require('express');
const app = express();

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Mumbai,in&mode=json&appid=c8a43c029f4fa1d9ca4c599947d51b89&units=metric';

//json middleware
app.use(express.json());

//routing handlers
app.get('/:city', (req, res)=>{
    const cityname = req.params.city;
    var temp_url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityname+',in&mode=json&appid=c8a43c029f4fa1d9ca4c599947d51b89&units=metric';
    var request = require('request');
    request(temp_url, (err, body)=>{
        if(!err){
        var data = JSON.parse(body).toString();
        res.end("Cityname :",data['name']);
        res.end("Temprature :"+data.main['temp']+"&#176");
        res.end("Sunset Timing :",new Date(data.sys['sunset']*1000));
        }
        else{
            res.status(404).end("Not available");
        }
    });
    
});

//register port listener
const port = process.env.PORT || 8081;
app.listen(port, ()=>console.log(`Listening on ${port}`));

// function newFunction(response, data) {
//     response.send("Cityname :", data['name']);
//     response.send("Temprature :" + data.main['temp'] + "&#176");
//     response.send("Sunset Timing :", new Date(data.sys['sunset'] * 1000));
// }
