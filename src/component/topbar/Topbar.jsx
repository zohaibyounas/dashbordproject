import React from 'react'
import './topbar.css'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function topar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">CompanyLogo</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
          <NotificationsNoneIcon />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
          <LanguageIcon />
                </div>
                <div className="topbarIconContainer">
          <SettingsIcon />
                </div>
                <img src="https://images.unsplash.com/photo-1525186888543-d962041a1d90?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="topAvatar"
                 alt=""
                   />
            </div>
        </div>
      
    </div>
  )
}

