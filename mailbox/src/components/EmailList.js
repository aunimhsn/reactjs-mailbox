import React, { useState, useEffect } from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InboxIcon from '@material-ui/icons/Inbox';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from '../firebase';

export default function EmailList() {
    const [emails, setEmails] = useState([]);
    
    useEffect(() => {
        db.collection('emails')
        .orderBy('timestamp', 'desc')
        .get()
        .then((querySnapshot) => {
            setEmails(
                    querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        });
    }, [emails]);

    const getTimeStr = (timestamp) => {
        let date = new Date(timestamp*1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();

        return `${hours}:${minutes}`; 
    };

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="tomato" selected={true}></Section>
                <Section Icon={PeopleIcon} title="Social" color="steelblue"></Section>
                <Section Icon={LocalOfferIcon} title="Promotions" color="seagreen"></Section>
            </div>
            <div className="emailList__list">
                {emails.map(({id, data: { to, subject, message, timestamp }}) => (
                    <EmailRow 
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={getTimeStr(timestamp)}
                    />
                ))}              
            </div>
        </div>
    )
}
