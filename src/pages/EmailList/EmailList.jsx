import { Checkbox , IconButton } from '@material-ui/core'
import React from 'react'
import './EmailList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SectionEmail from './SectionEmail';
import EmailRow from './EmailRow';
import { useSelector } from 'react-redux';



export default function EmailList() {
  const {email}=useSelector(state=>state.mail)
  
  return (
    <div className='emaillist'>
      <div className="emaillist__setting">
        <div className="emaillist__settingleft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton>
          <IconButton>
            <RedoIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
        <div className="emaillist__settingright">
        <IconButton>
            <ChevronLeftIcon/>
        </IconButton>
        <IconButton>
            <ChevronRightIcon/>
        </IconButton>
        <IconButton>
            <KeyboardHideIcon/>
        </IconButton>
        <IconButton>
            <SettingsIcon/>
        </IconButton>
        </div>
      </div>
      <div className="emaillist__sections">
      <SectionEmail Icon={InboxIcon} title='Primary' color='red' selected  />
      <SectionEmail Icon={PeopleIcon} title='Social' color='blue'  />
      <SectionEmail Icon={LocalOfferIcon} title='Promotions' color='green'  />
      </div>
      <div className="emaillist__list">
        {email?.map(email=>(
          <EmailRow 
          key={email.id}
        title={email.title}
        subject={email.subject}
        description={email.description}
        time={email.time}
        />
        ))}
        
      </div>
    </div>
  )
}
