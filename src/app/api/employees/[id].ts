import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import Employee from "@/models/Employee";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  const { id } = req.query;

  if (req.method === "GET") {
    const employee = await Employee.findById(id);
    return res.status(200).json(employee);
  }

  if (req.method === "PUT") {
    const updated = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updated);
  }

  if (req.method === "DELETE") {
    await Employee.findByIdAndDelete(id);
    return res.status(200).json({ message: "Deleted successfully" });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
