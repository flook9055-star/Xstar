const express = require('express');
const os = require('os');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/specs', (req, res) => {
  res.json({
    ram: Math.round(os.totalmem() / 1024 / 1024 / 1024) + ' GB',
    freeRam: Math.round(os.freemem() / 1024 / 1024 / 1024) + ' GB',
    cpu: os.cpus()[0].model
  });
});

app.post('/run/:action', (req, res) => {
  res.json({
    success: true,
    name: req.params.action
  });
});

app.listen(PORT, () => {
  console.log('Server running');
});
