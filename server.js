const express = require('express'),
    request = require('request'),
    fs = require('fs');
    hbs = require('hbs'),
    bodyParser = require('body-parser')

    port = process.env.PORT || 8080;

var app = express();
var weather = ''; //variable to hold the weather info

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getTime', () => {
    date = new Date();
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
});

hbs.registerHelper('upper', (text) => {
    return text.toUpperCase();
})

app.use(express.static(__dirname + '/public'));

app.use((request, response, next) => {
    var time = new Date().toString()
    console.log(time)
    next()
})

// app.use((request, response, next) => {
//     var time = new Date().toString();
//     var log = `${time}: ${request.method} ${request.url}`;
//     fs.appendFile('server.log',  log + '\n', (error) => {
//         if (error) {
//             console.log('Unable to log message.')
//         }
//     })
//     next();
// });

// app.use((request, response, next) => {
//     response.render('maintenance.hbs', {
//         title: 'Index'
//     });
//     // next();
// });

app.get('/', (request, response) => {
    response.render('index.hbs', {
        title: 'Index',
        name: 'Thanh Pham',
        studentNumber: 'A01028828'
    });
});

app.get('/404', (request, response) => {
    response.send('Page not found!')
});

app.listen(port, () => {
    console.log(`Server is up on the port ${port}`);
});