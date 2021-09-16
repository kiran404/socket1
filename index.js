const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('home')
})

io.on('connection', (socket) => {
    console.log('User Connected >> ' + socket.id);

    socket.on('message', data => {
        socket.broadcast.emit('message', data);
    })
})

const port = 3000;
server.listen(port, () => {
    console.log('Server Running >> ', port);
})






// const app = require('express')();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server, { cors: { origin: "*" } });

// app.set('view engine', 'ejs');

// app.get('/home', (req, res) => {
//     res.render('home');
// })

// // connect the person to our server
// io.on("connection", (socket) => {
//     console.log(socket.id, " >> User Connected ");

//     socket.on('message', (data) => {
//         // console.log(data);
//         socket.broadcast.emit('message', data);
//     })
// })


// const port = 2000;
// server.listen(port, () => {
//     console.log(`Server Listened at ${port}`);
// });


