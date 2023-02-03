import axios from "axios";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      key: process.env.REACT_APP_NEWS_API_KEY,
      loading: false,
      page: 1,
      total: 0,
    };
  }

  makeRequest(pageNo, setResults) {
    console.log(`Page - ${pageNo}`);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.state.key}&page=${pageNo}&pageSize=18`
      )
      .then((res) => {
        this.setState({ articles: res.data.articles });
        if (setResults) this.setState({ total: res.data.totalResults });
      })
      .catch((err) => {
        console.error("Something is wrong with API");
      });
  }

  componentDidMount() {
    this.makeRequest(this.state.page, true);
  }

  handlePreviousClick = () => {
    this.makeRequest(this.state.page - 1, false);
    this.setState({ page: this.state.page - 1 });
  };

  handleNextClick = () => {
    this.makeRequest(this.state.page + 1, false);
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row mx-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title
                      ? element.title.length >= 45
                        ? element.title.slice(0, 88)
                        : element.title
                      : ""
                  }
                  description={
                    element.description
                      ? element.description.length >= 88
                        ? element.description.slice(0, 88)
                        : element.description
                      : ""
                  }
                  newsUrl={element.url}
                  imageUrl={
                    !element.urlToImage
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
                      : element.urlToImage
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page + 1 > Math.ceil(this.state.total / 18)}
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
