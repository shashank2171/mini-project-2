

import React from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar.js";
import Header from "./components/Header";
// import Dashboard from "./components/Dashboard.js";
import Cards from "./components/Cards.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "universal-cookie";
export const cookies = new Cookies();





function App() {

  
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  console.log(data);




  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/SignIn" component={SignIn} />
                <Route exact path="/History" component={History} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
// sign up on the dashboard
function SignUp (){
  return <p>Solutions that help you.</p>;
}
// sign in on the dashboard
function SignIn() {
  return <p>Solutions that help you.</p>;
}
// view history and wishlist
function History() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  return (
    <div className="search">
    <SearchBar/>
    <Cards/>
    
    </div>
  );
}
export default App;
