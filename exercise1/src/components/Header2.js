import React from 'react'
import styles from './Header2.module.css';

export default function Header() {
    return (
        <div className={styles.headerBackground}>
            <div className={styles.container}>
                <div>
                    Etusivu</div>
                <div>    
                    HS Visio</div>
                <div>
                    Luetuimmat</div>
                <div>
                    Politiikka</div>
                <div>
                    Kaupunki</div>
                <div>
                    Kulttuuri</div>
                <div>
                    Tiede</div>
                <div>
                    Hyvinvointi</div>
                <div>
                    Ruoka</div>
                <div>
                    Nyt</div>

            </div>
        </div>
    )
}