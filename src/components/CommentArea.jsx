import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
    reservations: [],
    isLoading: true,
    isError: false,
  };

  handleCardClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  fetchBooks = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYzMTFhMDcxYWZhZjAwMTkxNTY2ZWYiLCJpYXQiOjE3MTA0Mjg1NzYsImV4cCI6MTcxMTYzODE3Nn0.P9iro7jpWRHV5ciBePMfX4Cl20zYvs-Y5pGNs037EVI",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((reservationsFromAPI) => {
        this.setState({
          reservations: reservationsFromAPI,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    const { id, img, title, price, category } = this.props.book;
    const cardStyle = this.state.selected ? { border: "2px solid red" } : {};

    return (
      <>
        <Card id="transform" className="px-0" key={id} style={{ width: "18rem", ...cardStyle }}>
          <Card.Img onClick={this.handleCardClick} style={{ height: "300px" }} variant="top" src={img} />

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
        {this.state.selected && <CommentArea />}
      </>
    );
  }
}

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    // Simulazione del recupero dei commenti
    setTimeout(() => {
      const mockComments = [
        { id: 1, text: "Commento 1" },
        { id: 2, text: "Commento 2" },
        { id: 3, text: "Commento 3" },
      ];
      this.setState({ comments: mockComments, isLoading: false });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3>Commenti:</h3>
        {this.state.isLoading ? (
          <p>Caricamento...</p>
        ) : this.state.comments.length > 0 ? (
          <ul>
            {this.state.comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        ) : (
          <p>Nessun commento disponibile.</p>
        )}
      </div>
    );
  }
}

export default SingleBook;
