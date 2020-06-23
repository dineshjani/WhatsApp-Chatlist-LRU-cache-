const express = require('express');
const path = require('path');
const app = express();

const port = 2039;



app.use('/public', express.static(path.join(__dirname, "public")));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.listen
app.listen(port, () => console.log(`listening on port ${port}!`));