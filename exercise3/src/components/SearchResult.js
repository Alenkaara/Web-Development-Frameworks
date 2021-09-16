import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} width="279" height="373" /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div>{ props.author }</div>
          <div>{ props.type }</div>
          <div>{ props.rating }/5</div>
          <div>{ props.price }€</div>
        </div>
    </div>
  )
}
