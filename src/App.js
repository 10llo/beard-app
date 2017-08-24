import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AppDashboard from './components/AppDashboard'
import DateRangeComponent from './components/DateRangeComponent';

class  AppContainer extends Component {
    render(){
        return(
            <BrowserRouter>
                <div className="container">
                    <Route path="/index" component={AppDashboard}/>
                    <Route path="/date" component={DateRangeComponent}/>
                </div>
            </BrowserRouter>
        )
    }
}


export default AppContainer;