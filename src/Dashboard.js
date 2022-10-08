import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      Dashboard
      <button onClick={() => navigate("/dashboard/edit")}>Edit</button>
    </div>
  );
}
