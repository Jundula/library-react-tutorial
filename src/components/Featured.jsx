import React from "react";
import Book from "./ui/Book";
import {books} from "../data"

const Featured = () => {

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">books</span>
          </h2>
          <div className="books">
          {books
          .filter(caca => caca.rating ===5)
          .slice(0,4)
          .map((book) => (
          <Book
          book={book} key = {book.id}
          />))
          }
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;


