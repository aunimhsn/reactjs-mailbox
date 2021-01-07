import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ContactsIcon from '@material-ui/icons/Contacts';
import MessageIcon from '@material-ui/icons/Message';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

export default function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button 
                className="sidebar__newmessage" 
                startIcon={<AddIcon />}
                onClick={() => dispatch(openSendMessage())}
            >
                New message
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={7} />
            <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={42} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={3} />
            <SidebarOption Icon={SendIcon} title="Sent" number={33} />
            <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={17} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={5} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <ContactsIcon />
                    </IconButton>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
