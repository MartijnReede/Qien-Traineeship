import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {

  // Een state is een waarde die continu kan veranderen. De waarde die veranderd
  // willen we opslaan in een variabele. Deze variabele noemen we hier searchWord.

  state = {searchWord: ""};

  change = (event) => {
    this.setState({searchWord: event.target.value});
  }

  // preventDefault wordt gebruikt zodat de pagina niet opnieuw refreshed als
  // je op enter drukt.
  search = (event) => {
    event.preventDefault();
    this.props.code(this.state.searchWord);
  }

  render(){
    return (
            <form onSubmit={this.search}>
                <input onChange={this.change} type="text" placeholder="Find your movie here!"/>
            </form>
            );
    }
  }

export default SearchBar;
