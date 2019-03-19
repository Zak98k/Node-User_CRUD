const PORT = 3000;
const express = require('express');
const router = require("./router");
require("./db/mongoose");

const errorHandler = require("./utils/errorHandler");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use(router);


app.use(errorHandler);

app.use((req, res)=> {
    res.status(404).send('Sorry cant find that request!From index.js');
});

app.listen(PORT, () => console.log('Example app listening on port ' + PORT + '!'));
