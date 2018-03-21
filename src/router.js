import React from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import ProductDetail from './pages/ProductDetail';
import SignIn from './pages/SignIn';
import Logout from './pages/Logout';

import NotFound from './pages/NotFound';

const routes = (store) => {
	return  (
		<Switch>        
			<Route path="/" exact component={Home} />
			<Route path="/search" exact component={Search} />
			<Route path="/products" exact component={Products} />
			<AuthenticatedRoute path="/carts" exact component={Cart} store={store} />
			<AuthenticatedRoute path="/orders" exact component={Orders} store={store} />
			<Route path="/signin" exact component={SignIn} />
			<Route path="/logout" exact component={Logout} />
			<Route path="/product/detail" component={ProductDetail} />
			<Route component={NotFound} />
		</Switch>
	);
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
	const {store} = rest;
	
	return (  
	  <Route {...rest} render={props => (
	    store.getState().session.user.isLoggedIn ? (
	      <Component {...props}/>
	    ) : (
	      <Redirect to={{
	        pathname: '/signin',
	        state: { from: props.location }
	      }}/>
	    )
	  )}/>
	)
}

export default routes;