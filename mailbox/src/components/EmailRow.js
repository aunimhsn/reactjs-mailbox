import React from 'react';
import './EmailRow.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Checkbox, IconButton } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { selectMail } from '../features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {
    let history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time
            })
        );

        history.push('/mail')
    };

    return (
        <div onClick={(openMail)} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>
                    {subject} - <span className="emailRow__description">{description}</span>
                </h4>
            </div>
            <div className="emailRow__time">
                {time}
            </div>
        </div>
    )
}

export default EmailRow
