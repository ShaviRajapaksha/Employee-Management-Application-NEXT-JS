"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Employee {
  _id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  salary: number;
}

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    axios.get("/api/employees").then((res) => setEmployees(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Employee Management</h1>
      <Link href="/add" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Employee
      </Link>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Position</th>
            <th>Department</th><th>Salary</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp._id} className="border-t">
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.position}</td>
              <td>{emp.department}</td>
              <td>${emp.salary}</td>
              <td>
                <Link href={`/edit/${emp._id}`} className="text-green-500">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
