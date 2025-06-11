import Product from "../models/Product.js";
import { validateProduct } from "../validation/productValidation.js";

// Create a new product
export const createProduct = async (req, res) => {
  const error = validateProduct(req.body);
  if (error) return res.status(400).json({ message: error });

  try {
    const product = await Product.create(req.body);
    res.status(201).json({ message: "Product created successfully", product });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
  const error = validateProduct(req.body);
  if (error) return res.status(400).json({ message: error });

  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product updated", product: updated });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
