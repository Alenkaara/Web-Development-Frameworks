const express = require('express');
const app = express();
const port = 4000;
const productData = require('./data.json');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser());
app.use(cors());

// let newItem = { id: 13, image: "a", ...req.body };
// productData.push(newItem);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
  res.json(productData);
});

app.post('/products', (req, res) => {
  let lastId = productData.items[productData.items.length -1].id;
  let newObj = {id: ++lastId, ...req.body}
  productData.items.push(newObj);
  res.json(productData)
});

app.delete('/products/:id', (req, res) => {
  let index = productData.items.findIndex(i => i.id == req.params.id);
  if(index !== -1) {
    productData.items.splice(index, 1);
    res.send("Delete");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
