const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); //para que express entienda el req.body como objeto json
// const members = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john@gmail.com",
//     status: "active",
//   },
//   {
//     id: 2,
//     name: "Bob Williams",
//     email: "bob@gmail.com",
//     status: "inactive",
//   },
//   {
//     id: 3,
//     name: "Shannon Jackson",
//     email: "shannon@gmail.com",
//     status: "active",
//   },
// ];

//
const objeto = {
  description: "Productos",
  items: [
    { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
    { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
    { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
    { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
    { id: 5, nombre: "Skin Valorant", precio: 120 },
    { id: 6, nombre: "Taza de Star Wars", precio: 220 },
  ],
};
// Al llamar a localhost:3000/products se debe mostrar el siguiente JSON:
app.get("/Productos", (req, res) => {
  res.send(objeto);
});

//Crear endpoint para poder crear un producto nuevo

app.post("/", (req, res) => {
  console.log(req.body);
  const newProducto = {
    id: objeto.items.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio,
    status: "inactive",
  };
  if (!req.body.nombre || !req.body.precio) {
    res.status(400).send("Please enter all fields");
  } else {
    objeto.items.push(newProducto);
    const response = { newProducto, objeto };
    res.status(201).send(response);
  }
});

// Crear endpoint para poder actualizar un producto

app.put("/:id", (req, res) => {
  const found = objeto.items.some((objeto) => objeto.id === +req.params.id);
  if (found) {
    objeto.items.forEach((objeto) => {
      console.log(objeto.id);
      if (+req.params.id === objeto.id) {
        objeto.nombre = req.body.nombre ? req.body.nombre : objeto.nombre;
        objeto.precio = req.body.precio ? req.body.precio : objeto.precio;
        res.send(objeto);
      }
    });
  } else {
    res.status(404).send(`Product with id ${req.params.id} not found`);
  }
});

//Crear endpoint para poder eliminar un producto

app.delete("/:id", (req, res) => {
  const found = objeto.items.some((objeto) => objeto.id === +req.params.id);

  if (found) {
    const objetoFiltered = objeto.items.filter(
      (objeto) => objeto.id !== +req.params.id
    );
    res.send({
      msg: `Product with id ${req.params.id} a la porra`,
      objetoFiltered,
    });
  } else {
    res.status(404).send(`Product with id ${req.params.id} not found`);
  }
});

// Crear filtro por precio de producto
app.get("/:precio", (req, res) => {
  //con el + delante convertimos una string en un numero
  console.log(req.params);
  const found = objeto.items.some(
    (objeto) => objeto.precio === +req.params.precio
  ); // devuelve true o false
  console.log(found);
  if (found) {
    res.send(
      objeto.items.filter((objeto) => objeto.precio === +req.params.precio)
    );
  } else {
    res.status(404).send(`Product with price ${req.params.precio} not found`);
  }
});

//Crear filtro que muestre los productos con un precio entre 50 y 250.

app.get("/productos/between50-250", (req, res) => {
  console.log(req.params);
  const filteredItems = objeto.items.filter(
    (objeto) => objeto.precio > 50 && objeto.precio < 250
  ); // devuelve true o false
  if (filteredItems.length > 0) {
    res.send(filteredItems);
  } else {
    res.status(404).send(`Product with price ${req.params.precio} not found`);
  }
});

//Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto

app.get("/productos/:id([0-9]+)", (req, res) => {
  const found = objeto.items.some((objeto) => objeto.id === +req.params.id);
  if (found) {
    objeto.items.forEach((objeto) => {
      console.log(objeto.id);
      if (+req.params.id === objeto.id) {
        res.send(objeto);
      }
    });
  } else {
    res.status(404).send(`Product with id ${req.params.id} not found`);
  }
});

app.listen(port, (req, res) => {
  console.log(`Servidor levantado en el puerto ${port}`);
});
