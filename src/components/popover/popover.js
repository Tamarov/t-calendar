import React from 'react';
import styles from './popover.module.css';

const Popover = (props) => {
    function viewTime(data){
        let tmp = new Date(data)
        return `${tmp.getHours()}-${tmp.getMinutes()}`
    }

    function typeEvents(data){
        switch(data){
            case "meetingExpert": return "Зустріч з експертом"
            case "qa": return "Запитання-відповідь"
            case "conference": return "Конференція"
            case "webinar": return "Вебінар"
            default: return "Невідомий тип зустрічі"
        }
    }
    return (
        <div className={styles.popover}>
            <div className={styles.popover__wrap}>
                <div className={styles.popover__title}>{props.event.event.info.title}</div>
                <div className={styles.popover__type}><span>Тип зустрічі:</span> {typeEvents(props.event.event.type)}</div>
                <div className={styles.popover__description}><span>Опис:</span> {props.event.event.info.description}</div>
                <div className={styles.popover__date}><span>Зустріч запланована на:</span> {viewTime(props.event.event.date)}</div>
                <div className={styles.popover__loc}><span>Місце зустрічі:</span> {props.event.event.info.loc}</div>
            </div>
        </div>
    )
}

export default Popover