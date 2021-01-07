import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (formData) => {
        console.log(formData)
    };

    const dispatch = useDispatch();
    
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h4>New Message</h4>
                <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to" 
                    placeholder="To" 
                    type="text" 
                    ref={register({ required: true })} 
                />
                {errors.to && (<p className="sendMail__error">To is required!</p>)}

                <input 
                    name="subject" 
                    placeholder="Subject" 
                    type="text" 
                    ref={register({ required: true })} 
                />
                {errors.subject && (<p className="sendMail__error">Subject is required!</p>)}

                <input 
                    name="message"
                    placeholder="Message..." 
                    type="text" 
                    className="sendMail__message"
                    ref={register({ required: true })} 
                />
                {errors.message && (<p className="sendMail__error">Message is required!</p>)}

                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail