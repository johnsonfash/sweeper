import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { removeAuthenticatedState, isAuthUserType } from '../../services/Auth'

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import { customer, agent, admin} from '../../_nav';
// import navigation from '../../_nav';
// routes config
import routes from '../../routeList';
import DefaultFooter from './DefaultFooter'
import DefaultHeader from './DefaultHeader'

class DefaultLayout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.signOut = this.signOut.bind(this)
  }


  signOut(e) {
    e.preventDefault()
    removeAuthenticatedState()
    window.location.reload(true);
    // this.props.history.push('/login')
  }

  render() {
    const mystyle = {
      backgroundColor: "white",
    };

    let nav;
    switch (isAuthUserType()){
      case 'customer':
        nav = customer;
        break;
      case 'agent':
        nav = agent;
        break;
      case 'admin':
        nav = admin;
        break;
      default:
        nav = {};
        break;
    }

    return (
      <div className="app">
        <AppHeader fixed>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarNav navConfig={nav} {...this.props} router={router}/>
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main" style={mystyle}>
            <AppBreadcrumb appRoutes={routes} router={router}/>
            
            <Container fluid >
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  {/* <Redirect from="/" to="/dashboard" /> */}
                </Switch>
            </Container>
          </main>
        </div>
        <AppFooter>
            <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
