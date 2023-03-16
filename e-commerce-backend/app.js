console.log('ishop E-commerce Backend');

const express = require('express');
const cors = require("cors")
const mongoose = require('mongoose')
const menuApi = require('./routes/menu-api')
const adminApi = require('./routes/admin-api')

const app = express()
const PORT = 8181
const MONGODB_CONNECTION_STRING = "mongodb+srv://tugsoo:bunny%401928@mongodb-tugsoo.a6x20yd.mongodb.net/test";

app.use(cors())
app.use(express.json())
app.use('/menu', menuApi)
app.use('/admin', adminApi)

app.listen(PORT, () => {
    mongoose.connect(MONGODB_CONNECTION_STRING)
        .then(console.log("Database successfully connected"))
        .catch((error) => console.error(error));
    console.log(`iShop E-commerce application is running on http://localhost:${PORT}`);
})

