import React from "react";
import Blog from "../../components/Main/News/Blog/Blog";
import NewsCards from "../../components/Main/News/NewsCards/NewsCards";
import "./News.css";

function News() {
  return (
    <div>
      <Blog />
      <NewsCards />
    </div>
  );
}

export default News;
