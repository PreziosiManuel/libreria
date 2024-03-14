import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

// const BookList = (props) => {
//   return props.arrayOfBooks.map((book) => {
//     return <SingleBook key={book.asin} book={book} />;
//   });
// };
// export default BookList;

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col className="text-center col-8 my-3">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-3 mt-3 ">
          {this.props.arrayOfBooks
            .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
            .map((b) => (
              <Col className=" d-flex justify-content-center" key={b.asin}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}
export default BookList;
