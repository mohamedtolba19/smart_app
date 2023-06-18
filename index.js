const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors');
const app = express()
app.use(cors())
const port = 3003 || process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.json());
app.use(require("./Api/user.api"))
mongoose.connect('mongodb+srv://mohamedtoba:tolba123@cluster0.mljgkle.mongodb.net/smartapp').then(()=>
{
    console.log("db connected");
}).catch((error)=>
{
    console.log(error)
});

