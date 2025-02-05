import { Category } from "../models/categoryModel.js";

export async function getCategories(req, res) {
  try {
    const categories = await Category.find({});
    if (!categories || categories.length === 0)
      return res.status(400).send({ error: "No categories found" });

    return res.send(categories);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error fetching categories", message: error.message });
  }
}
export async function addCategory(req, res) {
  try {
    const category = new Category(req.body);
    await category.save(res.status(201).send({ message: "Category Created" }));
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error adding category", message: error.message });
  }
}
