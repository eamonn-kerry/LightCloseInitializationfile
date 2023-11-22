import express from 'express';

const app = express();
const port = 3000;



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test1', (req, res) => {
  res.send('This is the first test route')
})

app.get('/test2/{var1}', (req, res) => {
  if (req.params['var1'] === 'test') {
    return res.send('Confirming test')
  }

  res.send('You fail')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})