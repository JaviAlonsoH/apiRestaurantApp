import { Router } from "express";
import Controller from "../controllers/controller";
import { Request, Response, application } from "express";

export class Routes {
  enrutador: Router;

  constructor() {
    this.enrutador = Router();
    this.enrutador.post("/addrestaurant", (req: Request, res: Response) => {
      Controller.addRest(req, res);
    });
    this.enrutador.get("/restaurant", (req: Request, res: Response) => {
      Controller.getRest(req, res);
    });
    this.enrutador.post("/user", (req: Request, res: Response) => {
      Controller.addUser(req, res);
    });
    this.enrutador.get("/users", (req: Request, res: Response) => {
      Controller.getUsers(req, res);
    });
    this.enrutador.get("/users/:username", (req: Request, res: Response) => {
      Controller.findUser(req, res);
    });
    this.enrutador.delete(
      "/deleterestaurant/:idRest",
      (req: Request, res: Response) => {
        Controller.delRest(req, res);
      }
    );
  }
}
