import React from 'react'
import styles from './SideSection.module.css';

export default function SideSection(props) {
    return (
        <div className={ styles.container }>
            <span className={ styles.sideSectionTitle }>{props.SideSectionTitle}  </span>
            
        </div>
    )
}
