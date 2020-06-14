// import React from 'react';
import Order from './views/Order'
import CustomerMap from './views/Map/CustomerMap'
// import AgentMAp from './views/Map/AgentMAp'
import Summary from './views/Order/Summary'
import Address from './views/Order/Address'
import Community from './views/Community'
import History from './views/History'
import Account from './views/Pages/Accout'
import Edit from './views/Community/Editor'
import View from './views/Community/View'
import Page404 from './views/Pages/Page404'

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/community/edit/:id', exact: true, name: 'Edit', component: Edit },
  { path: '/order/summary', exact: true, name: 'Summary', component: Summary },
  { path: '/order/address', exact: true, name: 'Address', component: Address },
  { path: '/community/edit', exact: true, name: 'Edit', component: Edit },
  { path: '/community/:id', exact: true, name: 'View', component: View },
  { path: '/order', exact: true, name: 'Order', component: Order },
  { path: '/account', exact: true, name: 'Account', component: Account },
  { path: '/community', exact: true, name: 'Community', component: Community },
  { path: '/history', exact: true, name: 'History', component: History },
  { path: '/account/address', exact: true, name: 'Map', component: CustomerMap },
  { path: '/', exact: false, name: 'Home', component: Page404 }
];

export default routes;