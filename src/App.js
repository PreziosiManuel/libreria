import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav subtitle="Home" />
      <MyAlert />

      <Container fluid className="my-2">
        <Row className="justify-content-center gap-2">
          <AllTheBooks />
        </Row>
      </Container>

      <MyFooter />
    </>
  );
}

export default App;
