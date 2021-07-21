import React from "react"
import Text from "./Text";
import SearchBar from "./SearchBar";
import Lijst from "./Lijst";
import "./App.css";

class App extends React.Component {

  state = {movies: ""}

  movieList = ["Climbing", "Adventure", "Series"];
  data = this.movieList.map(movie =>  {
    return <Lijst title={movie} />
  });

  searching = (searchWord) => {
      let filteredMovies = this.movieList.filter(title => {
      return title.search(searchWord) !== -1;
    }).map(movie => {
        return <Lijst title={movie} />
    });
    this.setState({movies: filteredMovies});
  }

  componentDidMount(){
      this.setState({movies: this.data});
  }

  render(){
    return (
            <div class="app">
              <SearchBar code={this.searching}/>
              {this.state.movies}
            </div>
          );
  }
  }


export default App;

//De onderstaande code betekend: We maken een variable aan genaamd app, deze
//bestaat uit de code <p>Hello World</p> etc..
//De laatste regel betekend dat als App geimporteerd wordt er deze variable
//mee wordt bedoeld.

//   const App = () => {
//     return <p>Hello World!</p>;
//   }
//   export default App;



//   const App = () => {
//   return (
//           <div>
//             <Text name="Kevin"/>
//             <Text />
//           </div>
//           );
//  }
