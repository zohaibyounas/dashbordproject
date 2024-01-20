import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkIcon from '@mui/icons-material/Work';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import './sidebar.css'

import { Link } from 'react-router-dom';
export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                 <li className="sidebarListItem active">
                  <LineStyleIcon className='sidebarIcon' />
                  Home
                </li>
                <li className="sidebarListItem">
                  <TimelineIcon className='sidebarIcon' />
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <TrendingUpIcon className='sidebarIcon' />
                  Sales
                </li>
            </ul>
        </div>   
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/users" className='link' style={{textDecoration:'none', color:'inherit'}}>
                <li className="sidebarListItem active">
                  <PersonOutlineIcon className='sidebarIcon' />
                  Users
                </li>
                </Link>
                <Link to="/products" className='link' style={{textDecoration:'none', color:'inherit'}}>
                <li className="sidebarListItem">
                  <Inventory2Icon className='sidebarIcon' />
                  Products
                </li>
                </Link>
                <li className="sidebarListItem">
                  <PaidSharpIcon className='sidebarIcon' />
                  Transaction
                </li>
                <li className="sidebarListItem">
                  <AssessmentRoundedIcon className='sidebarIcon' />
                  Reports
                </li>
            </ul>
        </div>   
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                  <MailOutlineIcon className='sidebarIcon' />
                  Mail
                </li>
                <li className="sidebarListItem">
                  <DynamicFeedIcon className='sidebarIcon' />
                  Feedbeek
                </li>
                <li className="sidebarListItem">
                  <ChatBubbleOutlineIcon className='sidebarIcon' />
                  Messages
                </li>
            </ul>
        </div>   
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                  <WorkIcon className='sidebarIcon' />
                  Manage
                </li>
                <li className="sidebarListItem">
                  <TimelineIcon className='sidebarIcon' />
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <ReportGmailerrorredIcon className='sidebarIcon' />
                  Reports
                </li>
            </ul>
        </div>   
      </div>
    </div>
  )
}
