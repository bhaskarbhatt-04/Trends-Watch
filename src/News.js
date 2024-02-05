import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import TopNewsItem from "./TopNewsItem";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
   
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8968855bd76c4779ba7e1897952b77ce&page=1&pageSize=${this.props.pageSize}&pageSize=${this.props.pageSize}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({ articles: data.articles, totalResults: data.totalResults });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=8968855bd76c4779ba7e1897952b77ce&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    this.setState((prevState) => ({
      page: prevState.page - 1,
      articles: data.articles,
    }));
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      const url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=8968855bd76c4779ba7e1897952b77ce&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      this.setState(() => ({
        page: this.state.page + 1,
        articles: data.articles,
        totalResults: data.totalResults,
      }));
    }
  };

  render() {
    const firstNews = this.state.articles.slice(0,1);
    const otherNews = this.state.articles.slice(1);

    return (
      <div className="container1">
        <div className="head">
        {firstNews.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <TopNewsItem className="head-item"
                  imageUrl={element.urlToImage}
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description?element.description.slice(0,120):"Description"}
                  
                  newsUrl={element.url}
                  author={element.author}
                  source={element.source.name}
                  publishedAt={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        
        <div className="row my-3">
          {otherNews.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  source={element.source.name}
                  publishedAt={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div
          className="container d-flex justify-content-between"
          style={{ marginBottom: "30px" }}
        >
          <button
            disabled={this.state.loading || this.state.page <= 1}
            type="button"
            className="btn btn-success"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-success btn1"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
