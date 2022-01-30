import { model, Schema, Document } from "mongoose";

export interface Restaurant extends Document {
  idRest: number;
  name: string;
  foodType: string;
}

const restaurantSchema = new Schema({
  idRest: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: false,
  },
});

export default model<Restaurant>("restaurant", restaurantSchema);
