const http = require('http');

var const_url = 'http://api.openweathermap.org/data/2.5/weather?q=Mumbai,in&mode=json&appid=c8a43c029f4fa1d9ca4c599947d51b89&units=metric';

var server = http.createServer((request, response)=>{
    var request = require('request');
    request(const_url, (err,res,body)=>{
        if(!err){   
        var data = JSON.parse(body);

        response.write("<html><body><div>");
        response.write("<h1>"+'Cityname :'+data['name']+"</h1>");
        response.write("<h2>"+'Temprature :'+data.main['temp']+" Degree Celsius</h2>");
        response.write("<h2>"+'Sunset :'+new Date(data.sys['sunset']*1000)+"</h2>");
        response.write("</div><body></html>");
        response.end();
        }
        else{
            response.write(err);
            response.end();
        }
        console.log("goto http://localhost:8081/");
    });
}).listen(8081);
console.log("Listening to port 8081");
