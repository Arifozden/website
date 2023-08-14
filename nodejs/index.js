const express = require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));
const data = [
    {id:1, name :"iphone 14", price : 30000, isActive : true, imageUrl : "1.jfif" },
    {id:2, name :"iphone 15", price : 40000, isActive : true, imageUrl : "2.jfif" },
    {id:3, name :"iphone 16", price : 50000, isActive : true, imageUrl : "3.jfif" },
]

app.use("/products/:id", function(req, res){
    const product = data.find(p => p.id == req.params.id);
    res.render("product-details", product);
});

app.use("/products", function(req, res){
    res.render("products", {
        products : data
    });
});

app.use("/", function(req, res){
    res.render("index");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});