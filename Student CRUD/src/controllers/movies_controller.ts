import { Request,Response } from "express";
import {
  getMovieService,
  createdMovieService,
  findMovieService,
  updateMovieService,
  deleteMovieService
} from '../services/movies_service';

export const getMovie = async (_req :Request, res:Response) => {
  getMovieService(_req,res);
};

export const createMovie = async (req :Request, res:Response) => {
  createdMovieService(req,res);
};

export const findMovie = async (req :Request, res:Response) => {
  findMovieService(req,res);
};

export const updateMovie = async (req :Request, res:Response) => {
  updateMovieService(req,res)
};

export const deleteMovie = async (req :Request, res:Response) => {
  deleteMovieService(req,res)
};