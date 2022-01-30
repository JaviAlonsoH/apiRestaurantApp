import { application, Request, Response } from "express";
import Restaurant from "../models/restaurant";
import User from "../models/user";
import config from "../config/config";

class Controller {
  public async addRest(req: Request, res: Response) {
    try {
      let rest = new Restaurant(req.body);
      await rest.save();
      res.status(200).json({ res: "Saved successfully" });
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }

  public async getRest(req: Request, res: Response) {
    try {
      let data = await Restaurant.find();
      res.status(200).json({data});
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }

  public async delRest(req: Request, res: Response) {
    try {
      let findRest = await Restaurant.find({ idRest: req.params.idRest });

      if (findRest) {
        let deleteRest = await Restaurant.deleteOne({ idRest: req.params.idRest });
        res.status(200).json({ res: "Restaurant deleted from the list" });
      }

      res.status(404).json({ res: "Restaurant not found" });
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }

  public async addUser(req: Request, res: Response) {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(200).json({ res: "Added successfull", users: user });
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }

  public async getUsers(req: Request, res: Response) {
    try {
      let data = await User.find();
      res.status(200).json({ res: data });
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }

  public async findUser(req: Request, res: Response) {
    try {
      const user = await User.findOne({ username: req.params.username });
      if (user) {
        res.status(200).json({ res: user });
      }
      res.status(400).json({ res: "User not found" });
    } catch (error) {
      res.status(404).json({ res: "Error", error });
    }
  }
}

export default new Controller();
