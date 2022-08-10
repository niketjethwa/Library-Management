const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Library_Management',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
   console.log('Connection Successful!') 
}).catch((err) => {
    console.log('Connection Failed')
});
