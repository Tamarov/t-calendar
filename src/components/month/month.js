import React from 'react';
import styles from './month.module.css';

import Day from '../day/day';

const Month = (props) => {

    function viewDay(props){
        let tmp = []
        for(let i = 0; i < props.data.day; i++){
            let obj = {
                date: props.data.date,
                event: dataEvent(props.data.events, i+1)
            }
            tmp.push(<Day key={i} count={i+1} event={obj} filter={props.filter} />)
        }
        return tmp
    }

    function dataEvent(data, count){
        if(data.length > 0){
            for(let i = 0; i < data.length; i++){
                if(count === getDay(data[i].date)){
                    return data[i]
                }
            }
        }
        return null
    }

    function getDay(data){
        let tmp = new Date(data)
        return tmp.getDate()
    }

    return (
        <div className={styles.month}>
            <div className={styles.month__title}>{props.data.month}</div>
            <div className={styles.month__grid}>
                {viewDay(props)}
            </div>
        </div>
    )
}

export default Month