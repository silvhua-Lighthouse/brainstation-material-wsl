import express from 'express';
const router = express.Router();

const soups = [
  'minestrone', 'chicken noodle', 'egg drop'
]

const salads = [
  'green salad', 'papaya salad', 'cobb salad'
]


router.get('/soups', (req, res, next) => {
  res.json(soups);
})
router.get('/salads', (req, res, next) => {
  res.json(salads);
})


export default router;