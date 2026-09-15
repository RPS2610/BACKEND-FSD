import express from 'express';
import product from "./products.json" with { type: "json" };
const app = express();
app.use(express.json());

// Store products in a variable so we can add/update/delete products
let products = product;

// GET: Fetch all products
app.get('/products', (req, res) => {

    res.json(products);

});


// GET: Fetch a single product by ID
app.get('/products/:id', (req, res) => {

    const product = products.find(
        p => p.id == req.params.id
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);

});


// POST: Create a new product
app.post('/products', (req, res) => {

    const newProduct = {

        id: products.length + 1,

        name: req.body.name,

        category: req.body.category,

        price: req.body.price,

        stock: req.body.stock,

        brand: req.body.brand,

        rating: req.body.rating

    };

    products.push(newProduct);

    res.status(201).json(newProduct);

});


// PUT: Update a product
app.put('/products/:id', (req, res) => {

    const product = products.find(
        p => p.id == req.params.id
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name;

    product.category = req.body.category;

    product.price = req.body.price;

    product.stock = req.body.stock;

    product.brand = req.body.brand;

    product.rating = req.body.rating;

    res.json(product);

});


// DELETE: Delete a product
app.delete('/products/:id', (req, res) => {

    const productExists = products.some(
        p => p.id == req.params.id
    );

    if (!productExists) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products = products.filter(
        p => p.id != req.params.id
    );

    res.json({
        message: "Product deleted successfully"
    });

});


// Start server
app.listen(8000, () => {

    console.log(
        'Server is running on http://localhost:8000'
    );

});