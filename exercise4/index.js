console.log('Exercise 4 Web Development');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());
///////////////////////////////////////////////////////////////////////////////////////////////////////////
let Product = [{
    id: uuidv4(),
    name: 'G305 wireless mouse',
    manufacturer: 'Logitech',
    category: 'Mice',
    description: 'A wireless mouse',
    price: '35.99€'
}];

let User = [{
    id: uuidv4(),
    firstName: 'Mauno',
    lastName: 'Väinämöinen',
    address: 'Jylväskuja 5', 
    age: '32',
}];

let Invoice = [{
    id: uuidv4(),
    buyer: 'Mauno',
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

app.post('/products/add', (req, res) => {
    console.log('Creating a new product');
    console.log(req.body);

    Product.push ({
      id: uuidv4(),
      name: req.body.name,
      manufacturer: req.body.manufacturer,
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
app.get('/users', (req, res) => {
    res.json(User);
    console.log('Get all users');
});

app.post('/users/add', (req, res) => {
    console.log('Creating a new user');
    console.log(req.body);

    User.push ({
      id: uuidv4(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      age: req.body.age
    })

    res.send('New user created');
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/invoices/:buyer', (req, res) => {
    res.send('Getting all invoices of a user');
    res.json(Invoice);
});

/*app.get('/invoices/', (req, res) => {
    res.send('Getting a single invoice of a user');
});
*/

app.delete('/invoices/:id', (req, res) => {

    const result = Invoice.findIndex(i => i.id === req.params.id)
    if(result !== -1) {
      Invoice.splice(result, 1);
      res.send('Invoice deleted successfully');
    } else {
      res.send('No such invoice found');
    }  
});

app.post('/invoices/purchase', (req, res) => {
    console.log('Making a purchase');
    console.log(req.body);

    Invoice.push ({
      id: uuidv4(),
      buyer: req.body.buyer,
      products: req.body.products,
      sum: req.body.sum,
    })

    res.send('New purchase made!');
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})