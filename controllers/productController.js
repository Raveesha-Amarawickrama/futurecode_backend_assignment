import Product from '../models/Product.js';

// CREATE a new product
export const createProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = await Product.create({ name, price, quantity });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error creating product' }); // Handle any errors that occur during creation
  }
};

// GET all products
export const getProducts = async (_req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};


// GET a single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
};


// UPDATE an existing product
export const updateProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, quantity },
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });// If no product found to update

    res.json(updatedProduct);

  } catch (err) {
    res.status(500).json({ message: 'Error updating product' }); // Handle any errors during update
  }
};


// DELETE a product by ID
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product' });
  }
};
