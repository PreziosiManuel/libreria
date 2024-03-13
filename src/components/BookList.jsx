import SingleBook from "./SingleBook";

const BookList = (props) => {
  return props.arrayOfBooks.map((book) => {
    return <SingleBook book={book} />;
  });
};
export default BookList;
