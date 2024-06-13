import express from 'express';
import foodRoutes from './routes/foodRoutes.js';

const app = express();

app.use('/food/soups', (req, res, next) => {
  console.log(`\n**Route "/food/soups" requested at ${Date.now()}**`);
  next();
})

const PORT = 8080;

app.use('/food', foodRoutes);
app.use('/file', express.static('public'))
app.use('/jsonfile', express.static('public/public.json'))


// start Express on port 8080
app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
  console.log('Press CTRL + C to stop server');
});