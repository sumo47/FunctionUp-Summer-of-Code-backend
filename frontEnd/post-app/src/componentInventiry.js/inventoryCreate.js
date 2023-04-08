import React, { useEffect, useState } from "react";
import { Button, Form, Table, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./inventory.css"
import Sidebar from "../componentBilling.js/sideBar";
import jwt_decode from 'jwt-decode';
function Inventory(){
    const [brandName,setBrandName]=useState("")
    const [itemName,setItemName]=useState("")
    const [itemQuantity,setItemQuantity]=useState("")
    const [id,setId]=useState("")
    let navigate=useNavigate()

    useEffect(()=>{
      let token=localStorage.getItem("token")
      const decodedToken = jwt_decode(token);
      setId(decodedToken.id)

    },[])
  
    const HandleSubmit=(e)=>{
        e.preventDefault()
        let token=localStorage.getItem("token")

        let data={
            brandName:brandName,
            itemName:itemName,
            itemQuantity:itemQuantity,
            organisationId:id
        }
        axios.post("http://localhost:3001/createInventory",data,{ headers: { "token": token } }).then((e)=>navigate("/inventoryhome"))
    }

    return(

      <div>    <div className='sidebar'>
      <Sidebar/>
    </div>
        <div  className="main-content">


        <Card className="inventory"  >
            <h1 className="header">Manage Inventory </h1>
            <Form onSubmit={HandleSubmit}>
            <Form.Group controlId="customerName"  className="mb-3">
            <Form.Label style={{color:"black"}}>Brand Name</Form.Label>
            <Form.Control

              type="text"
              style={{ width: "50%" }}
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              required={true}
            />
            </Form.Group>


            
            <Form.Group controlId="customerName" className="mb-3">
            <Form.Label style={{color:"black"}}>Item Name</Form.Label>
            <Form.Control
              className="input"
              type="text"
              style={{ width: "50%" }}
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required={true}
            />
          </Form.Group>


          <Form.Group controlId="customerName" className="mb-3">
            <Form.Label style={{color:"black"}}>Item Quantity</Form.Label>
            <Form.Control
              className="input"
              type="text"
              style={{ width: "50%" }}
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
              required={true}
            />
          </Form.Group>

          <Button type="submit" className="classbutton" >
              Submit
            </Button>

            </Form>
        </Card>
        </div>
        </div>
    )
}
export default Inventory