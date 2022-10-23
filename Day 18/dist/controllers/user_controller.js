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
exports.deleteUser = exports.updateUser = exports.findUser = exports.createUser = exports.getUser = void 0;
const user_1 = __importDefault(require("../mordels/user"));
const getUser = (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_1.default.find();
        response.json({ data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.getUser = getUser;
const createUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(request.body);
        const userData = {
            name: request.body.name,
            gmail: request.body.gmail,
            phone: request.body.phone,
        };
        console.log(userData);
        const category = new user_1.default(userData);
        const result = yield category.save();
        response.status(201).json({ message: "Created Successfully", data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.createUser = createUser;
const findUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findData = yield user_1.default.findById(request.params.id);
        response.send({ data: findData });
    }
    catch (err) {
        console.log(err);
    }
});
exports.findUser = findUser;
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.findById(request.params.id);
        users.name = request.body.name;
        users.gmail = request.body.gmail;
        users.phone = request.body.phone;
        const result = yield users.save();
        response.json({ message: "Updated Successfully!", data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateUser = updateUser;
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_1.default.findById(request.params.id);
        yield user_1.default.findByIdAndRemove(request.params.id);
        response.json({ message: "User with id " + request.params.id + " removed." });
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user_controller.js.map