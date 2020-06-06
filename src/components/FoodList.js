import React from 'react';

import foods from '../foods.json'

import FoodBox from './FoodBox'
import AddFoodForm from './AddFoodForm';
import SearchBar from './SearchBar';

class FoodList extends React.Component {

  state = {
    foods: foods,
    formShown: false,
    searchTerm: ""
  }

  addFoodHandler = (food) => {
    this.setState({
      foods: this.state.foods.concat(food),
      formShown: false
    })
  }

  showForm = (event) => {
    this.setState({
      formShown: true
    })
  }

  searchHandler = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm // "L" -> "La" 
    })
  }

  render() {

    let filteredFoods = this.state.foods.filter((food) => food.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <div>
        <div><SearchBar onSearchCallback={this.searchHandler} currentSearchTerm={this.state.searchTerm}></SearchBar></div>
        {this.state.formShown ? <AddFoodForm addFoodCallback={this.addFoodHandler}></AddFoodForm> : <button onClick={this.showForm}>Show the form!</button>}
        <div>
          {filteredFoods.map((food) => <FoodBox key={food.name} food={food}></FoodBox>)}
        </div>
      </div>
    );
  }

}

export default FoodList;
