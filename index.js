const bodyParser = require('body-parser');
const path = require('path')
const express = require('express')
const { fileURLToPath } = require('url')
const app = express()

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'))
})
app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'))
})
app.get('/nosotros.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/nosotros.html'))
})
app.get('/servicios.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/servicios.html'))
})
app.get('/comunicados.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/comunicados.html'))
})
app.get('/PQRS.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/PQRS.html'))
})
app.post('/submitPQRS', (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const mensaje = req.body.mensaje;
    const tipoPQRS = req.body.tipoPQRS;

    // Puedes hacer lo que quieras con los datos, por ahora solo los loguearemos
    console.log(`Nuevo PQRS recibido:`);
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`);
    console.log(`Email: ${email}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Mensaje: ${mensaje}`);
    console.log(`Tipo de PQRS: ${tipoPQRS}`);

    // Puedes redirigir a una página de agradecimiento o mostrar un mensaje de éxito
    res.send('Gracias por enviar tu PQRS. Nos pondremos en contacto contigo pronto.');
});
app.listen(4000, () => {
    console.log('Aplicación corriendo en el puerto 4000')
})