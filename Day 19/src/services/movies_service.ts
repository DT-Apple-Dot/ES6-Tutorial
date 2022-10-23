import { Response } from "express";
import movies from "../mordels/movies";

export const getMovieService  = async (
    _req : any,
    res : Response,
    ) => {
        try {
            const result = await movies.find();
            res.json({ data: result });
          } catch (err) {
            console.log(err)
          }
}

export const createdMovieService = async (
    req : any,
    res : Response,
    ) => {
        try {
            console.log(req.body)
             const movieData = {
               name: req.body.name,
               year: req.body.year,
               rating: req.body.rating,
               created_user_id: req.body.created_user_id,
             }
             console.log(movieData)
             const category = new movies(movieData);
             const result = await category.save();
             res.status(201).json({ message: "Created Successfully", data: result })
            } catch (err) {
             console.log(err)
            }
}

export const findMovieService = async (
    req : any,
    res : Response,
) => {
    try {
        const findData = await movies.findById(req.params.id).populate("created_user_id")
        res.send({ data: findData })
      } catch (err) {
        console.log(err)
      }
}

export const updateMovieService = async (
    req : any,
    res : Response,
) => {
    try {
        const movie:any = await movies.findById(req.params.id)
        movie.name = req.body.name;
        movie.year = req.body.year;
        movie.rating =req.body.rating;
        const result = await movie.save();
        res.json({ message: "Updated Successfully!", data: result })
      } catch (err) {
        console.log(err)
      }
}

export const deleteMovieService = async (
    req : any,
    res : Response,
) => {
    try {
        await movies.findById(req.params.id);
        await movies.findByIdAndRemove(req.params.id);
        res.json({ message: "Movie with id " + req.params.id + " removed." })
      } catch (err) {
        console.log(err)
      }
}