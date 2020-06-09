import React from 'react';
import './App.css';
import UserCard from './components/UserCard';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "Tashby",
      user: {},
      followers: []
    }
  }


  getMyCard = () => {
    fetch(`https://api.github.com/users/tashby`)
      .then(res => res.json())
      .then(data =>{ 
        this.setState({ user: data })})
      }

      getMyFollowers = () => {
        fetch(`https://api.github.com/users/${this.state.userName}/followers`)
        .then(res => res.json())
        .then(data => this.setState({followers: data}));
      }
     

      componentDidMount = () => {
        this.getMyCard()
        this.getMyFollowers();
       }

       componentDidUpdate = (prevProps, prevState) => {
        console.log("CDU state",this.state);
        if (prevState.userName !== this.state.userName) {
          this.getMyCard();
        }
      }



  render() {
    return (
      <div className="App">
        {console.log("state", this.state)}
        <UserCard user={this.state.user} followers={this.state.followers}/>
      </div>
    );
  }
}



  export default App;