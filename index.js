// 1. Crear un servidor con Express en el puerto 3000
const express = require('express')
const app = express()
const port = 3000

// 2. Definir la carpeta “assets” como carpeta pública del servidor.
app.use(express.static('public')); //assets se encuentra dentro de public

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

// 3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de 
// la ruta /abracadabra/usuarios. 
const usuario = ["Juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"]

app.get ('/abracadabra/usuarios', (req, res) => {
    res.json(usuario)
});

// 4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el 
// usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en 
// el servidor. // si es exitoso, devolver game.html, sino devolver no_user.html”.
// Ruta para el juego
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const nameUser = req.params.usuario;
    const usuarioRequerido = usuario.includes(nameUser);
    usuarioRequerido
        ? res.redirect('/abracadabra/game')
        : res.redirect('/abracadabra/no_user');
});

app.get('/abracadabra/game', (req, res) => { 
    res.sendFile (__dirname + "/public/game.html")
})

app.get('/abracadabra/no_user', (req, res) => { 
    res.sendFile (__dirname + "/public/no_user.html")
})

// Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el 
// número generado de forma aleatoria. En caso de ser exitoso, devolver la imagen del conejo.
// de lo contrario devolver la imagen de Voldemort.
app.get('/abracadabra/conejo/:n', (req, res) => {
    const num = Math.floor(Math.random() * 4) + 1
    const n = parseInt(req.params.n)
    if (n === num) {
        res.sendFile(__dirname + "/public/rabbit.html")
    } else {
        res.sendFile(__dirname + '/public/not_found.html')
    }
});

// 6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al 
// consultar una ruta que no esté definida en el servidor. (
app.get ('*', (req, res) => 
    res.send ('¡Abracadabra! El mago hizo desaparecer esta página'))

app.listen (port, () => {
    console.log (`El servidor está inicializado en el puerto http://localhost:${port}`)
});