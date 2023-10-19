const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());

// Serve static HTML files from a folder named "public"
app.use(express.static('public'));

app.get('/helloworld', function(req, res, next) {
    res.json({ msg: 'helloworld' });
});

app.listen(port, function() {
    console.log(`Web server listening on port ${port}`);
});
