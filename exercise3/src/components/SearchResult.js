import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} width="200" /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={ styles.author }>{ props.author }</div>
          <div className={ styles.rating }>{ props.rating }
            <span className={styles.ratingAmount }>{props.ratingAmount } </span></div>
          <div className={ styles.price }>{ props.price }€</div>
          <div className={ styles.arrivalLight }>{ props.arrivalLight }
            <span className={styles.arrivalBold }>{props.arrivalBold } </span></div>
        </div>
        <div className={ styles.line }>_______________________________________________________________________</div>
    </div>
  )
}