const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  
    try {
      const products = await Product.find({});
      res.status(200).render('products',{
        products: products,
        page_name: 'products'
      })
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        error,
      });
    }
  };

  exports.getProduct = async (req, res) => {
  
    try {
      const product = await Product.findOne({slug: req.params.slug});
      res.status(200).render('product',{
        product,
        page_name: 'product'
      })
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        error,
      });
    }
  };