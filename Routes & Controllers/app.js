const express = require('express');
const app = express();
const products_routes = require('./routes/products');

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Namaskar Express");
})

//Middleware to set router
app.use('/api/products', products_routes);


const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}..`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();