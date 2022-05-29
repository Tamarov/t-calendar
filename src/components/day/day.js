import React, {useState} from 'react';
import styles from './day.module.css';

import Popover from '../popover/popover';

const Day = (props) => {

    const [popover, setPopover] = useState(false)

    function elemColor(props){
        if(props.event.event !== null){
            if(props.event.event.type === "meetingExpert" && (props.filter === "all" || props.filter === "meetingExpert")){
                return styles.day + ' ' + styles.meetingExpert
            }
            if(props.event.event.type === "qa" && (props.filter === "all" || props.filter === "qa")){
                return styles.day + ' ' + styles.qa
            }
            if(props.event.event.type === "conference" && (props.filter === "all" || props.filter === "conference")){
                return styles.day + ' ' + styles.conference
            }
            if(props.event.event.type === "webinar" && (props.filter === "all" || props.filter === "webinar")){
                return styles.day + ' ' + styles.webinar
            }
        }
        return styles.day
    }

    return (
        <div className={elemColor(props)} onClick={()=>{
            if(props.event.event !== null){
                if(popover){
                    setPopover(false)
                }else{
                    setPopover(true)
                }
            }
        }}>
            {popover ? <Popover setPopover={setPopover} event={props.event}/> : null}
            {props.count}
        </div>
    )
}

export default Day