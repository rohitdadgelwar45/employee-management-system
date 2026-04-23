import React, { useState } from "react";
import "./postEmployee.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostEmployee = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    console.log(formData); // API call later

    try {
      const response = await fetch("http://localhost:8080/api/employee", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Employee Created : ", data);
      navigate("/");
    } catch (error) {
      console.log("Error Creating Employee : ", error.message);
    }
  };

  return (
    <div className="center-form">
      <h1>Post New Employee</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="department">
          <Form.Control
            type="text"
            name="department"
            placeholder="Enter department"
            value={formData.department}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Post Employee
        </Button>
        
        {/* <Button
          variant="secondary"
          type="button"
          className="w-100 mt-2"
          onClick={() => navigate("/")}
        >
          Test Redirect
        </Button> */}
      </Form>
    </div>
  );
};

export default PostEmployee;
