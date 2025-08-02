import mongoose, {Schema, Document} from "mongoose";

export interface IEmployee extends Document {
  name: string;
  email: string;
  position: string;
  department: string;
  salary: number;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true }
}, {
  timestamps: true
});

export default mongoose.models.Employee || mongoose.model<IEmployee>("Employee", EmployeeSchema);

