import React from "react";
import "./NewsCards.css";
import { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";

let limit = 6;
// let skip = 0;

function NewsCards() {
  const [items, setItems] = useState([]);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    const dummyJsonEndPoint = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;
    // const dummyJsonEndPoint = `http://localhost:8080/news?skip=${skip}&limit=${limit}`;

    fetch(dummyJsonEndPoint)
      .then((res) => res.json())
      .then(function (data) {
        setItems(data.data);
        setItems(data.products);
      });
  }, [skip]);
  return (
    <div className="cards-comments">
      {items.map((item) => {
        return <NewsCard key={item._id} item={item} />;
      })}

      <button
        onClick={() => {
          setSkip((s) => s - limit);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setSkip((s) => s + limit);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default NewsCards;
