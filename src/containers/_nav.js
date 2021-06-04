import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'users',
    to: '/users',
    icon: 'cil-puzzle',
    // _children: [
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'All-Users',
    //     to: '/users',
    //   },
           
    // ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'News',
    to: '/News',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Blogs',
    to: '/Blogs',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'transactions',
    to: '/transactions',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Earning',
        to: '/earning',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Mining',
        to: '/mining',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Refferal',
        to: '/referral',
      },
    ]
  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Manege Price',
    to: '/',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
    ]
  }
]

export default _nav
