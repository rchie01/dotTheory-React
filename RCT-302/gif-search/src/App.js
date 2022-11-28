import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.searchResult()
  }

  searchResult = (id = '1') => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((response) => {
        this.setState({
          gifs: response.data,
          loading: false
        })
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });

    console.log(this.state.gifs)
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">PhotoSearch</h1>
            <SearchForm onSearch={this.searchResult}/>
          </div>
        </div>
        <div className="main-content">
        { this.state.loading ? <p>Loading...</p> : <GifList data={this.state.gifs} /> }
        </div>
      </div>
    );
  }
}
