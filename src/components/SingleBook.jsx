import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleCardClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  // fetchBooks = () => {
  //   // questa funzione freccia si occuperà di recuperare con una fetch() le prenotazioni
  //   // e salvarle nello stato del componente (in this.state.reservations)
  //   fetch("https://striveschool-api.herokuapp.com/api/comments/", {
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYzMTFhMDcxYWZhZjAwMTkxNTY2ZWYiLCJpYXQiOjE3MTA0Mjg1NzYsImV4cCI6MTcxMTYzODE3Nn0.P9iro7jpWRHV5ciBePMfX4Cl20zYvs-Y5pGNs037EVI",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // la chiamata è andata bene, e possiamo aspettarci di trovare l'array
  //         // di prenotazioni nel JSON della response
  //         return response.json(); // questa è l'estrazione del JSON dalla Response, ovvero il nostro array di prenotazioni
  //       } else {
  //         // qualcosa è andato storto nella chiamata (400, 500, 502 etc.)
  //         throw new Error("Problema nella chiamata API");
  //         // mi lancio nel blocco catch()
  //       }
  //     })
  //     .then((reservationsFromAPI) => {
  //       console.log("RESERVATIONS", reservationsFromAPI);
  //       // qua tra poco le salveremo anche nello state...
  //       this.setState({
  //         reservations: reservationsFromAPI,
  //         isLoading: false,
  //       });
  //       // OGNI VOLTA che viene eseguito un this.setState(), il metodo render() viene invocato di nuovo!
  //     })
  //     .catch((error) => {
  //       console.log("ERRORE", error);
  //       this.setState({
  //         isLoading: false,
  //         isError: true,
  //       });
  //     });
  // };
  // componentDidMount() {
  //   // componentDidMount è un METODO DI LIFECYCLE
  //   // questo metodo viene eseguito in AUTOMATICO da React, quando? un istante dopo il PRIMO montaggio del componente
  //   console.log("IO SONO COMPONENTDIDMOUNT");
  //   // io qui dentro farò la mia fetch, recupererò le prenotazioni e riempirò lo stato
  //   // componentDidMount è GARANTITO essere eseguito UNA VOLTA SOLA, dopo il PRIMO render.
  //   this.fetchBooks();
  // }

  render() {
    const { id, img, title, price, category } = this.props.book;
    const cardStyle = this.state.selected ? { border: "2px solid red" } : {};

    return (
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
    );
  }
}

// export default SingleBook;

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
export default SingleBook;
