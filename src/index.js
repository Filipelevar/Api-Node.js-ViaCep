require('dotenv').config()


const cors = require('cors')
const bodyparser = require('body-parser')
const express = require('express')
const app = express();
const port = process.env.port || 3000
const routerUsers = require('./Routes/Routes')

app.use(cors({
origin: '*'
}));

app.use(bodyparser.json())
app.use('/' , routerUsers)

app.get('/' , (req,res)=>{
    res.json({
        data:'Hello World'
    })
});

app.listen(port,()=> {
    console.log('process.env')

});
