import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard';
import Error404 from './pages/Error404/Error404';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import Products from './pages/Products/Products';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/products">
              <Header></Header>
                <Products></Products>
              <Footer></Footer> 
            </Route>
            <Route path="/dashboard">
              <Header></Header>
                <Dashboard></Dashboard>
              <Footer></Footer> 
            </Route>
            <Route path="/login">
              <Header></Header>
                <Login></Login>
              <Footer></Footer> 
            </Route>
            <Route path="/register">
              <Header></Header>
                <Register></Register>
              <Footer></Footer> 
            </Route>
            <PrivateRoute path='/orderDtl/:_id'>
              <Header></Header>
                <OrderDetails></OrderDetails>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <Error404></Error404>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
