import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/:_id', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params._id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found333' });
  }
});
app.get('/api/products/:_id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params._id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found222' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});


// import express from 'express';
// import data from './data.js';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('connected to db');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const app = express();

// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

// app.get('/api/products/:_id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params._id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
