import {
  createProducts,
  getALlProducts,
  removeProduct,
  updateProduct,
} from "../Services/product.service.js";
import { generateSlug } from "../utils/generateSlug.js";
// CRUD C

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, rating, stock, discount, brand } =
      req.body;

    if (!name || !description || !price || !rating || !stock || !brand)
      return res.status(400).send("All Fields are required");

    const slug = generateSlug(name);

    const result = await createProducts(
      name,
      slug,
      description,
      price,
      rating,
      stock,
      discount,
      brand,
    );

    if (!result) return res.status(401).send("Error creating product");

    res.status(201).send("Product created successfully");
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res
        .status(409)
        .json({ message: "Product with this name already exist" });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
};

// CRUD R(GET)
export const getALlProduct = async (req, res) => {
  try {
    const result = await getALlProducts();
    if (!result) {
      return res.status(404).send("Product not found");
    }
    return res.status(200).json({ products: result });
  } catch (error) {
    res.send("something went wrong to get products", error);
  }
};

// CRUDE DELETE PRoduct
// private

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await removeProduct(id);

    res.status(200).json({ message: "Item deleted" });
  } catch (error) {
    res.send("something is wrong");
  }
};

//CRUDE UPDATE Product
// Private
export const updatedProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, price, rating, stock, discount, brand } =
      req.body;

    const slug = generateSlug(name);

    const updated = await updateProduct(
      name,
      slug,
      description,
      price,
      rating,
      stock,
      discount,
      brand,
      id,
    );

    if (updated[0].affectedRows === 0) {
      return res.json({ message: "Product updated successfully!" });
    }
    res.status(200).json({ message: "Item updated" });
  } catch (error) {
    console.log(error);
    res.send("something is wrong ");
  }
};
