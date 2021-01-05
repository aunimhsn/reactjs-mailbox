import { IconButton } from '@material-ui/core';
import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PrintIcon from '@material-ui/icons/Print';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';

export default function Mail() {
    const history = useHistory();

    return (
        <div className="mail">
            <div className="mail__header">
                <div className="mail__headerLeft">
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail__headerRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>

            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Subject</h2>
                    <LabelImportantIcon className="mail__important" />
                    <p className="mail__title">Title</p>
                    <p className="mail__time">14:47</p>
                </div>

                <div className="mail__message">
                    <p>Hola todos !</p>
                </div>
            </div>
            
        </div>
    )
}
