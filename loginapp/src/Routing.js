import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './Component/login';
import Register from './Component/register';
import Profile from './Component/profile';
import User from './Component/userList';

const Routing =() => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/users" component={User}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;