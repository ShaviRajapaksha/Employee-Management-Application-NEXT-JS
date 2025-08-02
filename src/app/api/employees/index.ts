import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import Employee from "@/models/Employee";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "GET") {
    const employees = await Employee.find();
    return res.status(200).json(employees);
  }

  if (req.method === "POST") {
    const newEmployee = await Employee.create(req.body);
    return res.status(201).json(newEmployee);
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
