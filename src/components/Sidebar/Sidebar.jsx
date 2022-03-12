import { Button, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import SideBarOptions from './SideBarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

export default function Sidebar() {
    const dispatch=useDispatch()
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon fontSize='large'/> }
        className='sidebar__compose'
        onClick={()=>dispatch(openSendMessage())}
        >
            Compose
        </Button>

        <SideBarOptions Icon={InboxIcon} title='Inbox' number={54} selected />
        <SideBarOptions Icon={StarIcon} title='Starred' number={78} />
        <SideBarOptions Icon={AccessTimeIcon} title='Snoozed' number={21}  />
        <SideBarOptions Icon={LabelImportantIcon} title='Important' number={10}  />
        <SideBarOptions Icon={NearMeIcon} title='Sent' number={9}  />
        <SideBarOptions Icon={NoteIcon} title='Drafts' number={6}  />
        <SideBarOptions Icon={ExpandMoreIcon} title='More' number={54} />

        <div className="sidebar__footer">
            <div className="sidebar__footericons">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <LocalPhoneIcon/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}
