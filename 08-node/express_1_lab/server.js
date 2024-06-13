// initialize Express in project
import express from 'express'
const app = express();

const ingredients = [
  'tortilla',
  'sweet potato',
  'goat cheese'
]
app.get('/famousdish', (req, res) => {
  res.send('Most famous dish: mac and cheese');
})

app.get('/ingredients', (req, res) => {
  res.json(ingredients);
})

app.get('/ingredients/:ingredient', (req, res) => {
  const ingredient = req.params.ingredient;
  if (ingredients.includes(ingredient)) {
    res.send('That ingredient is in stock') 
  } else {
    res.send('That ingredient is out of stock');
  }
})

app.post('/orders', (req, res) => {
  // res.status(500).send('We are not taking orders at this time. Our service is temporarily down');
  res.status(500);
  res.send('We are not taking orders at this time. Our service is temporarily down');
})

// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});