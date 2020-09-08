const Product = require('../models/product');

exports.getAddProduct = (req, res, next)=>{
    res.render('add-product', {
        pageTitle : 'Add product',
        path: '/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });   
};

exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next)=>{
    const products = Product.fetchAll();
    res.render('shop', {
       products: products,
       pageTitle: 'Shop',
       path: '/',
       hasProducts: products.length > 0,
       activeShop: true,
       productCSS: true 
    });
};