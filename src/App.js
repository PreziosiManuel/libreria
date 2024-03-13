import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import SingleBook from "./components/SingleBook";
import fantasy from "./data/generi libri/fantasy.json";
import BookList from "./components/BookList";
import horror from "./data/generi libri/horror.json";

function App() {
  return (
    <>
      <MyNav subtitle="Home" />
      <MyAlert />

      <Container fluid className="my-2">
        <Row className="justify-content-center gap-3">
          {/* <BookList arrayOfBooks={fantasy} /> */}
          <BookList arrayOfBooks={horror} />
          {/* <AllTheBooks /> */}
          {/* <SingleBook book={fantasy[0]} /> */}
          {/* <SingleBook book={horror[0]} /> */}
        </Row>
      </Container>

      <MyFooter />
    </>
  );
}

export default App;
