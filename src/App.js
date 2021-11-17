import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Error404 from './pages/Error404/Error404';
import Home from './pages/Home/Home/Home';
import Products from './pages/Products/Products';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Header></Header>
                <Home></Home>
              <Footer></Footer>  
            </Route>
            <Route path="/home">
              <Header></Header>
                <Home></Home>
              <Footer></Footer> 
            </Route>
            <Route path="/dashboard">
              <Header></Header>
                <Dashboard></Dashboard>
              <Footer></Footer> 
            </Route>
            <Route path="/products">
              <Header></Header>
                <Products></Products>
              <Footer></Footer> 
            </Route>
            <Route path="*">
              <Error404></Error404>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
