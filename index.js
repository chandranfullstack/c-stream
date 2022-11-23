const express = require("express")
const app = express();
const cors = require('cors');
const path = require('path')
var bodyParser = require('body-parser')
const mongoose =require('mongoose')
const cookieParser=require("cookie-parser");
const  dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const UserLogin = require('./routes/lognin');
const User=require('./routes/user');
const Admin=require('./routes/admin');
const erorHandler =require('./errorHandler');


app.use(express.static(path.join(__dirname, 'client/build')));



mongoose.connect(process.env.db_url,  { useNewUrlParser: true, useUnifiedTopology: true,
  })


app.get('/th', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
  });







app.use(cookieParser());
app.use(cors());
app.use(express.json())
app.use("/login",UserLogin);
app.use("/user",User);
app.use("/admin",Admin)
app.use(erorHandler);




app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port 3001.`);
  });
  