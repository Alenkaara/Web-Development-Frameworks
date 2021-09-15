import React from 'react'
import styles from './MainSection.module.css';
import soster from './soster.png';

export default function MainSection(props) {
    return (
        <div className={ styles.container }>
            <div className={ styles.container2 }>
            <span className={ styles.bigTitle }>{ props.sectionTitle } </span>
            <span className={ styles.redText }>{ props.subTitle } </span>
            <span className={ styles.blueText }>{ props.sectionBlueText } </span>
            <span className={ styles.blackText }>{ props.sectionText } </span>
            <span className={ styles.smallBlackText }>{ props.vaikutusTeksti } </span>

            <span className={ styles.statusSmallBlackText }>{ props.tartuntaTeksti }</span>
            <span className={ styles.statusSmallBlackText }>{ props.tuoreTeksti }</span>
            <span className={ styles.statusSmallBlackText }>{ props.edeltavatTeksti }</span>

            <span className={ styles.numbers }>{ props.tartuntaLuku }</span>
            <span className={ styles.numbers }>{ props.tuoreLuku }</span>
            <span className={ styles.numbers }>{ props.edeltaLuku }</span>

            <span className={ styles.deadText }>{ props.kuolleetTeksti }</span>

            <span className={ styles.numbers2 }>{ props.kuolleetLuku }</span>
            <span className={ styles.numbers2 }>{ props.tuoreLuku2 }</span>
            <span className={ styles.numbers2 }>{ props.edeltaLuku2 }</span>
            </div>
        </div>
    )
}
