import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {

  const {id}=useParams();

  const navigate=useNavigate();

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

      useEffect(()=>{
        const fetchEmployee= async()=>{
          try {
            const response= await fetch(`http://localhost:8080/api/employee/${id}`);
            const data= await response.json();
            setFormData(data);
          } catch (error) {
            console.error("Error Fetching User : ", error.message);
          }
        }

        fetchEmployee();
      }, [id]);

      const handleSubmit = async (e)=>{
          e.preventDefault();

          try {
            
            const response =await fetch(`http://localhost:8080/api/employee/${id}`,{
              method: 'PATCH',
              headers:{
                "Content-Type" : "application/json"
              },
              body: JSON.stringify(formData),
            });

            const data=await response.json();
            console.log("User Updated : ", data)

            navigate(`/`)

          } catch (error) {
            console.error("Error Updating User : ", error.message);
          }
      }

  return (
    
   <div className="center-form">
      <h1>Update Employee</h1>

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
          Update Employee
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
  )
}

export default UpdateEmployee
