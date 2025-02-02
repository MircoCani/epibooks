import React, { useContext } from "react";

//bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//style imports
import "./AllTheBooks.style.css";

//component imports
import SingleBook from "../SingleBook/Singlebook.component"

//utils imports
import { allUpperCase } from "../../utils/utils";

//context import
import {
  ThemeContext,
  BookContext,
} from "../../Contexts/context";
import CommentArea from "../CommentArea/CommentArea.component";

const AllTheBooks = () => {
  const theme = useContext(ThemeContext);
  const { bookList } = useContext(BookContext);

  return (
    <Container data-bs-theme={theme}>
      <Row className="g-2">
        <Col>
          <h3>{allUpperCase("Lista dei libri")}</h3>
        </Col>
      </Row>

      <Row className="g-2">
        <Col sm={9}>
          <Row className="g-2">
            {bookList.map(({ asin, ...book }) => (
              <SingleBook
                book={book}
                asin={asin}
                key={asin}
              />
            ))}
          </Row>
        </Col>
        <Col sm={3}>
          <Container className="h-100" fluid>
            <Row
              className="sticky-top"
              style={{ top: "12px" }}
            >
              <CommentArea />
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AllTheBooks;

