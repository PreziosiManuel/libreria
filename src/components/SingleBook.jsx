import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleCardClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { id, img, title, price, category } = this.props.book;
    const cardStyle = this.state.selected ? { border: "2px solid red" } : {};

    return (
      <Card
        onClick={this.handleCardClick}
        id="transform"
        className="px-0"
        key={id}
        style={{ width: "18rem", ...cardStyle }}
      >
        <Card.Img style={{ height: "300px" }} variant="top" src={img} />

        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="mt-auto ">Categoria: {category}</Card.Text>
          <Card.Text className="">Prezzo: {price}€</Card.Text>
          <Button
            className="align-items-baseline justify-content-center"
            variant="primary"
            onClick={(e) => {
              e.stopPropagation();
              // Aggiungi qui la logica per l'aggiunta al carrello
            }}
          >
            Aggiungi al carrello
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

// const SingleBook = (props) => {
//   return (
//     <Card id="transform" className="px-0" key={props.book.id} style={{ width: "18rem" }}>
//       <Card.Img style={{ height: "300px" }} variant="top" className="" src={props.book.img} />

//       <Card.Body className="d-flex flex-column">
//         <Card.Title>{props.book.title}</Card.Title>
//         <Card.Text>Prezzo: {props.book.price}€</Card.Text>
//         <Card.Text className="mt-auto">Categoria: {props.book.category}</Card.Text>
//         <Button className="align-items-baseline justify-content-center" variant="primary">
//           Aggiungi al carrello
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };
// export default SingleBook;
