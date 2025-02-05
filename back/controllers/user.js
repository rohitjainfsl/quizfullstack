import { Category } from "../models/categoryModel.js";
import { User } from "../models/userModel.js";

export async function registerUser(req, res) {
  //   console.log(req.body);
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: "User registered" });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error registering user", message: error.message });
  }
}
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
