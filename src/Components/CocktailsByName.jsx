import React, { Component } from "react";
import axios from "axios";
import CocktailCard from "./CocktailCard";

export class CocktailsByName extends Component {
  state = {
    search: null,
    cocktails: [],
  };

  handleSearch = (event) => {
      this.setState({search: event.target.value}, () => this.getCocktailsByName())

  }

getCocktailsByName() {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.search}`)
      .then((apiRes) => {
        this.setState({cocktails: apiRes.data.drinks}, () => console.log(this.state.cocktails));
      })
      .catch((apiError) => console.log(apiError));
  }

  render() {
    return <div>
    <label htmlFor="search">Search a Cocktail recipe by name</label>
        <input type="search" name="search" onChange={this.handleSearch}></input>
        <section className="cocktail-card">
       {this.state.cocktails.length === 0 ? <div>No recipes yet</div> : this.state.cocktails.map(function(dbCocktail){
            return <CocktailCard cocktail={dbCocktail} />
        })} 
        </section>


    </div>;
  }
}

export default CocktailsByName;
