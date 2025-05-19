const express = require('express');
const app = express();
const port = 3000;

app.get('/travel', (req, res) => {
  res.send('Hochu poehat na gavai, no budu sidet doma');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log('Server is running and ready to accept requests');
});
