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
// el servidor. // si no es exitoso, devolver la imagen “who.jpeg”.
// Ruta para el juego
app.get('/abracadabra/juego/:usuario?', (req, res) => {
    const nameUser = req.params.usuario
    if (!nameUser) {
        res.redirect('/no_user.html')
    } else {
        const usuarioRequerido = usuario.includes(nameUser);
        usuarioRequerido
            ? res.sendFile(`${__dirname}/public/game.html`)
            : res.redirect('/no_user.html')
    }
})

// Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el 
// número generado de forma aleatoria. En caso de ser exitoso, devolver la imagen del conejo.
app.get('/abracadabra/rabbit', (req, res) => {
    res.sendFile(__dirname + "/public/rabbit.html")
});

// de lo contrario devolver la imagen de Voldemort.
app.get('/abracadabra/not_found', (req, res) => {
    res.sendFile(__dirname + "/public/not_found.html")
})

// 6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al 
// consultar una ruta que no esté definida en el servidor. (
app.get ('*', (req, res) => 
    res.send ('¡Abracadabra! El mago hizo desaparecer esta página'))


app.listen (port, () => {
    console.log (`El servidor está inicializado en el puerto http://localhost:${port}`)
});