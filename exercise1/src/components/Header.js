import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerBackground}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    HELSINGIN SANOMAT </div>
                <div>
                    Uutiset</div>
                <div>
                    Lehdet</div>
                <div>
                    Tilaa</div>
                <div>
                    Kirjaudu 👤</div>
                <div>
                    Hae 🔍</div>
                <div>
                    Valikko ☰</div>
            </div>
        </div>
    )
}
