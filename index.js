const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3003 || process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.json());
app.use(require("./Api/user.api"))
mongoose.connect("mongodb://0.0.0.0:27017/movieApp").then(()=>
{
    console.log("db connected");
}).catch((error)=>
{
    console.log(error)
});

