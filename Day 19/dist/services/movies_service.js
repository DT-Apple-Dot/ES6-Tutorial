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
exports.deleteMovieService = exports.updateMovieService = exports.findMovieService = exports.createdMovieService = exports.getMovieService = void 0;
const movies_1 = __importDefault(require("../mordels/movies"));
const getMovieService = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movies_1.default.find();
        res.json({ data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.getMovieService = getMovieService;
const createdMovieService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const movieData = {
            name: req.body.name,
            year: req.body.year,
            rating: req.body.rating,
            created_user_id: req.body.created_user_id,
        };
        console.log(movieData);
        const category = new movies_1.default(movieData);
        const result = yield category.save();
        res.status(201).json({ message: "Created Successfully", data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.createdMovieService = createdMovieService;
const findMovieService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findData = yield movies_1.default.findById(req.params.id).populate("created_user_id");
        res.send({ data: findData });
    }
    catch (err) {
        console.log(err);
    }
});
exports.findMovieService = findMovieService;
const updateMovieService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield movies_1.default.findById(req.params.id);
        movie.name = req.body.name;
        movie.year = req.body.year;
        movie.rating = req.body.rating;
        const result = yield movie.save();
        res.json({ message: "Updated Successfully!", data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateMovieService = updateMovieService;
const deleteMovieService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield movies_1.default.findById(req.params.id);
        yield movies_1.default.findByIdAndRemove(req.params.id);
        res.json({ message: "Movie with id " + req.params.id + " removed." });
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteMovieService = deleteMovieService;
//# sourceMappingURL=movies_service.js.map