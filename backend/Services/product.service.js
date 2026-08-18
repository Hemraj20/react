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

export const updateProduct = async (id, fields) => {
  //Get column names from the fields object eg["price","stock"]

  // [name,price]
  const columns = Object.keys(fields);

  //"hari",600
  const values = Object.values(fields);

  // [name,price]
  // e.g "price=?,stock=?'
  const setClause = columns.map((col) => `${col}=?`).join(",");
  const query = `UPDATE products SET ${setClause} WHERE id=?`;
  const [result] = await db.query(query, [...values, id]);
  return result;
};

export const generateProductBySlugServices = async (slug) => {
  const [rows] = await db.query("SELECT * FROM products WHERE slug=?", [slug]);
  return rows[0];
};
