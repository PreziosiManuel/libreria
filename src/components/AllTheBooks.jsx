import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/generi libri/fantasy.json";

const AllTheBooks = function () {
  return (
    <>
      {fantasy.map((book) => (
        <Card key={book.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body className="column">
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}€</Card.Text>
            <Card.Text>{book.category}</Card.Text>
            <Button className="mt-auto" variant="primary">
              Aggiungi al carrello
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default AllTheBooks;
