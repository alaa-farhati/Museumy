const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const datauser = require('../server/database/userconn');
const dataorders = require('../server/database/orderconn');

// for Users
app.get('/users', datauser.getAll);
app.get('/users/:username', datauser.getOne);
app.post('/users', datauser.addOne);
app.put('/users/:username', datauser.updateOne);
app.delete('/users/:username', datauser.deleteOne);

// for Orders
app.get('/orders', dataorders.getAll);
app.get('/orders/:painter', dataorders.getOne);
app.post('/orders', dataorders.addOne);
app.put('/orders/:painter', dataorders.updateOne);
app.delete('/orders/:customer_id', dataorders.deleteOne);
app.get('/orders/name/:imagename', dataorders.getOneByName);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});