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
const restaurant_1 = __importDefault(require("../models/restaurant"));
const user_1 = __importDefault(require("../models/user"));
class Controller {
    addRest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let rest = new restaurant_1.default(req.body);
                yield rest.save();
                res.status(200).json({ res: "Saved successfully" });
            }
            catch (error) {
                res.status(404).json({ res: "Error", error });
            }
        });
    }
    getRest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield restaurant_1.default.find();
                res.status(200).json({ data });
            }
            catch (error) {
                res.status(404).json({ res: "Error", error });
            }
        });
    }
    delRest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let findRest = yield restaurant_1.default.find({ idRest: req.params.idRest });
                if (findRest) {
                    let deleteRest = yield restaurant_1.default.deleteOne({ idRest: req.params.idRest });
                    res.status(200).json({ res: "Restaurant deleted from the list" });
                }
                res.status(404).json({ res: "Restaurant not found" });
            }
            catch (error) {
                res.status(404).json({ res: "Error", error });
            }
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new user_1.default(req.body);
                yield user.save();
                res.status(200).json({ res: "Added successfull", users: user });
            }
            catch (error) {
                res.status(404).json({ res: "Error", error });
            }
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield user_1.default.find();
                res.status(200).json({ res: data });
            }
            catch (error) {
                res.status(404).json({ res: "Error", error });
            }
        });
    }
    findUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.default.findOne({ username: req.params.username });
                if (user) {
                    res.status(200).json({ res: user });
                }
                res.status(400).json({ res: "User not found" });
            }
            catch (error) {
                res.status(404).json({ res: "Error", error });
            }
        });
    }
}
exports.default = new Controller();
