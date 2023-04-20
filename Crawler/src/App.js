import React from "react";
import "./App.scss";
// import Form from "./components/form.js";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";





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
    <div className="container">
      <div className="wrapper">
        <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
    </div>
  );
}
export default App;


// <form>
//   {/* Labels and inputs for form data */}
//   <label className="label">Name</label>
//   <input type="text" />
//   <label className="label">Email</label>
//   <input  type="email" />

//   <label className="label">Password</label>
//   <input type="password" />

//   <button type="submit">
//     Submit
//   </button>
// </form>
