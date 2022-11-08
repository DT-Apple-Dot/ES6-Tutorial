import { Request,Response } from "express";
import {
  getUserService,
  createdUserService,
  findUserService,
  updateUserService,
  deleteUserService
} from '../services/user_service';

export const getUser = async (_req :Request, res:Response) => {
  getUserService(_req,res);
};

export const createUser = async (req :Request, res:Response) => {
  createdUserService(req,res);
};

export const findUser = async (req :Request, res:Response) => {
  findUserService(req,res);
};

export const updateUser = async (req :Request, res:Response) => {
  updateUserService(req,res)
};

export const deleteUser = async (req :Request, res:Response) => {
  deleteUserService(req,res)
};