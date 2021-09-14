import React from 'react'
import styles from './Header.module.css';

export default function Header(props) {
    return (
        <div className={ styles.headerBackground }>
            <div className={ styles.container }>
            <span className={ styles.brand }>{ props.bigText } </span> { props.smallerText }
            </div>
        </div>
    )
}
