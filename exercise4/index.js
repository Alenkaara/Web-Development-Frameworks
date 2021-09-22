console.log('Exercise 4 Web Development');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());
///////////////////////////////////////////////////////////////////////////////////////////////////////////
let Product = [{
    name: 'G305 wireless mouse',
    manufacturer: 'Logitech',
    category: 'Mice',
    description: 'A wireless mouse',
    price: '35.99€'
}];

let users = [{
    id: uuidv4(),
    firstName: 'Mauno',
    address: 'Jylväskuja 5', 
    age: '32',
}];

let Invoice = [{
    id: uuidv4(),
    products: '2x G305 wireless mouse',
    sum: '71.92€'
}];
////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send('Welcome to the generic e-commerce application')
})

app.get('/products', (req, res) => {
    res.json(Product);
    console.log('Get all products');
});

app.get('/products/:id', (req, res) => {
    const result = Product.find(p => p.name === req.params.name);
    console.log('Get single product');
    res.json(result);
});

app.post('/products', (req, res) => {
    console.log('Creating a new product');
    console.log(req.body);

    dogs.push ({
      id: uuidv4(),
      name: req.body.name,
      manufacturer: req.body.age,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price
    })

    res.send('New product created!');
});

app.put('/products/:name', (req, res) => {
    res.send('Modifying a product');
});

app.get('/products/:name', (req, res) => {
    const result = Product.find(p => p.name === req.params.name);
    console.log('Searching for products with name');
    res.json(result);
});

app.get('/products/:manufacturer', (req, res) => {
    const result = Product.find(p => p.name === req.params.name);
    console.log('Searching for products with name');
    res.json(result);
});

app.get('/products/:category', (req, res) => {
    const result = Product.find(p => p.name === req.params.name);
    console.log('Searching for products with name');
    res.json(result);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/Invoice/', (req, res) => {
    res.send('Getting all Invoice of a user');
});

app.get('/Invoice/', (req, res) => {
    res.send('Getting a singlke invoice of a user');
});

app.delete('/Invoice/:id', (req, res) => {

    const result = Invoice.findIndex(i => i.id === req.params.id)
    if(result !== -1) {
      Invoice.splice(result, 1);
      res.send('Invoice deleted successfully');
    } else {
      res.send('No such invoice found');
    }  
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})