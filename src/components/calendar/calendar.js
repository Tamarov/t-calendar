import React from 'react';
import styles from './calendar.module.css';

import Month from '../month/month';

const Calendar = (props) => {

    function viewMonth(props){
        return props.data.map(
            (i) => {
                return <Month key={i.month} data={i} filter={props.filter}/>
            }
        )
    }

    return (
        <div className={styles.calendar}>
            {viewMonth(props)}
        </div>
    )
}

export default Calendar