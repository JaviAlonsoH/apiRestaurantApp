"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const controller_1 = __importDefault(require("../controllers/controller"));
class Routes {
    constructor() {
        this.enrutador = (0, express_1.Router)();
        this.enrutador.post("/addrestaurant", (req, res) => {
            controller_1.default.addRest(req, res);
        });
        this.enrutador.get("/restaurant", (req, res) => {
            controller_1.default.getRest(req, res);
        });
        this.enrutador.post("/user", (req, res) => {
            controller_1.default.addUser(req, res);
        });
        this.enrutador.get("/users", (req, res) => {
            controller_1.default.getUsers(req, res);
        });
        this.enrutador.get("/users/:username", (req, res) => {
            controller_1.default.findUser(req, res);
        });
        this.enrutador.delete("/deleterestaurant/:idRest", (req, res) => {
            controller_1.default.delRest(req, res);
        });
    }
}
exports.Routes = Routes;
