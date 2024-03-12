import Card from "react-bootstrap/Card";

function MyFooter() {
  return (
    <Card className="text-center ">
      <Card.Header>Footer</Card.Header>
      <Card.Body>
        <Card.Title>Lascia una recensione se gradito</Card.Title>
        <Card.Text>Se hai bisogno di supporto segui la pagina dedicata.</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Libreria - Preziosi</Card.Footer>
    </Card>
  );
}

export default MyFooter;
