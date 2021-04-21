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
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/users',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All-Users',
        to: '/users',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add-Users',
        to: '/users/add-users',
      }
      
    ]
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
]

export default _nav
