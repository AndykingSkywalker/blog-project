const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+ '/html/index.html'));
});

app.use('/', router);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});