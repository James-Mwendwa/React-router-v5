import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Header from './components/Header';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Post from './Post';
import NotFound from './Pages/NotFound';
import { useState } from 'react';





function App() {
  
  const [logIn, setLogIn] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <button onClick={() => setLogIn(!logIn)}>
        {logIn ? "logOut" : "logIn"}
      </button>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile">
         <Profile logIn={logIn} /> 
        </Route>
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
