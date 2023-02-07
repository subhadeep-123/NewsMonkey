import axios from "axios";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      key: process.env.REACT_APP_NEWS_API_KEY,
      loading: false,
      page: 1,
      total: 0,
    };
    document.title =
      this.capitalizeString(this.props.category) + " - NewsMonkey";
  }

  capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async makeRequest(pageNo, setResults, concatenate = false) {
    this.setState({ loading: true });
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.key}&page=${pageNo}&pageSize=${this.props.pageSize}`
      )
      .then((res) => {
        this.setState({
          articles: concatenate
            ? this.state.articles.concat(res.data.articles)
            : res.data.articles,
          loading: false,
        });
        if (setResults) this.setState({ total: res.data.totalResults });
      })
      .catch((err) => {
        console.error(`Something is wrong with API - ${err}`);
      });
  }

  componentDidMount() {
    this.makeRequest(this.state.page, true);
  }

  fetchMore = () => {
    this.makeRequest(this.state.page + 1, false, true);
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "3px 0px" }}>
          NewsMonkey - {this.capitalizeString(this.props.category)} Top
          Headlines
        </h2>
        {this.state.loading && <Loader />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMore}
          hasMore={this.state.articles.length !== this.state.total}
          loader={<Loader />}
        >
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
                    author={!element.author ? "Unknown" : element.author}
                    publishTime={new Date(
                      Date.parse(element.publishedAt)
                    ).toGMTString()}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
