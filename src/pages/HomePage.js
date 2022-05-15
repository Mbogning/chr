import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
// components
import Sidebar from "../components/Sidebar";
import { Routes } from "../routes";
import Dashboard from './dashboard/DashboardOverview';
import Nationale from './admin/national/Nationale';
import EditNationale from './admin/national/EditNationale';
import DetailNationale from './admin/national/DetailNationale';
import Regionale from './admin/regionale/Regionale';
import Paroisse from './admin/paroisse/Paroisse';
import District from './admin/district/District';

import Service from './admin/service/Service';
import Personnel from './admin/personnel/Personnel';
import OrientationService from './admin/orientationService/OrientationService';
import OrientationGrade from './admin/orientationGrade/OrientationGrade';
import Grade from './admin/grade/Grade';






const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>

    {/* pages */}
    <RouteWithSidebar exact path={Routes.Dashboard.path} component={Dashboard} />
    <RouteWithSidebar exact path={Routes.Nationale.path} component={Nationale} />
    <RouteWithSidebar exact path={Routes.EditNationale.path} component={EditNationale} />
    <RouteWithSidebar exact path={Routes.DetailNationale.path} component={DetailNationale} />
    <RouteWithSidebar exact path={Routes.Regionale.path} component={Regionale} />
    <RouteWithSidebar exact path={Routes.Paroisse.path} component={Paroisse} />
    <RouteWithSidebar exact path={Routes.District.path} component={District} />


    <RouteWithSidebar exact path={Routes.Service.path} component={Service} />
    <RouteWithSidebar exact path={Routes.Personnel.path} component={Personnel} />
    <RouteWithSidebar exact path={Routes.OrientationService.path} component={OrientationService} />
    <RouteWithSidebar exact path={Routes.OrientationGrade.path} component={OrientationGrade} />
    <RouteWithSidebar exact path={Routes.Grade.path} component={Grade} />



  </Switch>
);
