// src/app.js
import express from 'express';
import mongoose from 'mongoose';
import expressHandlebars from 'express-handlebars';
import apiRoutes from './routes/apiRoutes.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/colegio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const hbs = expressHandlebars.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/api', apiRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
