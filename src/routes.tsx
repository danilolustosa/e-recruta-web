import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobForm from './pages/JobForm';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Jobs} path="/jobs" />
            <Route component={JobForm} path="/jobform" />
        </BrowserRouter>
    );
}

export default Routes;