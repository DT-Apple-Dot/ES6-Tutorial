import { Response } from "express";
import user from "../mordels/user";

export const getUserService  = async (
    _req : any,
    res : Response,
    ) => {
        try {
            const result = await user.find();
            res.json({ data: result });
          } catch (err) {
            console.log(err)
          }
}

export const createdUserService = async (
    req : any,
    res : Response,
    ) => {
    try {
        console.log(req.body)
         const userData = {
           name: req.body.name,
           gmail: req.body.gmail,
           phone: req.body.phone,
         }
         console.log(userData)
         const category = new user(userData);
         const result = await category.save();
         res.status(201).json({ message: "Created Successfully", data: result })
       } catch (err) {
         console.log(err)
       }
}

export const findUserService = async (
    req : any,
    res : Response,
) => {
    try {
        const findData = await user.findById(req.params.id)
        res.send({ data: findData })
      } catch (err) {
        console.log(err)
      }
}

export const updateUserService = async (
    req : any,
    res : Response,
) => {
    try {
        const users:any = await user.findById(req.params.id)
        users.name = req.body.name;
        users.gmail = req.body.gmail;
        users.phone = req.body.phone;
        const result = await users.save();
        res.json({ message: "Updated Successfully!", data: result })
      } catch (err) {
        console.log(err)
      }
}

export const deleteUserService = async (
    req : any,
    res : Response,
) => {
    try {
        await user.findById(req.params.id);
        await user.findByIdAndRemove(req.params.id);
        res.json({ message: "User with id " + req.params.id + " removed." })
      } catch (err) {
        console.log(err)
      }
}