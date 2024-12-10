const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling is missing here
    console.error(error);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 1000);
  });
}