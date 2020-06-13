export const customer =  {
  items: [
    {
      name: 'My Account',
      url: '/account',
      icon: 'fa fa-user',
    },
    {
      name: 'Order',
      url: '/order',
      icon: 'fa fa-cart-plus',
    },
    {
      name: 'Community',
      url: '/community',
      icon: 'fa fa-globe',
    },
    {
      name: 'History',
      url: '/history',
      icon: 'fa fa-history',
    },
    {
      name: 'Support',
      url: '/support',
      icon: 'fa fa-question-circle',
    },
    {
      name: 'About',
      url: '/about',
      icon: 'fa fa-info-circle',
    },
  ],
};

export const agent =  {
  items: [
    {
      name: 'My Account',
      url: '/account',
      icon: 'fa fa-user',
    },
    {
      name: 'Pickups',
      url: '/pickups',
      icon: 'fa fa-truck',
      children: [
        {
          name: 'New',
          url: '/pickups/new',
          icon: 'fa fa-plus-circle',
        },
        {
          name: 'Pending',
          url: '/pickups/pending',
          icon: 'fa fa-pause-circle-o',
        },
      ],
    },
    {
      name: 'History',
      url: '/history',
      icon: 'fa fa-history',
    },
    {
      name: 'Support',
      url: '/support',
      icon: 'fa fa-question-circle',
    },
  ],
};

export const admin =  {
  items: [
    {
      name: 'My Account',
      url: '/account',
      icon: 'fa fa-user',
    },
    {
      name: 'Agents',
      url: '/agent',
      icon: 'fa fa-users',
      children: [
        {
          name: 'Add',
          url: '/agent/edit',
          icon: 'fa fa-plus-circle',
        },
        {
          name: 'Review',
          url: '/agent/review',
          icon: 'fa fa-eye',
        },
      ],
    },
    {
      name: 'Communty',
      url: '/communty',
      icon: 'fa fa-globe',
      children: [
        {
          name: 'Add',
          url: '/community/edit',
          icon: 'fa fa-plus-circle',
        },
        {
          name: 'Review',
          url: '/community',
          icon: 'fa fa-eye',
        },
      ],
    },
    {
      name: 'Customer',
      url: '/customer',
      icon: 'fa fa-male',
    },
  ],
};

// export default {
//   items: [
//     {
//       name: 'Order',
//       url: '/order',
//       icon: 'icon-speedometer',
//       badge: {
//         variant: 'info',
//         text: 'NEW',
//       },
//     },
//     {
//       title: true,
//       name: 'Sample Header',
//       wrapper: {            // optional wrapper object
//         element: '',        // required valid HTML5 element tag
//         attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
//       },
//       class: ''             // optional class names space delimited list for title item ex: "text-center"
//     },
//     {
//       name: 'Order',
//       url: '/order',
//       icon: 'icon-drop',
//     },
//     {
//       name: 'History',
//       url: '/history',
//       icon: 'icon-pencil',
//     },
//     {
//       title: true,
//       name: 'Header',
//       wrapper: {
//         element: '',
//         attributes: {},
//       },
//     },
//     {
//       name: 'Community',
//       url: '/community',
//       icon: 'icon-star',
//       children: [
//         {
//           name: 'Add',
//           url: '/community/edit',
//           icon: 'icon-star',
//         },
//         {
//           name: 'Review',
//           url: '/community',
//           icon: 'icon-star',
//           badge: {
//             variant: 'secondary',
//             text: '4.7',
//           },
//         },
//       ],
//     },
//     {
//       divider: true,
//     },
//     {
//       title: true,
//       name: 'Extras',
//     },
//     {
//       name: 'Support',
//       url: '/support',
//       icon: 'icon-star',
//     },
//     {
//       name: 'Disabled',
//       url: '/dashboard',
//       icon: 'icon-ban',
//       attributes: { disabled: true },
//     },
//   ],
// };
