import { User, Product } from "./models";
import { connectToDB } from "./connect";

export const fetchUsers = async (query, page) => {
   const regex = new RegExp(query, "i");
   const ITEM_PER_PAGE = 2;

   try {
      connectToDB();
      const count = await User.find({ username: { $regex: regex }}).count(); // total users
      const users = await User.find({ username: { $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1)); // pagination
      return { count, users };
   } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
   }
};

export const fetchProducts = async (query, page) => {
   const regex = new RegExp(query, "i");
   const ITEM_PER_PAGE = 2;

   try {
      connectToDB();
      const count = await Product.find({ title: { $regex: regex }}).count(); // total products
      const products = await Product.find({ title: { $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1)); // pagination
      return { count, products };
   } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch products!");
   }
};

export const fetchOneUser = async (id) => {
   try {
      connectToDB();
      const user = User.findById(id);
      return user;
   } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user by Id!");
   }
};

export const fetchOneProduct = async (id) => {
   try {
      connectToDB();
      const product = Product.findById(id);
      return product;
   } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch product by Id!");
   }
};