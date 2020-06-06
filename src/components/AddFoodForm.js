import React from 'react';

const initialState = {
  name: "",
  calories: 0,
  image: ""
}

class AddFoodForm extends React.Component {

  state = initialState

  changeHandler = (event) => {
    let inputValue = event.target.value // 999
    let inputName = event.target.name // "calories"

    // let obj = {}
    // obj[inputName] = inputValue // { calories: 999 }
    // this.setState(obj)

    this.setState({
      [inputName]: inputValue
    })
  }

  submitHandler = (event) => {
    event.preventDefault()

    let newFood = this.state // { calories: 999, name: "Broccoli", image: "..." }

    this.props.addFoodCallback(newFood) // this is the way to 

    this.setState(initialState)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler}></input>
          <input name="calories" type="number" placeholder="Calories" value={this.state.calories} onChange={this.changeHandler}></input>
          <input name="image" placeholder="Image" value={this.state.image} onChange={this.changeHandler}></input>
          <button>Add !</button>
        </form>
      </div>
    );
  }

}

export default AddFoodForm;
