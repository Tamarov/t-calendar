import React from 'react';
import styles from './filter.module.css';

const Filter = (props) => {

    return (
        <div className={styles.filter}>
            <div className={styles.filter__title}>Фільтр типу міроприємств</div>
            <select value={props.obj.filter} onChange={(e) => {
                props.obj.setFilter(e.target.value)
            }}>
                <option value="all">Без фільтру</option>
                <option value="meetingExpert">Зустріч з експертом</option>
                <option value="qa">Запитання-відповідь</option>
                <option value="conference">Конференція</option>
                <option value="webinar">Вебінар</option>
            </select>
        </div>
    )
}

export default Filter