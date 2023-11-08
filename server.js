const express = require('express')
const app = express();
var cors = require('cors')
// const dotenv = require('dotenv').config()

//Middleware
app.use(express.json())
app.use(cors());

//Routes
const userRoute = require('./Routes/userRoutes')
app.use('/api/users',userRoute)
app.get('/', ()=> console.log('API is set'))

//DB Connection
require('./connectDB')

//Server
const PORT = 6400
app.listen(PORT , ()=> console.log(`server is running on ${PORT}`))

