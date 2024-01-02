const Product = require('../models/Product');
const Category = require('../models/Category');

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
    const categorySlug = req.query.categories;
    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};

    if (categorySlug) {
      filter = { category: category._id };
    }

    const products = await Product.find(filter); // Corrected this line
    const categories = await Category.find({});
    res.status(200).render('products', {
      products,
      categories,
      page_name: 'products'
    });
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