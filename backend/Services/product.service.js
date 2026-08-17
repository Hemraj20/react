import db from "../config/db.js";

export const createProducts = async (
  name,
  slug,
  description,
  price,
  rating,
  stock,
  discount,
  brand,
) => {
  const query =
    "INSERT INTO products (name,slug,description,price,rating,stock,discount,brand) VALUES (?,?,?,?,?,?,?,?)";

  const [result] = await db.execute(query, [
    name,
    slug,
    description,
    price,
    rating,
    stock,
    discount,
    brand,
  ]);
  return result;
};

export const getALlProducts = async () => {
  const [rows] = await db.execute("SELECT * FROM products");
  return rows;
};

export const removeProduct = async (pid) => {
  const query = "DELETE FROM products WHERE id = ?";
  const [deleted] = await db.execute(query, [pid]);
  return deleted;
};

export const updateProduct = async (
  name,
  slug,
  description,
  price,
  rating,
  stock,
  discount,
  brand,
  id,
) => {
  const query =
    "UPDATE products SET name = ?, slug=?, description = ?, price = ?, rating = ?, stock = ?, discount = ?, brand = ? WHERE id = ?";
  const updated = await db.execute(query, [
    name,
    slug,
    description,
    price,
    rating,
    stock,
    discount,
    brand,
    id,
  ]);

  return updated;
};
