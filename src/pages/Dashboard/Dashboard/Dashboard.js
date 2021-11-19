import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user, logOut} = useAuth();

    return (
        <div className="dashboard">
            <div className="row w-100 m-0">
                <div className="col-lg-2 col-12 nester-nav d-flex text-start flex-column">
                    <h4><FontAwesomeIcon className="me-2" icon={faUserAlt}/>{user?.displayName}</h4>
                    <NavLink style={{textDecoration: 'none'}} activeStyle={{color: "#b29466"}} to={`${url}/pay`}>
                        <span>Pay</span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeStyle={{color: "#b29466"}} to={`${url}/myOrders`}>
                        <span>My Orders</span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeStyle={{color: "#b29466"}} to={`${url}/review`}>
                        <span>Write Review</span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeStyle={{color: "#b29466"}} to={`${url}/manageOrders`}>
                        <span>Manage Orders</span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeStyle={{color: "#b29466"}} to={`${url}/manageProducts`}>
                        <span>Manage Products</span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeStyle={{color: "#b29466"}} to={`${url}/addProduct`}>
                        <span>Add Product</span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeStyle={{color: "#b29466"}} to={`${url}/makeAdmin`}>
                        <span>Make Admin</span>
                    </NavLink>
                    <button onClick={logOut} className="btn common-btn lg">Logout</button>
                </div>
                <div className="col-lg-10 col-12 p-0 nested-area">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;