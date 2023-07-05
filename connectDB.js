const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://erfaisalabrar:hn5qwGqzkonTP4gZ@cluster0.ptsm38e.mongodb.net/', {
    dbName: "NewUser"
})
.then(()=> {
console.log('connection db succesful')
})
.catch((err)=> {
    console.log(`Error: ${err.message}`)
})