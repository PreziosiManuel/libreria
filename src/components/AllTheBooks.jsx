import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/generi libri/fantasy.json";

const AllTheBooks = function () {
  return (
    <>
      {fantasy.map((book) => (
        <Card id="trasform" className="px-0" key={book.id} style={{ width: "18rem" }}>
          <Card.Img style={{ height: "300px" }} variant="top" className="" src={book.img} />

          <Card.Body className="d-flex flex-column">
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Prezzo: {book.price}€</Card.Text>
            <Card.Text className="mt-auto">Categoria: {book.category}</Card.Text>
            <Button className="align-items-baseline justify-content-center" variant="primary">
              Aggiungi al carrello
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default AllTheBooks;
