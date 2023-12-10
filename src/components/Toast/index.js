import React from 'react';
import { Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


const Toast = () => {
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.messageReducer);
    const closeHandler = () => {
        dispatch({ type: 'CLEAR_MESSAGE' });
    }
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={!!message}
            autoHideDuration={2500}
            onClose={closeHandler}
            ContentProps={{
                'aria-describedby': 'message-id',
                sx: {
                    display: 'block',
                    textAlign: 'center'
                }
            }}
            message={message}
        />
    )
}

export default Toast