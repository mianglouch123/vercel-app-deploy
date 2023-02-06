const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
const app = express();

app.use(cors({origin:"*"}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

const PORT = 3000;

app.listen(PORT,()=>{
    console.log('server is started in port:3000');

});

app.get('/',(req,res)=>{
res.send('siuuu');


})

