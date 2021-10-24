import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from '../components/ui/navbar/Navbar'
import { PanelPage } from '../pages/panel/PanelPage'
import { UserPage } from '../pages/user/UserPage'


export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />

            <div className="container mt-3">

                <Switch>
                    <Route exact path="/dashboard/panel" component={ PanelPage } />
                    <Route exact path="/dashboard/user" component={ UserPage } />
                    
                    <Redirect to="/dashboard/panel" />
                </Switch>

            </div>
        </>
    )
}
