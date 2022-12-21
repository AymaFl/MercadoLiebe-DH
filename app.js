const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

/*PREGUNTAR QUE ES ÉSTO*/
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs');

let PORT = 3000

app.listen(PORT, () => {
    console.log("Serivdor corriendo en el puerto 3000")
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})
