import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import { NewsItem } from "./NewsItem";
import { Loader } from "./Loader";

const iso = require("iso-3166-1");

export const News = (props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const { articles, setArticles } = props.articleState;

  const key = process.env.REACT_APP_NEWS_API_KEY;

  const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const makeRequest = async (pageNo, setResults, concatenate = false) => {
    props.setProgress(10);
    setLoading(true);
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${key}&page=${pageNo}&pageSize=${props.pageSize}`
      )
      .then((res) => {
        setArticles(
          concatenate ? articles.concat(res.data.articles) : res.data.articles
        );
        setLoading(false);
        props.setProgress(100);
        if (setResults) setTotal(res.data.totalResults);
      })
      .catch((err) => {
        console.error(`Something is wrong with API - ${err}`);
      });
  };

  const fetchMore = async () => {
    if (articles.length !== 0) {
      props.setProgress(0);
      await makeRequest(page + 1, false, true);
      props.setProgress(20);
      setPage(page + 1);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    document.title = capitalizeString(props.category) + " - NewsMonkey";
    makeRequest(1, true);
    // eslint-disable-next-line
  }, [props.country]);

  return (
    <div className="container my-3">
      <h2
        className="text-center"
        style={{ margin: "3px 0px", marginTop: "95px" }}
      >
        NewsMonkey - {capitalizeString(props.category)} Top Headlines (
        {iso.whereAlpha2(props.country).country})
      </h2>
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length !== total}
      >
        <div className="row mx-3">
          {articles.map((element) => {
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
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
