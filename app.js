const express = require('express');
const app = express();

// Método para formatear el puerto en base al argumento enviado en npm start
const formattedPort = (() => {
    // se destructura el array para que tome la tercera posición 
    // (process.argv es un array que tiene como primer index el PATH de node y como segundo índice el archivo)
    let [,,portNumber] = process.argv;
    // Si el argumento del puerto es enviado y al parsearlo a número no es NAN, se devuelve
    // Caso contrario el puerto por defecto es 3000
    return portNumber && !isNaN(parseInt(portNumber)) ? parseInt(portNumber) : 3000;
})()

// Se define la carpeta pública para exponer assets y archivos estáticos
app.use(express.static('public'));

// Se levanta el servidor en el resultado de parsear el puerto desde el argumento
app.listen(process.env.PORT || 3000 , () =>{
    console.log('Servidor funcionando' );
});

// Se definen rutas y respuestas en el mismo script (recordar que esto puede modularizarse)

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

