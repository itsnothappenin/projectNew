import React from "react";
import Header from "../../components/Header/Header";
import Blog from "../../components/News/Blog/Blog";
import Footer from "../../components/Footer/Footer"
import NewsCards from "../../components/News/NewsCards/NewsCards";
import "./News.css";



function News() {
  return (
    <div>
      <Header/>
      <Blog />
      <NewsCards />
      <Footer />
    </div>
  );
}

export default News;
