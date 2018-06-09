import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './containers/App';
import About from './containers/about';
import Posts from './components/Posts';
import Postform from './components/Postform';
import Entry from './components/Entry';
import Login from './components/Login';
import Logout from './components/Logout';
import CheckVoucher from './components/CheckVoucher';
import AddCheckVoucher from './components/AddCheckVoucher';

export default () => {
 return (
   <BrowserRouter>
    <Switch>
        <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/about' component={About}/>
        <Route path='/posts' component={Posts}/>
        <Route path='/postform' component={Postform}/>
        <Route path='/entry' component={Entry}/>
        <Route path='/checkvoucher' component={CheckVoucher}/>
        <Route path='/addcheck' component={AddCheckVoucher}/>
        </Switch>
    </Switch>
   </BrowserRouter>
 )
}