import React from "react";
import axios from "axios";
import "./ApiSearch.css";
import CardView from "../cardView/cardView";

class ApiSearchCB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: [],
      searchedObjects: [],
      detailDataS: {
        name: "",
        image: "",
        ageRating: "",
        averageRating: "",
        ratingRank: "",
        createdAt: "",
        description: "",
        episodeCount: "",
      },
    };
  }
  detailData = {
    name: "",
    image: "",
    ageRating: "",
    averageRating: "",
    ratingRank: "",
    createdAt: "",
    description: "",
    episodeCount: "",
  };
  handelContent = (e) => {
    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].attributes.slug === e.target.value) {
        this.detailData.name = this.state.data[i].attributes.canonicalTitle;
        this.detailData.image = this.state.data[i].attributes.posterImage.tiny;
        this.detailData.ageRating = this.state.data[i].attributes.ageRating;
        this.detailData.averageRating = this.state.data[
          i
        ].attributes.averageRating;
        this.detailData.ratingRank = this.state.data[i].attributes.ratingRank;
        this.detailData.createdAt = this.state.data[i].attributes.createdAt;
        this.detailData.description = this.state.data[i].attributes.description;
        this.detailData.episodeCount = this.state.data[
          i
        ].attributes.episodeCount;
      }
    }
    this.setState({
      detailDataS: this.detailData,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      data: [],
      searchedObjects: [],
      detailDataS: {
        name: "",
        image: "",
        ageRating: "",
        averageRating: "",
        ratingRank: "",
        createdAt: "",
        description: "",
        episodeCount: "",
      },
    });
    axios
      .get("https://kitsu.io/api/edge//anime?filter[text]=" + this.state.search)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            data: res.data.data,
          });
          for (var i = 0; i < 10 && i < this.state.data.length; i++) {
            this.setState({
              searchedObjects: this.state.searchedObjects.concat(
                <option key={i} value={this.state.data[i].attributes.slug}>
                  {this.state.data[i].attributes.canonicalTitle}
                </option>
              ),
            });
          }
          var z = {
            target: { value: this.state.data[0].attributes.slug },
          };
          this.handelContent(z);
        } else {
          this.setState({
            data: [],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {this.state.data.length > 0 && (
          <div className="border1" style={{ marginTop: "-200px" }}>
            <p>your search options for : {this.state.search}</p>
            <select className="dropdown" onChange={this.handelContent}>
              {this.state.searchedObjects}
            </select>
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              onChange={(e) => this.setState({ search: e.target.value })}
              placeholder="Search"
            />
            <button className="searchButton" type="submit">
              <i className="material-icons">search</i>
            </button>
          </div>
        </form>
        {this.state.data.length > 0 && (
          <div className="border">
            <CardView info={this.state.detailDataS} />
          </div>
        )}
      </div>
    );
  }
}
export default ApiSearchCB;
