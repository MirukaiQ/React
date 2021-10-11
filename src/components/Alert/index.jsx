import React, {useContext, useReducer} from 'react';
import { AlertContext } from '../../App';

const Alert = () => {
    const alert = useContext(AlertContext)
    
    if(!alert) {
        return null
    }

    return (
        <div>
            <p>Very important message!</p>
        </div>
    );
}

export default Alert;
