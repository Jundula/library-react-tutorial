import React from "react";
import {books} from "../data"
import Book from "./ui/Book";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">books</span>
          </h2>
          <div className="books">
          {books
          .filter(book => book.salePrice !== null)
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

export default Discounted;
