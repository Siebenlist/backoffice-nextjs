import { User, Product } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, users };
  } catch {
    throw new Error("Failed");
  }
};

export const fetchSingleUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);

    return user;
  } catch {
    throw new Error("Failed");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, products };
  } catch {
    throw new Error("Failed");
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);

    return product;
  } catch {
    throw new Error("Failed");
  }
};
