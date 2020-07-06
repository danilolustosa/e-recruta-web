import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobForm from './pages/JobForm';
import Job from './pages/Job';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Jobs} path="/jobs" />
            <Route component={JobForm} path="/jobform" />
            <Route component={Job} path="/job" />
        </BrowserRouter>
    );
}

export default Routes;