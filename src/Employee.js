import React from "react";
import { useNavigate } from "react-router-dom";

export default function Employee() {
  const navigate = useNavigate();
  return (
    <div>
      Employee Details
      <button onClick={() => navigate("/employee/create")}>
        Add Employee Details
      </button>
    </div>
  );
}
