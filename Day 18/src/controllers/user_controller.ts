import {  Response } from "express";
import user from "../mordels/user"

export const getUser = async (_request :any, response:Response) => {
  try {
    const result = await user.find();
    response.json({ data: result });
  } catch (err) {
    console.log(err)
  }
};

export const createUser = async (request :any, response:Response) => {
  try {
   console.log(request.body)
    const userData = {
      name: request.body.name,
      gmail: request.body.gmail,
      phone: request.body.phone,
    }
    console.log(userData)
    const category = new user(userData);
    const result = await category.save();
    response.status(201).json({ message: "Created Successfully", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const findUser = async (request :any, response:Response) => {
  try {
    const findData = await user.findById(request.params.id)
    response.send({ data: findData })
  } catch (err) {
    console.log(err)
  }
};

export const updateUser = async (request :any, response:Response) => {
  try {
    const users:any = await user.findById(request.params.id)
    users.name = request.body.name;
    users.gmail = request.body.gmail;
    users.phone =request.body.phone;
    const result = await users.save();
    response.json({ message: "Updated Successfully!", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const deleteUser = async (request :any, response:Response) => {
  try {
    await user.findById(request.params.id);
    await user.findByIdAndRemove(request.params.id);
    response.json({ message: "User with id " + request.params.id + " removed." })
  } catch (err) {
    console.log(err)
  }
};