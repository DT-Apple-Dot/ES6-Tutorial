"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.findMovie = exports.createMovie = exports.getMovie = void 0;
const movies_1 = __importDefault(require("../mordels/movies"));
const getMovie = (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movies_1.default.find();
        response.json({ data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.getMovie = getMovie;
const createMovie = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(request.body);
        const movieData = {
            name: request.body.name,
            year: request.body.year,
            rating: request.body.rating,
            created_user_id: request.body.created_user_id,
        };
        console.log(movieData);
        const category = new movies_1.default(movieData);
        const result = yield category.save();
        response.status(201).json({ message: "Created Successfully", data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.createMovie = createMovie;
const findMovie = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findData = yield movies_1.default.findById(request.params.id).populate("created_user_id");
        response.send({ data: findData });
    }
    catch (err) {
        console.log(err);
    }
});
exports.findMovie = findMovie;
const updateMovie = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield movies_1.default.findById(request.params.id);
        movie.name = request.body.name;
        movie.year = request.body.year;
        movie.rating = request.body.rating;
        const result = yield movie.save();
        response.json({ message: "Updated Successfully!", data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateMovie = updateMovie;
const deleteMovie = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield movies_1.default.findById(request.params.id);
        yield movies_1.default.findByIdAndRemove(request.params.id);
        response.json({ message: "Movie with id " + request.params.id + " removed." });
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteMovie = deleteMovie;
//# sourceMappingURL=movies_controller.js.map