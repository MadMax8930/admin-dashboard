"use server";

import { User, Product } from './models'
import { connectToDB } from './connect'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { signIn } from '../auth/credentials'
import bcrypt from 'bcrypt'

export const addUser = async (formData) => {
   const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

   try {
      connectToDB();

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
         username,
         email,
         password: hashedPassword,
         phone,
         address,
         isAdmin,
         isActive,
      });

      await newUser.save();
   } catch (err) {
      console.log(err);
      throw new Error('Failed to create user!')
   }

   revalidatePath('/dashboard/users');
   redirect('/dashboard/users');
};

export const addProduct = async (formData) => {
   const { title, desc, price, stock, color, size } = Object.fromEntries(formData);

   try {
      connectToDB();
      
      const newProduct = new Product({
         title,
         desc,
         price,
         stock,
         color,
         size,
      });

      await newProduct.save();
   } catch (err) {
      console.log(err);
      throw new Error('Failed to create product!')
   }

   revalidatePath('/dashboard/products');
   redirect('/dashboard/products');
};

export const updateUser = async (formData) => {
   const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

   try {
      connectToDB();

      const existingUser = await User.findById(id);

      const updateFields = {
         username,
         email,
         password,
         phone,
         address,
         isAdmin,
         isActive,
      };

      Object.keys(updateFields).forEach(
         (key) => 
            (updateFields[key] === '' ||
             updateFields[key] === undefined || 
             updateFields[key] === existingUser[key]
            ) && delete updateFields[key]
      );

      await User.findByIdAndUpdate(id, updateFields);
   } catch (err) {
      console.log(err);
      throw new Error('Failed to update user!')
   }

   revalidatePath('/dashboard/users');
   redirect('/dashboard/users');
};

export const updateProduct = async (formData) => {
   const { id, title, desc, price, stock, color, size } = Object.fromEntries(formData);

   try {
      connectToDB();

      const existingProduct = await Product.findById(id);

      const updateFields = {
         title,
         desc,
         price,
         stock,
         color,
         size,
      };

      Object.keys(updateFields).forEach(
         (key) => 
            (updateFields[key] === '' ||
             updateFields[key] === undefined || 
             updateFields[key] === existingProduct[key]
            ) && delete updateFields[key]
      );

      await Product.findByIdAndUpdate(id, updateFields);
   } catch (err) {
      console.log(err);
      throw new Error('Failed to update product!')
   }

   revalidatePath('/dashboard/products');
   redirect('/dashboard/products');
};

export const deleteUser = async (formData) => {
   const { id } = Object.fromEntries(formData);

   try {
      connectToDB();

      await User.findByIdAndDelete(id);
   } catch (err) {
      console.log(err);
      throw new Error('Failed to delete user!')
   }

   revalidatePath('/dashboard/users');
};

export const deleteProduct = async (formData) => {
   const { id } = Object.fromEntries(formData);

   try {
      connectToDB();

      await Product.findByIdAndDelete(id);
   } catch (err) {
      console.log(err);
      throw new Error('Failed to delete product!')
   }

   revalidatePath('/dashboard/products');
};

export const authenticateUser = async (formData) => {
   const { username, password } = Object.fromEntries(formData);

   try {
      await signIn("credentials", { username, password, redirect: false });
   } catch (err) {
      return { error: 'Wrong Credentials!' };
   }

   redirect('/dashboard');
};