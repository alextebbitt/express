# Project Title

exercises with Express

## Description

With The bridge bootcamp we are learning about Express. these were the exercises we had to do after our lesson. 

## Getting Started

Exercise 1:
Crear un archivo con el nombre e1.js
Levantar un servidor utilizando Express, al levantar el servidor tiene que mostrar un mensaje que diga: 
`Servidor levantado en el puerto ${puerto}`.

const express = require("express");
const app = express();
const port = 3000

app.listen(port, (req,res) => {
    console.log(`Servidor levantado en el puerto ${port}`)
    
});



Exercise 2:

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, (req, res) => {
  console.log(`Servidor levantado en el puerto ${port}`);
});

//Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida

app.get("/", (req, res) => {
  res.send("Hello, welcome");
});

// Ruta: Productos, Método: get, Acción: Mostrar un mensaje que diga: listado de productos

app.get("/Productos", (req, res) => {
  res.send("listado de productos");
});

//Ruta: Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.post("/Productos", (req, res) => {
  res.send("crear un producto");
});

// Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put("/Productos", (req, res) => {
  res.send("actualizar un producto");
});
// Ruta: Productos, Método: delete, Acción: Mostrar un mensaje que diga: borrar un producto
app.delete("/Productos", (req, res) => {
  res.send("borrar un producto");
});
// Ruta: Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get("/Usuarios", (req, res) => {
  res.send("listado de usuarios");
});

// Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post("/Usuarios", (req, res) => {
  res.send("crear un usuario");
});

// Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
app.put("/Usuarios", (req, res) => {
  res.send("actualizar un usuario");
});

// Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un usuario
app.delete("/Usuarios", (req, res) => {
  res.send("borrar un usuario");
});

// Utilizar Postman para probar todos los llamados

### Dependencies


## Authors