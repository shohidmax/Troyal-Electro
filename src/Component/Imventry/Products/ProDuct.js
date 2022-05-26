// import { Button } from 'bootstrap';
import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Products.css';

const ProDuct = ({
  BarCode,
  img,
  sup,
  name,
  style,
  stock,
  price,
  discription,
  id,
  button,
}) => {
  

  return (
    <div className="col-md-4 bg-sucess">
      <Card className="mb-2 shadow-lg hover card text-white bg-secondary mb-3" style={{ width: "19rem" }}>
        <Card.Img
          style={{ width: "100%", height: "350px" }}
          variant="top"
          src={img}
        />
        <Card.Body >
          <Card.Title>
            {sup} {style}
          </Card.Title>
          <Card.Text>{discription}</Card.Text> 
        </Card.Body>
        <ListGroup className=" list-group-flush">
          <ListGroupItem className="text-start text-white bg-secondary">Product Catagory : {name}</ListGroupItem>
          <ListGroupItem className="text-start text-white bg-secondary">Price : {price}</ListGroupItem>
          <ListGroupItem className="text-start text-white bg-secondary">Supplier : {sup} ltd.</ListGroupItem>
          <ListGroupItem className="text-start text-white bg-secondary">Stock : {stock}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link to={`/inventory/${id}`}>
            <Button variant="primary">Update</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProDuct;
